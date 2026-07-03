"use client";

import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";
import type { Language } from "@/data/products";
import { localizedPath } from "@/lib/site";
import { products } from "@/data/products";

const copy = {
  pt: {
    eyebrow: "Kits sugeridos",
    title: "Combinações prontas para presente, rotina e descoberta.",
    lead: "Uma loja pequena vende melhor quando ajuda o cliente a montar uma compra com contexto. Estes kits entram para aumentar ticket médio e facilitar decisão.",
    cta: "Pedir este kit",
    sets: [
      {
        name: "Rotina Brasileira",
        items: ["Extrato de Própolis Verde PonLee Alcoólico - 30ml", "Café Orgânico Altinópolis Torrado Moído - 250g"],
        price: "JPY 5.480"
      },
      {
        name: "Descoberta da Natureza",
        items: ["Própolis PonLee Cúrcuma e Pólen - 30ml", "Mel Orgânico MN Propolis - Bisnaga 200g"],
        price: "JPY 5.980"
      },
      {
        name: "Primeiro Pedido",
        items: ["Café Orgânico Altinópolis Torrado Moído - 250g", "Chocolate OnVeg 70% Açúcar de Coco - 80g"],
        price: "JPY 3.380"
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
        items: ["グリーンプロポリスエキス PonLee アルコール液 30ml", "アルチノポリス オーガニックコーヒー 中挽き 250g"],
        price: "JPY 5,480"
      },
      {
        name: "自然の発見セット",
        items: ["プロポリス PonLee クルクマ＋花粉 ブレンド 30ml", "オーガニックハニー MN Propolis スクイズボトル 200g"],
        price: "JPY 5,980"
      },
      {
        name: "はじめての注文セット",
        items: ["アルチノポリス オーガニックコーヒー 中挽き 250g", "OnVeg ダークチョコレート70% ココナッツシュガー 80g"],
        price: "JPY 3,380"
      }
    ]
  }
} as const;

export function SetsContent({ language: forcedLanguage }: { language?: Language }) {
  const { language: contextLanguage } = useLanguage();
  const language = forcedLanguage ?? contextLanguage;
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
          <Link href={localizedPath("/checkout", language)} className="text-link">{t.cta}</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
