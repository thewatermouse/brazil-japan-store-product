"use client";

import Link from "next/link";

import { ProductCard } from "@/components/ProductCard";
import { useLanguage } from "@/components/LanguageProvider";
import { products } from "@/data/products";

const copy = {
  pt: {
    eyebrow: "Loja Brasil -> Japao",
    title: "Produtos brasileiros premium, entregues para clientes no Japao.",
    description:
      "Uma vitrine de alimentos e bem-estar com foco em itens compactos, nao pereciveis e faceis de enviar. Compre cafe, propolis e acai em uma experiencia pensada para o consumidor final.",
    primaryCta: "Comprar agora",
    secondaryCta: "Ver catalogo",
    panelTitle: "Por que comprar aqui",
    highlights: [
      "Selecao brasileira com perfil premium",
      "Entrega internacional com operacao estruturada",
      "Produtos leves, praticos e com boa conservacao"
    ],
    featureTitle: "Produtos em destaque",
    featureLink: "Ver todos os produtos",
    trustTitle: "Compra simples, origem clara, sabor brasileiro.",
    trustItems: [
      "Fluxo direto ao consumidor",
      "Produtos escolhidos para manter qualidade no envio",
      "Comunicacao clara para cliente brasileiro e japones"
    ]
  },
  ja: {
    eyebrow: "ブラジルから日本へ",
    title: "日本のお客様へ届ける、プレミアムなブラジル食品ストア。",
    description:
      "常温配送しやすいブラジル産のコーヒー、プロポリス、アサイーを厳選。日本の一般消費者向けに、買いやすく信頼しやすい越境ストアとして設計しています。",
    primaryCta: "今すぐ見る",
    secondaryCta: "商品一覧へ",
    panelTitle: "このストアの魅力",
    highlights: [
      "厳選したブラジル産プレミアム商品",
      "越境配送を前提にした商品設計",
      "軽量で保管しやすい人気カテゴリー"
    ],
    featureTitle: "おすすめ商品",
    featureLink: "すべての商品を見る",
    trustTitle: "わかりやすく、買いやすく、ブラジルらしく。",
    trustItems: [
      "一般消費者向けのシンプルな購入導線",
      "配送しやすい商品だけを厳選",
      "日本語とポルトガル語の両方に対応"
    ]
  }
} as const;

export function HomeContent() {
  const { language } = useLanguage();
  const featuredProducts = products.slice(0, 3);
  const t = copy[language];

  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <p className="hero-copy">{t.description}</p>
            <div className="hero-actions">
              <Link href="/products" className="button-primary">
                {t.primaryCta}
              </Link>
              <Link href="/products" className="button-secondary">
                {t.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="hero-panel">
            <p className="panel-title">{t.panelTitle}</p>
            <ul className="bullet-list">
              {t.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="stat-grid">
              <div>
                <strong>3</strong>
                <span>SKUs</span>
              </div>
              <div>
                <strong>JP</strong>
                <span>market focus</span>
              </div>
              <div>
                <strong>PT/JA</strong>
                <span>language support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t.eyebrow}</p>
              <h2>{t.featureTitle}</h2>
            </div>
            <Link href="/products" className="text-link">
              {t.featureLink}
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
            <p className="eyebrow">{t.eyebrow}</p>
            <h2>{t.trustTitle}</h2>
          </div>
          <div className="timeline">
            {t.trustItems.map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
