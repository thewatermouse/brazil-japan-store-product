import Link from "next/link";

import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-meta">
        <span className="pill">{product.badge}</span>
        <span className="product-price">JPY {product.priceYen.toLocaleString()}</span>
      </div>
      <h3>{product.name.ja}</h3>
      <p className="product-subtitle">{product.name.en}</p>
      <p>{product.shortDescription.en}</p>
      <dl className="spec-list">
        <div>
          <dt>Format</dt>
          <dd>{product.weight}</dd>
        </div>
        <div>
          <dt>Origin</dt>
          <dd>{product.origin}</dd>
        </div>
      </dl>
      <Link href={`/products/${product.slug}`} className="text-link">
        View product
      </Link>
    </article>
  );
}
