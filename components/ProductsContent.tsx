"use client";

import { ProductCard } from "@/components/ProductCard";
import { useLanguage } from "@/components/LanguageProvider";
import { products, type Language } from "@/data/products";

const copy = {
  pt: {
    eyebrow: "Catálogo",
    title: "Seleção para o consumidor final no Japão",
    description:
      "Produtos brasileiros premium, fáceis de enviar, com foco em conveniência, presente e recompra."
  },
  ja: {
    eyebrow: "商品一覧",
    title: "日本の一般消費者向けセレクション",
    description:
      "送りやすく、リピートしやすいブラジル産プレミアム商品を厳選しています。"
  }
} as const;

export function ProductsContent({ language: forcedLanguage }: { language?: Language }) {
  const { language: contextLanguage } = useLanguage();
  const language = forcedLanguage ?? contextLanguage;
  const t = copy[language];
  const visibleProducts = products.filter((product) => !product.image.startsWith("/placeholders/"));

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading narrow">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.title}</h1>
          </div>
          <p>{t.description}</p>
        </div>

        <div className="card-grid">
          {visibleProducts.map((product) => (
            <ProductCard key={product.slug} product={product} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
}
