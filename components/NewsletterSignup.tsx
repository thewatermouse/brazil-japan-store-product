"use client";

import { useRef, useState } from "react";

import { useLanguage } from "@/components/LanguageProvider";
import { trackEvent } from "@/lib/analytics";

// Absolute form-action URL from any email provider (Buttondown, Mailchimp,
// ConvertKit, Formspree...). Posting to a hidden iframe avoids CORS and works
// identically on the static (Pages) and dynamic (Vercel) deploys. When unset
// the signup renders in a "coming soon" state instead of a broken form.
const endpoint = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT ?? "";
const emailField = process.env.NEXT_PUBLIC_NEWSLETTER_EMAIL_FIELD || "email";

const copy = {
  pt: {
    eyebrow: "Lista de espera",
    title: "Avisos de lançamento e novidades",
    text: "Deixe seu email para saber quando a loja abrir e receber ofertas dos primeiros pedidos.",
    placeholder: "voce@email.com",
    button: "Quero ser avisado",
    success: "Pronto! Você está na lista.",
    invalid: "Digite um email válido.",
    soon: "Cadastro em breve."
  },
  ja: {
    eyebrow: "ウェイティングリスト",
    title: "オープン通知とお知らせ",
    text: "メールをご登録いただくと、ストア開店のご案内と初回注文向けの特典をお届けします。",
    placeholder: "name@example.com",
    button: "通知を受け取る",
    success: "登録が完了しました。",
    invalid: "有効なメールアドレスを入力してください。",
    soon: "登録は近日開始します。"
  }
} as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NewsletterSignup() {
  const { language } = useLanguage();
  const t = copy[language];
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "invalid">("idle");
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    if (!emailPattern.test(email.trim())) {
      event.preventDefault();
      setStatus("invalid");
      return;
    }

    // Let the native POST reach the provider (targeting the hidden iframe so
    // the page never navigates); optimistically show success and log the lead.
    setStatus("success");
    trackEvent("generate_lead", { method: "newsletter", location: "footer" });
    setEmail("");
  }

  const configured = Boolean(endpoint);

  return (
    <div className="newsletter">
      <p className="eyebrow">{t.eyebrow}</p>
      <h3>{t.title}</h3>
      <p>{t.text}</p>

      {configured ? (
        <>
          <form
            ref={formRef}
            action={endpoint}
            method="post"
            target="newsletter-sink"
            onSubmit={handleSubmit}
            className="newsletter-form"
          >
            <input
              type="email"
              name={emailField}
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                if (status !== "idle") {
                  setStatus("idle");
                }
              }}
              placeholder={t.placeholder}
              aria-label={t.placeholder}
              className="field-input newsletter-input"
              required
            />
            <button type="submit" className="button-primary newsletter-button">
              {t.button}
            </button>
          </form>
          <iframe
            ref={iframeRef}
            name="newsletter-sink"
            title="newsletter-sink"
            className="newsletter-sink"
            aria-hidden="true"
          />
          {status === "success" ? (
            <p className="checkout-note checkout-note-success">{t.success}</p>
          ) : null}
          {status === "invalid" ? (
            <p className="checkout-note checkout-note-error">{t.invalid}</p>
          ) : null}
        </>
      ) : (
        <p className="checkout-note">{t.soon}</p>
      )}
    </div>
  );
}
