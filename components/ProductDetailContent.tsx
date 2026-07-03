"use client";

import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";
import type { Language, Product } from "@/data/products";
import { assetPath } from "@/lib/asset-path";
import { localizedPath } from "@/lib/site";

const categoryTone = {
  propolis: { pt: "Extrato da mata brasileira", ja: "ブラジルの森から生まれた滴" },
  coffee: { pt: "Colheita, torra e xícara", ja: "収穫から一杯まで" },
  wellness: { pt: "Energia de fruta e floresta", ja: "果実と自然のエネルギー" }
} as const;

export function ProductDetailContent({
  product,
  language: forcedLanguage
}: {
  product: Product;
  language?: Language;
}) {
  const { language: contextLanguage } = useLanguage();
  const language = forcedLanguage ?? contextLanguage;

  const copy = {
    pt: {
      back: "Voltar ao catálogo",
      buy: "Iniciar pedido",
      price: "Preço",
      weight: "Conteúdo",
      shelfLife: "Validade",
      origin: "Origem",
      usage: "Como usar",
      notes: "Perfil",
      benefits: "Por que esse produto entra na loja",
      ritual: "Ritual de consumo",
      faq: "Perguntas frequentes",
      ready: "Pronto para pedir?"
    },
    ja: {
      back: "商品一覧へ戻る",
      buy: "注文を始める",
      price: "価格",
      weight: "内容量",
      shelfLife: "賞味期限",
      origin: "原産地",
      usage: "楽しみ方",
      notes: "特徴",
      benefits: "この商品を選ぶ理由",
      ritual: "日常での取り入れ方",
      faq: "よくある質問",
      ready: "購入の準備はできましたか?"
    }
  } as const;

  const t = copy[language];

  return (
    <section className="section">
      <div className="container product-hero-shell">
        <div className="product-storyboard">
          <div className={`product-stage tone-${product.category}`}>
            <span className="product-stage-kicker">{categoryTone[product.category][language]}</span>
            <img src={assetPath(product.image)} alt={product.name[language]} className="product-stage-image" />
            <h1>{product.name[language]}</h1>
            <p className="lead">{product.shortDescription[language]}</p>
          </div>

          <div className="product-detail-card product-detail-editorial">
            <span className="pill">{product.badge[language]}</span>
            <p>{product.story[language]}</p>
            <div className="hero-actions">
              <Link
                href={`${localizedPath("/checkout", language)}?product=${product.slug}`}
                className="button-primary"
              >
                {t.buy}
              </Link>
              <Link href={localizedPath("/products", language)} className="button-secondary">
                {t.back}
              </Link>
            </div>
          </div>
        </div>

        <aside className="info-panel info-panel-sticky">
          <h2>{t.ready}</h2>
          <dl className="detail-list">
            <div><dt>{t.price}</dt><dd>JPY {product.priceYen.toLocaleString()}</dd></div>
            <div><dt>{t.weight}</dt><dd>{product.weight}</dd></div>
            <div><dt>{t.shelfLife}</dt><dd>{product.shelfLife}</dd></div>
            <div><dt>{t.origin}</dt><dd>{product.origin[language]}</dd></div>
          </dl>
          <Link
            href={`${localizedPath("/checkout", language)}?product=${product.slug}`}
            className="button-primary button-block"
          >
            {t.buy}
          </Link>
        </aside>
      </div>

      <div className="container product-sections">
        <section className="product-section-card">
          <p className="eyebrow">{t.benefits}</p>
          <div className="benefit-grid">
            {product.benefits.map((benefit) => (
              <article key={benefit[language]} className="benefit-card"><p>{benefit[language]}</p></article>
            ))}
          </div>
        </section>

        <section className="product-section-card two-column">
          <div>
            <p className="eyebrow">{t.ritual}</p>
            <h2>{product.name[language]}</h2>
            <p>{product.usage[language]}</p>
            {product.tastingNotes ? <p>{product.tastingNotes[language]}</p> : null}
          </div>
          <div className="ritual-box">
            <dl className="detail-list">
              <div><dt>{t.usage}</dt><dd>{product.usage[language]}</dd></div>
              {product.tastingNotes ? <div><dt>{t.notes}</dt><dd>{product.tastingNotes[language]}</dd></div> : null}
            </dl>
          </div>
        </section>

        <section className="product-section-card">
          <p className="eyebrow">{t.faq}</p>
          <div className="faq-list">
            {product.faq.map((item) => (
              <article key={item.question[language]} className="faq-item">
                <h3>{item.question[language]}</h3>
                <p>{item.answer[language]}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
