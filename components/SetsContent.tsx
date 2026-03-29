"use client";

import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";
import { products } from "@/data/products";

const copy = {
  pt: {
    eyebrow: "Kits sugeridos",
    title: "Combinações prontas para presente, rotina e descoberta.",
    lead: "Uma loja pequena vende melhor quando ajuda o cliente a montar uma compra com contexto. Estes kits entram para aumentar ticket medio e facilitar decisao.",
    cta: "Pedir este kit",
    sets: [
      {
        name: "Rotina Brasileira",
        items: ["Propolis Verde Brasileiro", "Cafe Especial do Cerrado"],
        price: "JPY 5.480"
      },
      {
        name: "Descoberta da Natureza",
        items: ["Propolis Verde Brasileiro", "Acai em Po Energia"],
        price: "JPY 5.880"
      },
      {
        name: "Primeiro Pedido",
        items: ["Cafe Especial do Cerrado", "Acai em Po Energia"],
        price: "JPY 3.680"
      }
    ]
  },
  ja: {
    eyebrow: "おすすめセット",
    title: "ギフト用、日常用、はじめて用の組み合わせ。",
    lead: "小さなストアでは、選びやすいセット提案が購入率と客単価の両方に効きます。まずはわかりやすい組み合わせから始めます。",
    cta: "このセットを注文",
    sets: [
      {
        name: "ブラジル習慣セット",
        items: ["ブラジル産グリーンプロポリス", "セラード産スペシャルティコーヒー"],
        price: "JPY 5,480"
      },
      {
        name: "自然の発見セット",
        items: ["ブラジル産グリーンプロポリス", "アサイーパウダー"],
        price: "JPY 5,880"
      },
      {
        name: "はじめての注文セット",
        items: ["セラード産スペシャルティコーヒー", "アサイーパウダー"],
        price: "JPY 3,680"
      }
    ]
  }
} as const;

export function SetsContent() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading narrow">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.title}</h1>
          </div>
          <p>{t.lead}</p>
        </div>

        <div className="journal-grid">
          {t.sets.map((setItem, index) => (
            <article key={setItem.name} className="journal-card">
              <p className="eyebrow">Set 0{index + 1}</p>
              <h3>{setItem.name}</h3>
              <ul className="bullet-list">
                {setItem.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="lead">{setItem.price}</p>
              <Link href="/checkout" className="text-link">{t.cta}</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
