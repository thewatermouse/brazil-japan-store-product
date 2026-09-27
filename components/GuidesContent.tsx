"use client";

import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";
import type { Language } from "@/data/products";
import { guides } from "@/data/guides";
import { localizedPath } from "@/lib/site";

const copy = {
  pt: {
    eyebrow: "Guias",
    title: "Conteúdo para conhecer os produtos brasileiros",
    lead: "Guias curtos sobre origem, uso e escolha dos produtos que vendemos — para comprar com mais confiança.",
    read: "Ler guia"
  },
  ja: {
    eyebrow: "ガイド",
    title: "ブラジル産品をもっと知るための記事",
    lead: "取り扱い商品の産地・使い方・選び方をわかりやすくまとめた記事です。安心してお選びいただくために。",
    read: "記事を読む"
  }
} as const;

export function GuidesContent({ language: forcedLanguage }: { language?: Language }) {
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
          {guides.map((guide) => (
            <article key={guide.slug} className="journal-card">
              <h3>{guide.title[language]}</h3>
              <p>{guide.description[language]}</p>
              <Link href={localizedPath(`/guides/${guide.slug}`, language)} className="text-link">
                {t.read}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
