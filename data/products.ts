export type Product = {
  slug: string;
  category: "propolis" | "coffee" | "wellness";
  name: {
    ja: string;
    en: string;
  };
  shortDescription: {
    ja: string;
    en: string;
  };
  story: {
    ja: string;
    en: string;
  };
  priceYen: number;
  weight: string;
  shelfLife: string;
  origin: string;
  badge: string;
};

export const products: Product[] = [
  {
    slug: "green-propolis-drops",
    category: "propolis",
    name: {
      ja: "ブラジル産グリーンプロポリス",
      en: "Brazilian Green Propolis Drops"
    },
    shortDescription: {
      ja: "ミナスジェライス州産。少量高付加価値で、日本向け越境販売に適した主力SKU。",
      en: "High-value propolis from Minas Gerais, ideal for cross-border direct-to-consumer shipping."
    },
    story: {
      ja: "毎日のセルフケアに使いやすいドロップタイプ。小型で送料効率が高く、初期テスト販売に向いています。",
      en: "A compact wellness product with strong margins and easy parcel economics for early D2C validation."
    },
    priceYen: 4800,
    weight: "30ml",
    shelfLife: "24 months",
    origin: "Minas Gerais, Brazil",
    badge: "High-margin"
  },
  {
    slug: "cerrado-specialty-coffee",
    category: "coffee",
    name: {
      ja: "セラード産スペシャルティコーヒー",
      en: "Cerrado Specialty Coffee"
    },
    shortDescription: {
      ja: "焙煎豆 200g。ブラジルらしい甘さとチョコ感を打ち出す定番商品。",
      en: "200g roasted beans with a chocolate-forward Brazilian cup profile for gift and repeat orders."
    },
    story: {
      ja: "高回転を狙える中心商品。常温・軽量で、ブランドの入り口として扱いやすいです。",
      en: "A core hero product for repeat sales with simple packaging, stable shelf life and a clear origin story."
    },
    priceYen: 2400,
    weight: "200g",
    shelfLife: "12 months",
    origin: "Cerrado Mineiro, Brazil",
    badge: "Repeat-order"
  },
  {
    slug: "acai-energy-powder",
    category: "wellness",
    name: {
      ja: "アサイー エナジーパウダー",
      en: "Acai Energy Powder"
    },
    shortDescription: {
      ja: "冷凍不要の粉末タイプ。常温流通できるアサイー提案商品。",
      en: "Shelf-stable acai powder designed for ecommerce without frozen logistics."
    },
    story: {
      ja: "日本市場では珍しさがあり、ブラジル産スーパーフードとして差別化しやすいSKUです。",
      en: "Lets you test the Brazil wellness angle without the operational burden of perishables."
    },
    priceYen: 3200,
    weight: "100g",
    shelfLife: "18 months",
    origin: "Para, Brazil",
    badge: "Differentiated"
  }
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
