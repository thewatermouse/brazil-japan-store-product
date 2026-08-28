"use client";

import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";
import type { Language, Product } from "@/data/products";
import { storeContact } from "@/data/store";
import { trackEvent } from "@/lib/analytics";
import { assetPath } from "@/lib/asset-path";
import { localizedPath, localizedSiteUrl } from "@/lib/site";

type ProductCardProps = {
  product: Product;
  language?: Language;
};

const productTones = {
  "green-propolis-drops": "tone-propolis",
  "cerrado-specialty-coffee": "tone-coffee",
  "acai-energy-powder": "tone-acai"
} as const;

export function ProductCard({ product, language: forcedLanguage }: ProductCardProps) {
  const { language: contextLanguage } = useLanguage();
  const language = forcedLanguage ?? contextLanguage;
  const toneClass = productTones[product.slug as keyof typeof productTones] ?? "";

  const whatsappMessage =
    language === "pt"
      ? `Olá! Tenho interesse neste produto: ${product.name.pt} — ${localizedSiteUrl(`/products/${product.slug}`, "pt")}`
      : `こんにちは。この商品に興味があります: ${product.name.ja} — ${localizedSiteUrl(`/products/${product.slug}`, "ja")}`;
  const whatsappHref = storeContact.whatsappNumber
    ? `https://wa.me/${storeContact.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    : "";

  return (
    <article className="product-card product-card-rich">
      <div className={`product-visual ${toneClass}`}>
        <div className="product-visual-stage">
          <img src={assetPath(product.image)} alt={product.name[language]} className="product-visual-image" />
        </div>
      </div>
      <div className="product-meta">
        <span className="pill">{product.badge[language]}</span>
        <span className="product-price">JPY {product.priceYen.toLocaleString()}</span>
      </div>
      <h3>{product.name[language]}</h3>
      <p>{product.shortDescription[language]}</p>
      <dl className="spec-list">
        <div>
          <dt>{language === "pt" ? "Conteúdo" : "内容量"}</dt>
          <dd>{product.weight}</dd>
        </div>
        <div>
          <dt>{language === "pt" ? "Origem" : "原産地"}</dt>
          <dd>{product.origin[language]}</dd>
        </div>
      </dl>
      <div className="product-card-actions">
        <Link href={localizedPath(`/products/${product.slug}`, language)} className="text-link">
          {language === "pt" ? "Ver produto" : "商品を見る"}
        </Link>
        {whatsappHref ? (
          <a
            href={whatsappHref}
            className="button-whatsapp button-whatsapp-sm"
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              trackEvent("generate_lead", {
                method: "whatsapp",
                item_id: product.slug,
                item_name: product.name[language],
                value: product.priceYen,
                currency: "JPY"
              })
            }
          >
            {language === "pt" ? "Comprar" : "購入"}
          </a>
        ) : null}
      </div>
    </article>
  );
}
