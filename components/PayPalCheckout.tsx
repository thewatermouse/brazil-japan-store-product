"use client";

import { useEffect, useRef, useState } from "react";

import { trackPurchase, type PurchaseItem } from "@/lib/analytics";
import type { CartLine, CheckoutCustomer } from "@/lib/cart";

declare global {
  interface Window {
    paypal?: {
      Buttons: (options: {
        createOrder: () => Promise<string>;
        onApprove: (data: { orderID: string }) => Promise<void>;
        onError: (error: unknown) => void;
      }) => {
        render: (element: HTMLElement) => Promise<void>;
        close: () => void;
      };
    };
  }
}

type PayPalCheckoutProps = {
  cart: CartLine[];
  customer: CheckoutCustomer;
  language: "pt" | "ja";
  amountTotal: number;
  shippingTotal: number;
  items: PurchaseItem[];
};

const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? "";

export function PayPalCheckout({
  cart,
  customer,
  language,
  amountTotal,
  shippingTotal,
  items
}: PayPalCheckoutProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const buttonsRef = useRef<{ render: (element: HTMLElement) => Promise<void>; close: () => void } | null>(null);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    if (!clientId || !containerRef.current) {
      return;
    }

    let cancelled = false;

    async function ensureScript() {
      if (window.paypal) {
        return;
      }

      await new Promise<void>((resolve, reject) => {
        const existing = document.querySelector<HTMLScriptElement>('script[data-paypal-sdk="true"]');

        if (existing) {
          existing.addEventListener("load", () => resolve(), { once: true });
          existing.addEventListener("error", () => reject(new Error("Failed to load PayPal SDK.")), {
            once: true
          });
          return;
        }

        const script = document.createElement("script");
        script.src = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(clientId)}&currency=JPY&intent=capture`;
        script.async = true;
        script.dataset.paypalSdk = "true";
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Failed to load PayPal SDK."));
        document.head.appendChild(script);
      });
    }

    async function renderButtons() {
      try {
        await ensureScript();

        if (cancelled || !window.paypal || !containerRef.current) {
          return;
        }

        setStatus("idle");
        setMessage("");
        containerRef.current.innerHTML = "";
        buttonsRef.current?.close();

        buttonsRef.current = window.paypal.Buttons({
          createOrder: async () => {
            const response = await fetch("/api/paypal/create-order", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({ cart, customer })
            });

            const data = (await response.json()) as { id?: string; error?: string };

            if (!response.ok || !data.id) {
              throw new Error(data.error || "Failed to create PayPal order.");
            }

            return data.id;
          },
          onApprove: async ({ orderID }) => {
            const response = await fetch("/api/paypal/capture-order", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({ orderId: orderID })
            });

            const data = (await response.json()) as { error?: string };

            if (!response.ok) {
              throw new Error(data.error || "Failed to capture PayPal order.");
            }

            setStatus("success");
            setMessage(
              language === "pt"
                ? "Pagamento PayPal capturado com sucesso."
                : "PayPal no kessai ga seijo ni kakutei shimashita."
            );
            trackPurchase({
              transactionId: orderID,
              value: amountTotal,
              shipping: shippingTotal,
              currency: "JPY",
              items
            });
          },
          onError: (error) => {
            setStatus("error");
            setMessage(error instanceof Error ? error.message : "PayPal error.");
          }
        });

        await buttonsRef.current.render(containerRef.current);
      } catch (error) {
        setStatus("error");
        setMessage(
          error instanceof Error
            ? error.message
            : language === "pt"
              ? "Não foi possível carregar o PayPal."
              : "PayPal o yomikome masen deshita."
        );
      }
    }

    void renderButtons();

    return () => {
      cancelled = true;
      buttonsRef.current?.close();
      buttonsRef.current = null;
    };
  }, [cart, customer, language, amountTotal, shippingTotal, items]);

  if (!clientId) {
    return (
      <p className="checkout-note">
        {language === "pt"
          ? "Configure NEXT_PUBLIC_PAYPAL_CLIENT_ID para habilitar o checkout PayPal."
          : "NEXT_PUBLIC_PAYPAL_CLIENT_ID o settei shite PayPal checkout o yuko ni shite kudasai."}
      </p>
    );
  }

  return (
    <div className="paypal-shell">
      <div ref={containerRef} />
      {status !== "idle" ? (
        <p className={`checkout-note ${status === "success" ? "checkout-note-success" : "checkout-note-error"}`}>
          {message}
        </p>
      ) : null}
    </div>
  );
}
