"use client";

import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";
import type { Product } from "@/data/products";

export function ProductDetailContent({ product }: { product: Product }) {
  const { language } = useLanguage();

  const copy = {
    pt: {
      back: "Voltar ao catalogo",
      buy: "Quero comprar",
      price: "Preco",
      weight: "Conteudo",
      shelfLife: "Validade",
      origin: "Origem",
      usage: "Como usar",
      notes: "Perfil"
    },
    ja: {
      back: "商品一覧へ戻る",
      buy: "購入したい",
      price: "価格",
      weight: "内容量",
      shelfLife: "賞味期限",
      origin: "原産地",
      usage: "おすすめの楽しみ方",
      notes: "特徴"
    }
  } as const;

  const t = copy[language];

  return (
    <section className="section">
      <div className="container product-layout">
        <div className="product-detail-card">
          <span className="pill">{product.badge[language]}</span>
          <h1>{product.name[language]}</h1>
          <p className="lead">{product.shortDescription[language]}</p>
          <div className="product-story">
            <p>{product.story[language]}</p>
            <p>{product.usage[language]}</p>
            {product.tastingNotes ? <p>{product.tastingNotes[language]}</p> : null}
          </div>
          <div className="hero-actions">
            <Link href="/contact" className="button-primary">
              {t.buy}
            </Link>
            <Link href="/products" className="button-secondary">
              {t.back}
            </Link>
          </div>
        </div>

        <aside className="info-panel">
          <h2>{product.name[language]}</h2>
          <dl className="detail-list">
            <div>
              <dt>{t.price}</dt>
              <dd>JPY {product.priceYen.toLocaleString()}</dd>
            </div>
            <div>
              <dt>{t.weight}</dt>
              <dd>{product.weight}</dd>
            </div>
            <div>
              <dt>{t.shelfLife}</dt>
              <dd>{product.shelfLife}</dd>
            </div>
            <div>
              <dt>{t.origin}</dt>
              <dd>{product.origin[language]}</dd>
            </div>
            <div>
              <dt>{t.usage}</dt>
              <dd>{product.usage[language]}</dd>
            </div>
            {product.tastingNotes ? (
              <div>
                <dt>{t.notes}</dt>
                <dd>{product.tastingNotes[language]}</dd>
              </div>
            ) : null}
          </dl>
        </aside>
      </div>
    </section>
  );
}
