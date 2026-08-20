import { getCartKitDiscount } from "@/data/kits";
import { getProductBySlug } from "@/data/products";
import { shippingEstimateTiers } from "@/data/store";
import type { CartLine, CheckoutCustomer } from "@/lib/cart";

const paypalBaseUrl =
  process.env.PAYPAL_ENV === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";

type PayPalAccessTokenResponse = {
  access_token: string;
};

type PayPalOrderResponse = {
  id: string;
  status: string;
};

export type NormalizedCheckout = {
  amountTotal: number;
  itemTotal: number;
  shippingTotal: number;
  discountTotal: number;
  lines: Array<{
    name: string;
    quantity: number;
    unitAmount: number;
  }>;
  customer: CheckoutCustomer;
};

export function isPayPalConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID &&
      process.env.PAYPAL_CLIENT_ID &&
      process.env.PAYPAL_CLIENT_SECRET
  );
}

export function normalizeCheckoutPayload(payload: {
  cart?: CartLine[];
  customer?: Partial<CheckoutCustomer>;
}) {
  const cart = Array.isArray(payload.cart) ? payload.cart : [];
  const customer: CheckoutCustomer = {
    name: payload.customer?.name?.trim() ?? "",
    email: payload.customer?.email?.trim() ?? "",
    phone: payload.customer?.phone?.trim() ?? "",
    addressLine1: payload.customer?.addressLine1?.trim() ?? "",
    addressLine2: payload.customer?.addressLine2?.trim() ?? "",
    postalCode: payload.customer?.postalCode?.trim() ?? "",
    city: payload.customer?.city?.trim() ?? "",
    notes: payload.customer?.notes?.trim() ?? ""
  };

  const validLines = cart
    .map((line) => {
      const product = getProductBySlug(line.slug);
      const quantity = Math.max(1, Number(line.quantity) || 1);

      if (!product) {
        return null;
      }

      return {
        product,
        quantity,
        lineTotal: product.priceYen * quantity,
        lineWeight: product.shippingWeightGrams * quantity
      };
    })
    .filter(
      (
        line
      ): line is {
        product: NonNullable<ReturnType<typeof getProductBySlug>>;
        quantity: number;
        lineTotal: number;
        lineWeight: number;
      } => Boolean(line)
    );

  if (!validLines.length) {
    throw new Error("Cart is empty.");
  }

  const itemTotal = validLines.reduce((sum, line) => sum + line.lineTotal, 0);
  const totalWeight = validLines.reduce((sum, line) => sum + line.lineWeight, 0);
  const shippingTotal =
    shippingEstimateTiers.find((tier) => totalWeight <= tier.maxWeightGrams)?.estimatedYen ?? 0;

  // Bundle discount is recomputed here from the cart contents (not trusted from
  // the client), capped so it can never exceed the item total.
  const { discountYen } = getCartKitDiscount(cart);
  const discountTotal = Math.min(Math.max(0, discountYen), itemTotal);

  return {
    amountTotal: itemTotal + shippingTotal - discountTotal,
    itemTotal,
    shippingTotal,
    discountTotal,
    lines: validLines.map((line) => ({
      name: line.product.name.pt,
      quantity: line.quantity,
      unitAmount: line.product.priceYen
    })),
    customer
  } satisfies NormalizedCheckout;
}

async function getPayPalAccessToken() {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error("PayPal credentials are missing.");
  }

  const response = await fetch(`${paypalBaseUrl}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "grant_type=client_credentials",
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("Failed to fetch PayPal access token.");
  }

  const data = (await response.json()) as PayPalAccessTokenResponse;
  return data.access_token;
}

export async function createPayPalOrder(checkout: NormalizedCheckout) {
  const accessToken = await getPayPalAccessToken();

  const response = await fetch(`${paypalBaseUrl}/v2/checkout/orders`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          description: "Brazil Japan Store order",
          amount: {
            currency_code: "JPY",
            value: String(checkout.amountTotal),
            breakdown: {
              item_total: {
                currency_code: "JPY",
                value: String(checkout.itemTotal)
              },
              shipping: {
                currency_code: "JPY",
                value: String(checkout.shippingTotal)
              },
              ...(checkout.discountTotal > 0
                ? {
                    discount: {
                      currency_code: "JPY",
                      value: String(checkout.discountTotal)
                    }
                  }
                : {})
            }
          },
          items: checkout.lines.map((line) => ({
            name: line.name,
            quantity: String(line.quantity),
            unit_amount: {
              currency_code: "JPY",
              value: String(line.unitAmount)
            }
          })),
          shipping: checkout.customer.addressLine1
            ? {
                name: {
                  full_name: checkout.customer.name || "Customer"
                },
                address: {
                  address_line_1: checkout.customer.addressLine1,
                  address_line_2: checkout.customer.addressLine2 || undefined,
                  admin_area_2: checkout.customer.city || undefined,
                  postal_code: checkout.customer.postalCode || undefined,
                  country_code: "JP"
                }
              }
            : undefined
        }
      ],
      payer: checkout.customer.email
        ? {
            email_address: checkout.customer.email
          }
        : undefined
    }),
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("Failed to create PayPal order.");
  }

  return (await response.json()) as PayPalOrderResponse;
}

export async function capturePayPalOrder(orderId: string) {
  const accessToken = await getPayPalAccessToken();

  const response = await fetch(`${paypalBaseUrl}/v2/checkout/orders/${orderId}/capture`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    },
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("Failed to capture PayPal order.");
  }

  return (await response.json()) as PayPalOrderResponse;
}
