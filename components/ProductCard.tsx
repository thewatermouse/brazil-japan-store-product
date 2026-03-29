"use client";

import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

const productTones = {
  "green-propolis-drops": "tone-propolis",
  "cerrado-specialty-coffee": "tone-coffee",
  "acai-energy-powder": "tone-acai"
} as const;

export function ProductCard({ product }: ProductCardProps) {
  const { language } = useLanguage();
  const toneClass = productTones[product.slug as keyof typeof productTones] ?? "";

  return (
    <article className="product-card product-card-rich">
      <div className={`product-visual ${toneClass}`}>
        <span>{product.name[language]}</span>
      </div>
      <div className="product-meta">
        <span className="pill">{product.badge[language]}</span>
        <span className="product-price">JPY {product.priceYen.toLocaleString()}</span>
      </div>
      <h3>{product.name[language]}</h3>
      <p>{product.shortDescription[language]}</p>
      <dl className="spec-list">
        <div>
          <dt>{language === "pt" ? "Conteúdo" : "内容量"}</dt>
          <dd>{product.weight}</dd>
        </div>
        <div>
          <dt>{language === "pt" ? "Origem" : "原産地"}</dt>
          <dd>{product.origin[language]}</dd>
        </div>
      </dl>
      <Link href={`/products/${product.slug}`} className="text-link">
        {language === "pt" ? "Ver produto" : "商品を見る"}
      </Link>
    </article>
  );
}
