"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type { Language } from "@/data/products";

const copy = {
  pt: {
    eyebrow: "Nossa curadoria",
    title: "Uma loja para apresentar o melhor do Brasil ao cliente no Japao.",
    lead:
      "A proposta e simples: vender bem para o consumidor final, com foco em produtos compactos, premium e faceis de enviar. Menos discurso operacional, mais confianca de compra.",
    cards: [
      {
        title: "Selecao enxuta",
        text: "Comecamos com itens que viajam bem, tem boa margem e contam uma historia clara de origem brasileira."
      },
      {
        title: "Experiencia bilingue",
        text: "Portugues para apresentacao comercial e japones para o cliente final entender, confiar e comprar."
      },
      {
        title: "Expansao por demanda",
        text: "O catalogo cresce conforme surgem sinais reais de recompra, ticket medio e aceitacao do mercado."
      }
    ]
  },
  ja: {
    eyebrow: "ブランドについて",
    title: "日本のお客様に向けて、ブラジルの魅力を伝えるストアです。",
    lead:
      "目指しているのは、説明ばかりのサイトではなく、実際に買いたくなるストアです。配送しやすく品質を保ちやすい商品から始め、信頼とリピートを積み上げます。",
    cards: [
      {
        title: "少数精鋭の品ぞろえ",
        text: "まずは配送しやすく、ブラジルらしさが伝わる商品だけを厳選します。"
      },
      {
        title: "日葡バイリンガル対応",
        text: "日本のお客様にも、ブランド側にもわかりやすい二言語構成です。"
      },
      {
        title: "需要を見ながら拡大",
        text: "リピート率や反応を見てから、SKUを慎重に広げていきます。"
      }
    ]
  }
} as const;

export function AboutContent({ language: forcedLanguage }: { language?: Language }) {
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
      </div>
    </section>
  );
}
