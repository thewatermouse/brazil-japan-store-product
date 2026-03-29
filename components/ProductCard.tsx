"use client";

import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";
import type { Language, Product } from "@/data/products";
import { assetPath } from "@/lib/asset-path";
import { localizedPath } from "@/lib/site";

type ProductCardProps = {
  product: Product;
  language?: Language;
};

const productTones = {
  "green-propolis-drops": "tone-propolis",
  "cerrado-specialty-coffee": "tone-coffee",
  "acai-energy-powder": "tone-acai"
} as const;

export function ProductCard({ product, language: forcedLanguage }: ProductCardProps) {
  const { language: contextLanguage } = useLanguage();
  const language = forcedLanguage ?? contextLanguage;
  const toneClass = productTones[product.slug as keyof typeof productTones] ?? "";

  return (
    <article className="product-card product-card-rich">
      <div className={`product-visual ${toneClass}`}>
        <img src={assetPath(product.image)} alt={product.name[language]} className="product-visual-image" />
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
          <dt>{language === "pt" ? "Conteudo" : "内容量"}</dt>
          <dd>{product.weight}</dd>
        </div>
        <div>
          <dt>{language === "pt" ? "Origem" : "原産地"}</dt>
          <dd>{product.origin[language]}</dd>
        </div>
      </dl>
      <Link href={localizedPath(`/products/${product.slug}`, language)} className="text-link">
        {language === "pt" ? "Ver produto" : "商品を見る"}
      </Link>
    </article>
  );
}
