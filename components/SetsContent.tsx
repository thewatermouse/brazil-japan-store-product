"use client";

import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";
import type { Language } from "@/data/products";
import { getKitPricing, kits } from "@/data/kits";
import { localizedPath } from "@/lib/site";

const copy = {
  pt: {
    eyebrow: "Kits sugeridos",
    title: "Combinações prontas para presente, rotina e descoberta.",
    lead: "Uma loja pequena vende melhor quando ajuda o cliente a montar uma compra com contexto. Estes kits aumentam o ticket médio, facilitam a decisão e saem com desconto sobre a compra avulsa.",
    cta: "Pedir este kit",
    was: "de",
    save: "Economize",
    includes: "Inclui"
  },
  ja: {
    eyebrow: "おすすめセット",
    title: "ギフト用、日常用、はじめて用の組み合わせ。",
    lead: "小さなストアでは、選びやすいセット提案が購入率と客単価の両方に効きます。各セットは単品購入よりお得な価格でご用意しています。",
    cta: "このセットを注文",
    was: "通常",
    save: "お得",
    includes: "内容"
  }
} as const;

function formatYen(value: number, language: Language) {
  return `JPY ${value.toLocaleString(language === "pt" ? "pt-BR" : "ja-JP")}`;
}

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
          {kits.map((kit, index) => {
            const { items, fullYen, priceYen, savingsYen } = getKitPricing(kit);
            const kitParam = items.map((product) => product.slug).join(",");

            return (
              <article key={kit.id} className="journal-card kit-card">
                <p className="eyebrow">Set 0{index + 1}</p>
                <h3>{kit.name[language]}</h3>
                <p>{kit.tagline[language]}</p>

                <p className="kit-includes-label eyebrow">{t.includes}</p>
                <ul className="bullet-list">
                  {items.map((product) => (
                    <li key={product.slug}>{product.name[language]}</li>
                  ))}
                </ul>

                <div className="kit-price-row">
                  <span className="kit-price-now">{formatYen(priceYen, language)}</span>
                  {savingsYen > 0 ? (
                    <span className="kit-price-was">
                      {t.was} {formatYen(fullYen, language)}
                    </span>
                  ) : null}
                </div>
                {savingsYen > 0 ? (
                  <span className="pill kit-save-pill">
                    {t.save} {formatYen(savingsYen, language)}
                  </span>
                ) : null}

                <Link
                  href={`${localizedPath("/checkout", language)}?kit=${kitParam}`}
                  className="button-secondary button-inline kit-cta"
                >
                  {t.cta}
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
