import Link from "next/link";
import { notFound } from "next/navigation";

import { getProductBySlug, products } from "@/data/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="section">
      <div className="container product-layout">
        <div className="product-detail-card">
          <span className="pill">{product.badge}</span>
          <h1>{product.name.ja}</h1>
          <p className="product-subtitle">{product.name.en}</p>
          <p className="lead">{product.shortDescription.en}</p>
          <div className="product-story">
            <p>{product.story.en}</p>
          </div>
          <div className="hero-actions">
            <Link href="/contact" className="button-primary">
              Start order flow
            </Link>
            <Link href="/products" className="button-secondary">
              Back to catalog
            </Link>
          </div>
        </div>

        <aside className="info-panel">
          <h2>Commercial snapshot</h2>
          <dl className="detail-list">
            <div>
              <dt>Price</dt>
              <dd>JPY {product.priceYen.toLocaleString()}</dd>
            </div>
            <div>
              <dt>Weight</dt>
              <dd>{product.weight}</dd>
            </div>
            <div>
              <dt>Shelf life</dt>
              <dd>{product.shelfLife}</dd>
            </div>
            <div>
              <dt>Origin</dt>
              <dd>{product.origin}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
