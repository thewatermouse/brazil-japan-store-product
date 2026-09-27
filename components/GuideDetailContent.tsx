"use client";

import Link from "next/link";

import { ProductCard } from "@/components/ProductCard";
import { useLanguage } from "@/components/LanguageProvider";
import type { Language } from "@/data/products";
import { getRelatedProducts, type Guide } from "@/data/guides";
import { localizedPath } from "@/lib/site";

const copy = {
  pt: {
    eyebrow: "Guia",
    back: "Ver todos os guias",
    related: "Produtos deste guia"
  },
  ja: {
    eyebrow: "ガイド",
    back: "ガイド一覧へ",
    related: "この記事で紹介した商品"
  }
} as const;

export function GuideDetailContent({
  guide,
  language: forcedLanguage
}: {
  guide: Guide;
  language?: Language;
}) {
  const { language: contextLanguage } = useLanguage();
  const language = forcedLanguage ?? contextLanguage;
  const t = copy[language];
  const relatedProducts = getRelatedProducts(guide);

  return (
    <section className="section">
      <div className="container prose-shell">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>{guide.title[language]}</h1>
        <p className="lead">{guide.intro[language]}</p>

        {guide.sections.map((section, index) => (
          <div key={index} className="guide-section">
            {section.heading ? <h2>{section.heading[language]}</h2> : null}
            {section.paragraphs.map((paragraph, pIndex) => (
              <p key={pIndex}>{paragraph[language]}</p>
            ))}
          </div>
        ))}

        <Link href={localizedPath("/guides", language)} className="text-link">
          {t.back}
        </Link>
      </div>

      {relatedProducts.length ? (
        <div className="container">
          <div className="section-heading narrow">
            <div>
              <p className="eyebrow">{t.related}</p>
            </div>
          </div>
          <div className="card-grid">
            {relatedProducts.map((product) => (
              <ProductCard key={product.slug} product={product} language={language} />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
