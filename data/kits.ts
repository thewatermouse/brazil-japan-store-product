import { getProductBySlug, isVisibleProduct, type LocalizedText, type Product } from "@/data/products";

export type Kit = {
  id: string;
  slugs: string[];
  // Fraction off the sum of member prices (0.1 = 10% off).
  discountRate: number;
  name: LocalizedText;
  tagline: LocalizedText;
};

export const kits: Kit[] = [
  {
    id: "rotina-brasileira",
    slugs: ["propolis-ponlee-verde-alcoolico", "cafe-altinopolis-organico"],
    discountRate: 0.1,
    name: { pt: "Rotina Brasileira", ja: "ブラジル習慣セット" },
    tagline: {
      pt: "Própolis para o bem-estar diário e um café orgânico para o ritual da manhã.",
      ja: "毎日のウェルネスにプロポリス、朝の一杯にオーガニックコーヒー。"
    }
  },
  {
    id: "descoberta-da-natureza",
    slugs: ["propolis-ponlee-curcuma-polen", "mel-organico-mn-propolis"],
    discountRate: 0.1,
    name: { pt: "Descoberta da Natureza", ja: "自然の発見セット" },
    tagline: {
      pt: "Blend funcional de própolis com cúrcuma e um mel orgânico certificado para combinar.",
      ja: "クルクマ入り機能性プロポリスと、認証オーガニックはちみつの組み合わせ。"
    }
  },
  {
    id: "boas-vindas",
    slugs: ["cafe-altinopolis-organico", "chocolate-onveg-70-acucar-coco"],
    discountRate: 0.1,
    name: { pt: "Boas-vindas", ja: "はじめての注文セット" },
    tagline: {
      pt: "Um primeiro pedido leve e gostoso: café orgânico e chocolate bean-to-bar da Amazônia.",
      ja: "はじめてにぴったり。オーガニックコーヒーとアマゾン産Bean-to-Barチョコ。"
    }
  },
  {
    id: "energia-da-amazonia",
    slugs: ["guarana-valeso-moido", "castanha-para-alibec", "castanha-caju-alibec"],
    discountRate: 0.12,
    name: { pt: "Energia da Amazônia", ja: "アマゾンのエナジーセット" },
    tagline: {
      pt: "Guaraná puro e duas castanhas premium: energia e nutrição direto da floresta.",
      ja: "純粋グアラナと2種のプレミアムナッツ。森の恵みでエネルギー補給。"
    }
  }
];

export type KitPricing = {
  items: Product[];
  fullYen: number;
  priceYen: number;
  savingsYen: number;
};

// Computes bundle pricing from live product prices so kits never drift out of
// sync with the catalog. Discounted total is rounded to the nearest ¥10.
export function getKitPricing(kit: Kit): KitPricing {
  const items = kit.slugs
    .map((slug) => getProductBySlug(slug))
    .filter((product): product is Product => Boolean(product) && isVisibleProduct(product as Product));

  const fullYen = items.reduce((sum, product) => sum + product.priceYen, 0);
  const priceYen = Math.round((fullYen * (1 - kit.discountRate)) / 10) * 10;
  const savingsYen = fullYen - priceYen;

  return { items, fullYen, priceYen, savingsYen };
}

export function getKitById(id: string) {
  return kits.find((kit) => kit.id === id);
}

type CartLineLike = { slug: string; quantity: number };

// Returns the kit whose contents exactly match the cart (same products, each
// with quantity 1) or null. Used by both the checkout UI and the server-side
// PayPal amount calculation so the advertised bundle price is the price
// actually charged. Any added item or changed quantity drops the match.
export function matchKitForCart(cart: CartLineLike[]): Kit | null {
  const lines = cart.filter((line) => Number(line.quantity) >= 1);

  return (
    kits.find((kit) => {
      if (lines.length !== kit.slugs.length) {
        return false;
      }
      if (lines.some((line) => Number(line.quantity) !== 1)) {
        return false;
      }
      const cartSlugs = [...lines.map((line) => line.slug)].sort();
      const kitSlugs = [...kit.slugs].sort();
      return cartSlugs.every((slug, index) => slug === kitSlugs[index]);
    }) ?? null
  );
}

// The yen discount to apply when a cart matches a kit. Equals the savings
// shown on the kit card (same rounding), so display and charge always agree.
export function getCartKitDiscount(cart: CartLineLike[]): { kit: Kit | null; discountYen: number } {
  const kit = matchKitForCart(cart);

  if (!kit) {
    return { kit: null, discountYen: 0 };
  }

  return { kit, discountYen: getKitPricing(kit).savingsYen };
}
