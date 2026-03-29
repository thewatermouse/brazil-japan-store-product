"use client";

import { useLanguage } from "@/components/LanguageProvider";

const copy = {
  pt: {
    eyebrow: "Atendimento",
    title: "Quer comprar, revender ou tirar duvidas?",
    lead:
      "A proxima etapa aqui e plugar checkout e atendimento real. Enquanto isso, esta pagina ja pode funcionar como ponto de contato comercial.",
    cardTitle: "Canais previstos para MVP",
    items: [
      "Checkout simples com Stripe",
      "Pedido rapido por formulario",
      "Atendimento por WhatsApp ou email",
      "Handoff operacional para expedicao"
    ]
  },
  ja: {
    eyebrow: "お問い合わせ",
    title: "購入相談、卸相談、お問い合わせはこちら。",
    lead:
      "次の段階ではチェックアウトと実際のカスタマー対応を接続します。それまでは、このページをお問い合わせ窓口として使えます。",
    cardTitle: "MVPで想定している導線",
    items: [
      "Stripeによる簡易チェックアウト",
      "フォーム経由の注文受付",
      "WhatsAppまたはメール対応",
      "発送オペレーションへの引き継ぎ"
    ]
  }
} as const;

export function ContactContent() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <section className="section">
      <div className="container contact-shell">
        <div>
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="lead">{t.lead}</p>
        </div>

        <div className="contact-card">
          <h2>{t.cardTitle}</h2>
          <ul className="bullet-list">
            {t.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
