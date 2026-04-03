"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { PayPalCheckout } from "@/components/PayPalCheckout";
import { useLanguage } from "@/components/LanguageProvider";
import { getProductBySlug, products, type Language } from "@/data/products";
import { shippingEstimateTiers, storeContact } from "@/data/store";
import { assetPath } from "@/lib/asset-path";
import type { CartLine, CheckoutCustomer } from "@/lib/cart";
import { emptyCheckoutCustomer } from "@/lib/cart";
import { localizedPath } from "@/lib/site";

export function CheckoutContent({ language: forcedLanguage }: { language?: Language }) {
  const { language: contextLanguage } = useLanguage();
  const language = forcedLanguage ?? contextLanguage;
  const visibleProducts = products.filter((product) => !product.image.startsWith("/placeholders/"));
  const defaultSlug = visibleProducts[0]?.slug ?? products[0].slug;

  const [cart, setCart] = useState<CartLine[]>([{ slug: defaultSlug, quantity: 1 }]);
  const [customer, setCustomer] = useState<CheckoutCustomer>(emptyCheckoutCustomer);

  useEffect(() => {
    const savedCart = window.localStorage.getItem("checkout-cart");
    const savedCustomer = window.localStorage.getItem("checkout-customer");
    const params = new URLSearchParams(window.location.search);
    const nextSlug = params.get("product");

    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart) as CartLine[];
        if (Array.isArray(parsedCart) && parsedCart.length) {
          setCart(parsedCart);
        }
      } catch {}
    }

    if (savedCustomer) {
      try {
        const parsedCustomer = JSON.parse(savedCustomer) as Partial<CheckoutCustomer>;
        setCustomer({ ...emptyCheckoutCustomer, ...parsedCustomer });
      } catch {}
    }

    if (nextSlug && getProductBySlug(nextSlug)) {
      setCart([{ slug: nextSlug, quantity: 1 }]);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("checkout-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    window.localStorage.setItem("checkout-customer", JSON.stringify(customer));
  }, [customer]);

  const validLines = cart
    .map((line) => {
      const product = getProductBySlug(line.slug);
      return product
        ? {
            ...line,
            product,
            lineTotal: product.priceYen * line.quantity,
            lineWeight: product.shippingWeightGrams * line.quantity
          }
        : null;
    })
    .filter(
      (
        line
      ): line is {
        slug: string;
        quantity: number;
        product: NonNullable<ReturnType<typeof getProductBySlug>>;
        lineTotal: number;
        lineWeight: number;
      } => Boolean(line)
    );

  const copy = {
    pt: {
      eyebrow: "Iniciar pedido",
      title: "Monte seu pedido com mais de um produto.",
      lead: "Agora o pedido aceita varios itens, quantidade por produto e dados completos para contato e entrega.",
      product: "Produto",
      quantity: "Quantidade",
      addProduct: "Adicionar produto",
      remove: "Remover",
      customer: "Nome",
      customerEmail: "Email",
      customerPhone: "Telefone",
      address1: "Endereco",
      address2: "Complemento",
      postalCode: "CEP",
      city: "Cidade no Japao",
      notes: "Observacoes",
      subtotal: "Subtotal",
      shippingEstimate: "Frete estimado",
      total: "Total estimado",
      email: "Enviar por email",
      whatsapp: "Enviar por WhatsApp",
      paypal: "Pagar com PayPal",
      paypalLead: "Checkout online com PayPal. O total e recalculado no servidor antes da captura.",
      browse: "Voltar ao catalogo",
      placeholderName: "Seu nome",
      placeholderEmail: "voce@email.com",
      placeholderPhone: "+81...",
      placeholderAddress1: "Rua, numero, bairro",
      placeholderAddress2: "Apartamento, predio, referencia",
      placeholderPostalCode: "000-0000",
      placeholderCity: "Tokyo, Osaka, Kyoto...",
      placeholderNotes: "Duvidas, horario de entrega, pedido maior...",
      shippingNote: "Estimativa preliminar por faixa de peso. A confirmacao final depende da cotacao real de frete internacional via Correios/operacao logistica."
    },
    ja: {
      eyebrow: "注文を始める",
      title: "複数商品をまとめて注文できます。",
      lead: "商品ごとの数量、連絡先、配送先をまとめて送れる簡易カートです。",
      product: "商品",
      quantity: "数量",
      addProduct: "商品を追加",
      remove: "削除",
      customer: "お名前",
      customerEmail: "メール",
      customerPhone: "電話番号",
      address1: "住所",
      address2: "建物名・部屋番号",
      postalCode: "郵便番号",
      city: "お届け先の都市",
      notes: "ご要望",
      subtotal: "商品小計",
      shippingEstimate: "送料目安",
      total: "概算合計",
      email: "メールで送る",
      whatsapp: "WhatsAppで送る",
      paypal: "PayPalで支払う",
      paypalLead: "PayPalオンライン決済です。合計金額は確定前にサーバー側で再計算されます。",
      browse: "商品一覧へ戻る",
      placeholderName: "お名前",
      placeholderEmail: "name@example.com",
      placeholderPhone: "+81...",
      placeholderAddress1: "町名・番地",
      placeholderAddress2: "建物名・部屋番号",
      placeholderPostalCode: "000-0000",
      placeholderCity: "Tokyo, Osaka, Kyoto...",
      placeholderNotes: "配送希望、まとめ買い、質問など",
      shippingNote: "重量帯による初期目安です。最終的な送料は国際配送の実見積でご案内します。"
    }
  } as const;

  const t = copy[language];
  const subtotal = validLines.reduce((sum, line) => sum + line.lineTotal, 0);
  const totalWeightGrams = validLines.reduce((sum, line) => sum + line.lineWeight, 0);
  const shippingEstimate =
    shippingEstimateTiers.find((tier) => totalWeightGrams <= tier.maxWeightGrams)?.estimatedYen ?? null;
  const total = subtotal + (shippingEstimate ?? 0);

  const message = useMemo(() => {
    const orderLines = validLines.map(
      (line, index) =>
        `${index + 1}. ${line.product.name[language]} x ${line.quantity} = JPY ${line.lineTotal.toLocaleString()}`
    );

    return [
      language === "pt" ? "Novo pedido da loja" : "新しい注文希望",
      "",
      ...orderLines,
      "",
      `${t.subtotal}: JPY ${subtotal.toLocaleString()}`,
      `${t.shippingEstimate}: ${shippingEstimate ? `JPY ${shippingEstimate.toLocaleString()}` : "-"}`,
      `${t.total}: JPY ${total.toLocaleString()}`,
      `${t.customer}: ${customer.name || "-"}`,
      `${t.customerEmail}: ${customer.email || "-"}`,
      `${t.customerPhone}: ${customer.phone || "-"}`,
      `${t.address1}: ${customer.addressLine1 || "-"}`,
      `${t.address2}: ${customer.addressLine2 || "-"}`,
      `${t.postalCode}: ${customer.postalCode || "-"}`,
      `${t.city}: ${customer.city || "-"}`,
      `${t.notes}: ${customer.notes || "-"}`
    ].join("\n");
  }, [customer, language, shippingEstimate, subtotal, t.address1, t.address2, t.city, t.customer, t.customerEmail, t.customerPhone, t.notes, t.postalCode, t.shippingEstimate, t.subtotal, t.total, total, validLines]);

  const emailHref = `mailto:${storeContact.email}?subject=${encodeURIComponent(language === "pt" ? "Novo pedido da loja" : "新しい注文希望")}&body=${encodeURIComponent(message)}`;
  const whatsappHref = storeContact.whatsappNumber
    ? `https://wa.me/${storeContact.whatsappNumber}?text=${encodeURIComponent(message)}`
    : "";

  return (
    <section className="section">
      <div className="container checkout-grid">
        <div>
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="lead">{t.lead}</p>

          <div className="checkout-form-shell">
            {cart.map((line, index) => {
              const currentProduct = getProductBySlug(line.slug) ?? visibleProducts[0] ?? products[0];

              return (
                <div key={`${line.slug}-${index}`} className="cart-line">
                  <label className="field-block">
                    <span>{t.product}</span>
                    <select
                      className="field-input"
                      value={line.slug}
                      onChange={(event) => {
                        const next = [...cart];
                        next[index] = { ...next[index], slug: event.target.value };
                        setCart(next);
                        if (index === 0) {
                          window.history.replaceState(
                            {},
                            "",
                            `${localizedPath("/checkout", language)}?product=${event.target.value}`
                          );
                        }
                      }}
                    >
                      {visibleProducts.map((item) => (
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
                      value={line.quantity}
                      onChange={(event) => {
                        const next = [...cart];
                        next[index] = { ...next[index], quantity: Math.max(1, Number(event.target.value) || 1) };
                        setCart(next);
                      }}
                    />
                  </label>

                  <div className="cart-line-meta">
                    <span>{currentProduct.name[language]}</span>
                    {cart.length > 1 ? (
                      <button
                        type="button"
                        className="cart-line-remove"
                        onClick={() => setCart(cart.filter((_, lineIndex) => lineIndex !== index))}
                      >
                        {t.remove}
                      </button>
                    ) : null}
                  </div>
                </div>
              );
            })}

            <button
              type="button"
              className="button-secondary button-inline"
              onClick={() => setCart([...cart, { slug: defaultSlug, quantity: 1 }])}
            >
              {t.addProduct}
            </button>

            <label className="field-block">
              <span>{t.customer}</span>
              <input
                className="field-input"
                value={customer.name}
                onChange={(event) => setCustomer((current) => ({ ...current, name: event.target.value }))}
                placeholder={t.placeholderName}
              />
            </label>
            <label className="field-block">
              <span>{t.customerEmail}</span>
              <input
                className="field-input"
                value={customer.email}
                onChange={(event) => setCustomer((current) => ({ ...current, email: event.target.value }))}
                placeholder={t.placeholderEmail}
              />
            </label>
            <label className="field-block">
              <span>{t.customerPhone}</span>
              <input
                className="field-input"
                value={customer.phone}
                onChange={(event) => setCustomer((current) => ({ ...current, phone: event.target.value }))}
                placeholder={t.placeholderPhone}
              />
            </label>
            <label className="field-block">
              <span>{t.address1}</span>
              <input
                className="field-input"
                value={customer.addressLine1}
                onChange={(event) =>
                  setCustomer((current) => ({ ...current, addressLine1: event.target.value }))
                }
                placeholder={t.placeholderAddress1}
              />
            </label>
            <label className="field-block">
              <span>{t.address2}</span>
              <input
                className="field-input"
                value={customer.addressLine2}
                onChange={(event) =>
                  setCustomer((current) => ({ ...current, addressLine2: event.target.value }))
                }
                placeholder={t.placeholderAddress2}
              />
            </label>
            <label className="field-block">
              <span>{t.postalCode}</span>
              <input
                className="field-input"
                value={customer.postalCode}
                onChange={(event) =>
                  setCustomer((current) => ({ ...current, postalCode: event.target.value }))
                }
                placeholder={t.placeholderPostalCode}
              />
            </label>
            <label className="field-block">
              <span>{t.city}</span>
              <input
                className="field-input"
                value={customer.city}
                onChange={(event) => setCustomer((current) => ({ ...current, city: event.target.value }))}
                placeholder={t.placeholderCity}
              />
            </label>
            <label className="field-block">
              <span>{t.notes}</span>
              <textarea
                className="field-input field-textarea"
                value={customer.notes}
                onChange={(event) => setCustomer((current) => ({ ...current, notes: event.target.value }))}
                placeholder={t.placeholderNotes}
              />
            </label>
          </div>
        </div>

        <aside className="checkout-summary">
          <div className="checkout-product-card">
            <span className="pill">{language === "pt" ? "Resumo do pedido" : "注文内容"}</span>
            <h2>{language === "pt" ? "Seu carrinho" : "カート内容"}</h2>
            <div className="checkout-line-list">
              {validLines.map((line, index) => (
                <div key={`${line.slug}-${index}`} className="checkout-line-item">
                  <img
                    src={assetPath(line.product.image)}
                    alt={line.product.name[language]}
                    className="checkout-line-image"
                  />
                  <div>
                    <strong>{line.product.name[language]}</strong>
                    <p>
                      {line.quantity} x JPY {line.product.priceYen.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <dl className="detail-list">
              <div>
                <dt>{t.subtotal}</dt>
                <dd>JPY {subtotal.toLocaleString()}</dd>
              </div>
              <div>
                <dt>{t.shippingEstimate}</dt>
                <dd>{shippingEstimate ? `JPY ${shippingEstimate.toLocaleString()}` : "-"}</dd>
              </div>
              <div>
                <dt>{t.total}</dt>
                <dd>JPY {total.toLocaleString()}</dd>
              </div>
            </dl>
          </div>

          <p className="checkout-note">{t.shippingNote}</p>

          <div className="checkout-product-card paypal-card">
            <span className="pill">{t.paypal}</span>
            <h2>{t.paypal}</h2>
            <p className="checkout-note">{t.paypalLead}</p>
            <PayPalCheckout cart={cart} customer={customer} language={language} />
          </div>

          <div className="hero-actions checkout-actions">
            <a href={emailHref} className="button-primary">
              {t.email}
            </a>
            {storeContact.whatsappNumber ? (
              <a href={whatsappHref} className="button-secondary" target="_blank" rel="noreferrer">
                {t.whatsapp}
              </a>
            ) : null}
            <Link href={localizedPath("/products", language)} className="text-link">
              {t.browse}
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
