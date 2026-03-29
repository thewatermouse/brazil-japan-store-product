const steps = [
  {
    title: "Front-end sales channel",
    text: "This site acts as the branded D2C storefront, with content, catalog and customer acquisition optimized for Japan."
  },
  {
    title: "Merchant and food trading base",
    text: "Melinda & Julius Comercio de Alimentos is positioned as the operational entity for compliant trading, inventory and dispatch."
  },
  {
    title: "Logistics delegation",
    text: "Packing, shipping and order handling are operated through the fulfillment side, letting you focus on demand, branding and CAC/LTV learning."
  }
];

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container prose-shell">
        <p className="eyebrow">Operation design</p>
        <h1>Commerce layer first. Logistics delegated.</h1>
        <p className="lead">
          The model is intentionally narrow: start with premium, shelf-stable,
          lightweight Brazilian products and validate direct consumer demand in
          Japan before increasing SKU breadth or complexity.
        </p>

        <div className="stack-grid">
          {steps.map((step, index) => (
            <article key={step.title} className="step-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{step.title}</h2>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
