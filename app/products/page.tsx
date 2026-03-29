import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading narrow">
          <div>
            <p className="eyebrow">Product catalog</p>
            <h1>Initial assortment for launch testing in Japan</h1>
          </div>
          <p>
            Focus on products with high value density, clear Brazilian origin and
            straightforward export handling.
          </p>
        </div>

        <div className="card-grid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
