"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { useLanguage } from "@/components/LanguageProvider";
import { getProductBySlug, products } from "@/data/products";

export function CheckoutContent() {
  const { language } = useLanguage();
  const [slug, setSlug] = useState(products[0].slug);
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nextSlug = params.get("product");
    if (nextSlug && getProductBySlug(nextSlug)) {
      setSlug(nextSlug);
    }
  }, []);

  const product = getProductBySlug(slug) ?? products[0];

  const copy = {
    pt: {
      eyebrow: "Iniciar pedido",
      title: "Monte seu pedido e envie em poucos passos.",
      lead: "Este checkout simples funciona como fluxo inicial de compra. O cliente escolhe o produto, define quantidade e envia o pedido por email ou WhatsApp.",
      product: "Produto",
      quantity: "Quantidade",
      customer: "Nome",
      city: "Cidade no Japao",
      notes: "Observacoes",
      total: "Total estimado",
      email: "Enviar por email",
      whatsapp: "Enviar por WhatsApp",
      browse: "Voltar ao catalogo",
      placeholderName: "Seu nome",
      placeholderCity: "Tokyo, Osaka, Kyoto...",
      placeholderNotes: "Duvidas, horario de entrega, pedido maior..."
    },
    ja: {
      eyebrow: "注文を始める",
      title: "商品を選び、必要事項を入れてお問い合わせください。",
      lead: "この簡易チェックアウトでは、商品と数量を決めて、そのままメールまたはWhatsAppで注文内容を送れます。",
      product: "商品",
      quantity: "数量",
      customer: "お名前",
      city: "お届け先の都市",
      notes: "ご要望",
      total: "概算金額",
      email: "メールで送る",
      whatsapp: "WhatsAppで送る",
      browse: "商品一覧へ戻る",
      placeholderName: "お名前",
      placeholderCity: "Tokyo, Osaka, Kyoto...",
      placeholderNotes: "配送希望、まとめ買い、質問など"
    }
  } as const;

  const t = copy[language];
  const total = product.priceYen * quantity;

  const message = useMemo(() => {
    const lines = [
      language === "pt" ? "Novo pedido da loja" : "新しい注文希望",
      `${t.product}: ${product.name[language]}`,
      `${t.quantity}: ${quantity}`,
      `${t.total}: JPY ${total.toLocaleString()}`,
      `${t.customer}: ${name || "-"}`,
      `${t.city}: ${city || "-"}`,
      `${t.notes}: ${notes || "-"}`
    ];

    return lines.join("\n");
  }, [city, language, name, notes, product, quantity, t.city, t.customer, t.notes, t.product, t.quantity, t.total, total]);

  const emailHref = `mailto:rodrigokato@gmail.com?subject=${encodeURIComponent(product.name[language])}&body=${encodeURIComponent(message)}`;
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(message)}`;

  return (
    <section className="section">
      <div className="container checkout-grid">
        <div>
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="lead">{t.lead}</p>

          <div className="checkout-form-shell">
            <label className="field-block">
              <span>{t.product}</span>
              <select
                className="field-input"
                value={product.slug}
                onChange={(event) => {
                  setSlug(event.target.value);
                  window.history.replaceState({}, "", `/checkout?product=${event.target.value}`);
                }}
              >
                {products.map((item) => (
                  <option key={item.slug} value={item.slug}>
                    {item.name[language]}
                  </option>
                ))}
              </select>
            </label>

            <label className="field-block">
              <span>{t.quantity}</span>
              <input
                className="field-input"
                type="number"
                min={1}
                value={quantity}
                onChange={(event) => setQuantity(Number(event.target.value) || 1)}
              />
            </label>

            <label className="field-block">
              <span>{t.customer}</span>
              <input className="field-input" value={name} onChange={(event) => setName(event.target.value)} placeholder={t.placeholderName} />
            </label>

            <label className="field-block">
              <span>{t.city}</span>
              <input className="field-input" value={city} onChange={(event) => setCity(event.target.value)} placeholder={t.placeholderCity} />
            </label>

            <label className="field-block">
              <span>{t.notes}</span>
              <textarea className="field-input field-textarea" value={notes} onChange={(event) => setNotes(event.target.value)} placeholder={t.placeholderNotes} />
            </label>
          </div>
        </div>

        <aside className="checkout-summary">
          <div className="checkout-product-card">
            <span className="pill">{product.badge[language]}</span>
            <h2>{product.name[language]}</h2>
            <p>{product.shortDescription[language]}</p>
            <dl className="detail-list">
              <div>
                <dt>{t.quantity}</dt>
                <dd>{quantity}</dd>
              </div>
              <div>
                <dt>{t.total}</dt>
                <dd>JPY {total.toLocaleString()}</dd>
              </div>
            </dl>
          </div>

          <p className="checkout-note">
            {language === "pt"
              ? "Depois de enviar, a loja confirma estoque, frete e forma de pagamento."
              : "送信後、在庫・送料・決済方法を確認してご案内します。"}
          </p>

          <div className="hero-actions checkout-actions">
            <a href={emailHref} className="button-primary">{t.email}</a>
            <a href={whatsappHref} className="button-secondary" target="_blank" rel="noreferrer">{t.whatsapp}</a>
            <Link href="/products" className="text-link">{t.browse}</Link>
          </div>
        </aside>
      </div>
    </section>
  );
}

