"use client";

import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { language } = useLanguage();

  return (
    <article className="product-card">
      <div className="product-meta">
        <span className="pill">{product.badge[language]}</span>
        <span className="product-price">JPY {product.priceYen.toLocaleString()}</span>
      </div>
      <h3>{product.name[language]}</h3>
      <p>{product.shortDescription[language]}</p>
      <dl className="spec-list">
        <div>
          <dt>{language === "pt" ? "Conteudo" : "???"}</dt>
          <dd>{product.weight}</dd>
        </div>
        <div>
          <dt>{language === "pt" ? "Origem" : "???"}</dt>
          <dd>{product.origin[language]}</dd>
        </div>
      </dl>
      <Link href={`/products/${product.slug}`} className="text-link">
        {language === "pt" ? "Ver produto" : "?????"}
      </Link>
    </article>
  );
}
