"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type { Language } from "@/data/products";

const copy = {
  pt: {
    eyebrow: "Politicas da loja",
    title: "Regras claras para uma operacao pequena que quer parecer seria desde o inicio.",
    items: [
      { title: "Pedido e confirmacao", text: "O pedido so e considerado fechado apos confirmacao comercial de disponibilidade, valor final e forma de envio." },
      { title: "Trocas e problemas", text: "Em caso de dano, erro de item ou problema relevante no recebimento, o cliente deve entrar em contato com fotos e numero do pedido." },
      { title: "Informacoes do cliente", text: "Os dados enviados no checkout simples servem apenas para contato comercial e organizacao do pedido." }
    ]
  },
  ja: {
    eyebrow: "ストアポリシー",
    title: "小さなストアでも、最初から明確なルールを持つために。",
    items: [
      { title: "注文確定について", text: "在庫、最終金額、配送方法を確認した後に正式受注となります。" },
      { title: "不具合や誤配送", text: "破損や内容違いなどの問題がある場合は、写真と注文情報を添えて連絡してください。" },
      { title: "お客様情報", text: "簡易チェックアウトで受け取る情報は、注文対応と連絡のためにのみ使用します。" }
    ]
  }
} as const;

export function PoliciesContent({ language: forcedLanguage }: { language?: Language }) {
  const { language: contextLanguage } = useLanguage();
  const language = forcedLanguage ?? contextLanguage;
  const t = copy[language];

  return (
    <section className="section">
      <div className="container prose-shell">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>{t.title}</h1>
        <div className="stack-grid">
          {t.items.map((item, index) => (
            <article key={item.title} className="step-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
