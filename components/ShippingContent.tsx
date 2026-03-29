"use client";

import { useLanguage } from "@/components/LanguageProvider";

const copy = {
  pt: {
    eyebrow: "Frete e entrega",
    title: "Como funciona o envio para o Japao.",
    cards: [
      { title: "Pedidos pequenos", text: "O foco inicial e em produtos leves, estaveis e adequados para envio internacional ao consumidor final." },
      { title: "Prazo estimado", text: "O prazo varia conforme estoque e metodo de envio, mas a loja sempre comunica isso antes da confirmacao final." },
      { title: "Pedido maior", text: "Compras em quantidade, kits e presentes podem ser tratadas pelo canal comercial para definir a melhor expedicao." }
    ]
  },
  ja: {
    eyebrow: "配送について",
    title: "日本向け配送の考え方。",
    cards: [
      { title: "小口注文中心", text: "初期段階では、軽量で常温配送しやすい商品を中心に扱います。" },
      { title: "発送目安", text: "在庫状況と配送方法によって変動しますが、最終確定前に必ず案内します。" },
      { title: "まとめ買い", text: "数量の多い注文やギフト用途は、個別に最適な発送方法を相談できます。" }
    ]
  }
} as const;

export function ShippingContent() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <section className="section">
      <div className="container prose-shell">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>{t.title}</h1>
        <div className="stack-grid">
          {t.cards.map((card, index) => (
            <article key={card.title} className="step-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
