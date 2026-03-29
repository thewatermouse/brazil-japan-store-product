"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type { Language } from "@/data/products";
import { shippingEstimateTiers } from "@/data/store";

const copy = {
  pt: {
    eyebrow: "Frete e entrega",
    title: "Como funciona o envio para o Japao.",
    lead: "Para MVP, a loja trabalha com uma tabela simples por faixa de peso. Isso deixa o cliente mais orientado e evita surpresa no pedido inicial.",
    cards: [
      { title: "Pedidos pequenos", text: "O foco inicial e em produtos leves, estaveis e adequados para envio internacional ao consumidor final." },
      { title: "Prazo estimado", text: "O prazo varia conforme estoque e metodo de envio, mas a loja sempre comunica isso antes da confirmacao final." },
      { title: "Pedido maior", text: "Compras em quantidade, kits e presentes podem ser tratadas pelo canal comercial para definir a melhor expedicao." }
    ],
    tableTitle: "Tabela inicial de frete estimado",
    weight: "Peso total do pedido",
    price: "Frete estimado",
    upTo: "ate",
    note: "Esses valores sao uma referencia operacional inicial. A confirmacao final depende da modalidade de envio e da cotacao logistica do momento."
  },
  ja: {
    eyebrow: "配送について",
    title: "日本向け配送の考え方。",
    lead: "MVP段階では、重量帯ごとのシンプルな送料目安を採用しています。最初の注文で不透明さを減らすためです。",
    cards: [
      { title: "小口注文中心", text: "初期段階では、軽量で常温配送しやすい商品を中心に扱います。" },
      { title: "発送目安", text: "在庫状況と配送方法によって変動しますが、最終確定前に必ず案内します。" },
      { title: "まとめ買い", text: "数量の多い注文やギフト用途は、個別に最適な発送方法を相談できます。" }
    ],
    tableTitle: "初期送料テーブル",
    weight: "注文総重量",
    price: "送料目安",
    upTo: "〜",
    note: "あくまで初期の目安です。最終金額は配送方法と実際の見積でご案内します。"
  }
} as const;

export function ShippingContent({ language: forcedLanguage }: { language?: Language }) {
  const { language: contextLanguage } = useLanguage();
  const language = forcedLanguage ?? contextLanguage;
  const t = copy[language];

  return (
    <section className="section">
      <div className="container prose-shell">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>{t.title}</h1>
        <p className="lead">{t.lead}</p>
        <div className="stack-grid">
          {t.cards.map((card, index) => (
            <article key={card.title} className="step-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </article>
          ))}
        </div>

        <section className="product-section-card shipping-table-card">
          <p className="eyebrow">{t.tableTitle}</p>
          <div className="shipping-table">
            <div className="shipping-table-row shipping-table-head">
              <strong>{t.weight}</strong>
              <strong>{t.price}</strong>
            </div>
            {shippingEstimateTiers.map((tier) => (
              <div key={tier.maxWeightGrams} className="shipping-table-row">
                <span>{t.upTo} {tier.maxWeightGrams}g</span>
                <span>JPY {tier.estimatedYen.toLocaleString()}</span>
              </div>
            ))}
          </div>
          <p>{t.note}</p>
        </section>
      </div>
    </section>
  );
}
