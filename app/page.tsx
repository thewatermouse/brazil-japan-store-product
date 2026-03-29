import Link from "next/link";

import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

const highlights = [
  "Small-volume, shelf-stable Brazilian products",
  "Japan-first positioning with premium storytelling",
  "Fulfillment operated by Melinda & Julius"
];

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Direct-to-consumer export concept</p>
            <h1>Brazilian essentials curated for the Japanese customer.</h1>
            <p className="hero-copy">
              A commerce frontend designed to validate product-market fit in Japan
              using compact, premium Brazilian goods like propolis, coffee and
              wellness products that travel well.
            </p>
            <div className="hero-actions">
              <Link href="/products" className="button-primary">
                Explore catalog
              </Link>
              <Link href="/about" className="button-secondary">
                Understand the operation
              </Link>
            </div>
          </div>

          <div className="hero-panel">
            <p className="panel-title">Why this model works</p>
            <ul className="bullet-list">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="stat-grid">
              <div>
                <strong>3</strong>
                <span>starter SKUs</span>
              </div>
              <div>
                <strong>0</strong>
                <span>cold chain needs</span>
              </div>
              <div>
                <strong>1</strong>
                <span>merchant structure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Launch catalog</p>
              <h2>Products with good parcel economics</h2>
            </div>
            <Link href="/products" className="text-link">
              See all SKUs
            </Link>
          </div>

          <div className="card-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container operation-grid">
          <div>
            <p className="eyebrow">Operating model</p>
            <h2>You own demand generation. The trading company owns fulfillment.</h2>
          </div>
          <div className="timeline">
            <div>
              <span>01</span>
              <p>Build a branded storefront focused on Japanese trust signals and Brazilian origin.</p>
            </div>
            <div>
              <span>02</span>
              <p>Capture consumer orders and demand data through the ecommerce layer.</p>
            </div>
            <div>
              <span>03</span>
              <p>Route logistics, inventory and shipping execution through Melinda & Julius.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
