"use client";

import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";

const copy = {
  pt: {
    eyebrow: "Atendimento e parcerias",
    title: "Fale com a loja para compras, presentes corporativos ou revenda.",
    lead:
      "Esta pagina ja funciona como canal comercial real. Se o cliente quiser pedido maior, presente, atacado leve ou tirar duvidas sobre envio ao Japao, esse e o ponto de contato.",
    cardTitle: "Como atendemos hoje",
    items: [
      "Pedido direto pelo checkout simples da loja",
      "Atendimento por email para quantidades maiores",
      "Suporte para presentes, kits e compras recorrentes",
      "Resposta comercial em portugues e japones"
    ],
    cta: "Ir para pedido"
  },
  ja: {
    eyebrow: "お問い合わせと法人対応",
    title: "購入相談、ギフト用途、少量卸のご相談はこちら。",
    lead:
      "このページは実際の商談窓口として使えます。まとめ買い、ギフト、法人利用、配送についての質問などに対応するための入口です。",
    cardTitle: "現在の対応内容",
    items: [
      "ストアの簡易チェックアウトから注文開始",
      "まとまった数量はメールで相談可能",
      "ギフトセットや継続購入の相談にも対応",
      "日本語とポルトガル語で案内可能"
    ],
    cta: "注文ページへ"
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
          <Link href="/checkout" className="button-primary">{t.cta}</Link>
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
