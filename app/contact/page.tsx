export default function ContactPage() {
  return (
    <section className="section">
      <div className="container contact-shell">
        <div>
          <p className="eyebrow">Commercial intake</p>
          <h1>Next step: connect this storefront to a real order workflow.</h1>
          <p className="lead">
            For MVP, this page can route buyers to form capture, WhatsApp,
            email, Stripe checkout or a Shopify-compatible backend.
          </p>
        </div>

        <div className="contact-card">
          <h2>MVP integration options</h2>
          <ul className="bullet-list">
            <li>Typeform or Tally for order capture</li>
            <li>Stripe Payment Links for simple checkout</li>
            <li>Shopify Storefront API for full ecommerce</li>
            <li>Internal admin handoff to Melinda & Julius</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
