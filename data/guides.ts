import { getProductBySlug, isVisibleProduct, type LocalizedText, type Product } from "@/data/products";

export type GuideSection = {
  heading?: LocalizedText;
  paragraphs: LocalizedText[];
};

export type Guide = {
  slug: string;
  date: string; // ISO date, used for article metadata
  title: LocalizedText;
  description: LocalizedText;
  intro: LocalizedText;
  sections: GuideSection[];
  relatedSlugs: string[];
};

export const guides: Guide[] = [
  {
    slug: "propolis-verde-como-usar",
    date: "2026-09-27",
    title: {
      pt: "Própolis verde brasileiro: o que é e como usar",
      ja: "ブラジル産グリーンプロポリスとは？選び方と使い方"
    },
    description: {
      pt: "Entenda o que é a própolis verde do Brasil, por que ela é valorizada no Japão e como incluir o extrato na rotina diária.",
      ja: "ブラジル産グリーンプロポリスの特徴、日本で選ばれる理由、毎日の取り入れ方をわかりやすく解説します。"
    },
    intro: {
      pt: "A própolis verde é um dos produtos brasileiros mais procurados no Japão. Este guia explica de onde ela vem, o que a diferencia e como usar o extrato no dia a dia.",
      ja: "グリーンプロポリスは、日本で特に人気の高いブラジル産品のひとつです。この記事では、その産地や特徴、日常での使い方をご紹介します。"
    },
    sections: [
      {
        heading: { pt: "O que é a própolis verde", ja: "グリーンプロポリスとは" },
        paragraphs: [
          {
            pt: "A própolis verde é produzida por abelhas a partir de uma planta típica do cerrado brasileiro, o alecrim-do-campo (Baccharis dracunculifolia). Essa origem dá a ela um perfil vegetal marcante e alta concentração de compostos, o que a diferencia das própolis de outras regiões do mundo.",
            ja: "グリーンプロポリスは、ブラジルのセラード地帯に自生する植物（アレクリン・ド・カンポ／Baccharis dracunculifolia）をもとにミツバチがつくり出します。この産地ならではの力強い植物由来の個性と高い成分濃度が、他地域のプロポリスとの違いです。"
          },
          {
            pt: "Minas Gerais é a principal região produtora, e o Brasil é o maior exportador desse tipo de própolis para o Japão, onde ela é usada há décadas em rotinas de bem-estar.",
            ja: "主な産地はミナスジェライス州で、ブラジルはこのタイプのプロポリスの日本向け最大の輸出国です。日本では長年、ウェルネス習慣として親しまれてきました。"
          }
        ]
      },
      {
        heading: { pt: "Como usar no dia a dia", ja: "毎日の使い方" },
        paragraphs: [
          {
            pt: "O extrato costuma vir em frascos de 30ml com conta-gotas. O uso mais comum é diluir algumas gotas em água, chá ou suco. Como o sabor é intenso, misturar com mel ajuda a suavizar — inclusive combinando bem com um mel orgânico.",
            ja: "エキスは通常、スポイト付きの30mlボトルで販売されます。水・お茶・ジュースに数滴たらす使い方が一般的です。味がしっかりしているため、はちみつに混ぜるとまろやかになります。オーガニックはちみつとの相性も抜群です。"
          },
          {
            pt: "Versões em base alcoólica são as mais tradicionais; há também blends funcionais que combinam própolis com pólen e cúrcuma, para quem busca mais de um ingrediente no mesmo frasco.",
            ja: "アルコール基剤のタイプが最も一般的です。プロポリスに花粉やクルクマを組み合わせた機能性ブレンドもあり、1本で複数の素材を取り入れたい方に向いています。"
          }
        ]
      },
      {
        heading: { pt: "Como escolher", ja: "選び方のポイント" },
        paragraphs: [
          {
            pt: "Prefira produtos com origem clara (região e produtor), marcas com tradição de exportação e frascos compactos, que viajam bem e mantêm a qualidade. Guarde em local fresco e ao abrigo da luz.",
            ja: "産地（地域と生産者）が明確な商品、輸出実績のあるブランド、配送に強い小型ボトルを選ぶと安心です。保管は冷暗所がおすすめです。"
          }
        ]
      }
    ],
    relatedSlugs: [
      "propolis-ponlee-verde-alcoolico",
      "propolis-ponlee-curcuma-polen",
      "mel-organico-mn-propolis"
    ]
  },
  {
    slug: "cafe-brasileiro-no-japao",
    date: "2026-09-27",
    title: {
      pt: "Café brasileiro no Japão: como escolher e preparar",
      ja: "日本で楽しむブラジルコーヒー：選び方と淹れ方"
    },
    description: {
      pt: "Do Cerrado a Altinópolis: entenda os perfis do café brasileiro, o que significa orgânico e biodinâmico, e como preparar em casa no Japão.",
      ja: "セラードからアルチノポリスまで。ブラジルコーヒーの個性、オーガニックとバイオダイナミックの違い、日本のご家庭での淹れ方を解説します。"
    },
    intro: {
      pt: "O café brasileiro é conhecido pelo corpo pleno e pela doçura natural. Este guia ajuda a escolher entre perfis e certificações, e a preparar em casa.",
      ja: "ブラジルコーヒーは、豊かなコクと自然な甘さで知られています。この記事では、味わいや認証の選び方、ご家庭での淹れ方をご案内します。"
    },
    sections: [
      {
        heading: { pt: "Perfil de sabor", ja: "味わいの特徴" },
        paragraphs: [
          {
            pt: "O café brasileiro clássico traz notas de chocolate, castanha e caramelo, com acidez mais discreta. É um perfil fácil de agradar e versátil para vários métodos de preparo.",
            ja: "定番のブラジルコーヒーは、チョコレートやナッツ、キャラメルのような風味と控えめな酸味が特徴です。親しみやすく、さまざまな抽出方法に合わせやすい味わいです。"
          }
        ]
      },
      {
        heading: { pt: "Orgânico e biodinâmico: qual a diferença", ja: "オーガニックとバイオダイナミックの違い" },
        paragraphs: [
          {
            pt: "Orgânico significa cultivo sem agrotóxicos sintéticos, com certificação por auditoria. Biodinâmico vai além: considera o equilíbrio do solo e ciclos naturais, com a certificação Demeter — uma das mais rigorosas do mundo.",
            ja: "オーガニックは、合成農薬を使わずに栽培し、第三者認証を受けたものです。バイオダイナミックはさらに進んで、土壌のバランスや自然のリズムを重視し、世界でも最も厳格な認証のひとつであるDemeter認証を取得します。"
          }
        ]
      },
      {
        heading: { pt: "Como preparar em casa", ja: "ご家庭での淹れ方" },
        paragraphs: [
          {
            pt: "Para café torrado e moído, o coado (hand drip) e a prensa francesa realçam bem a doçura. Use água entre 90–96°C e cerca de 60g de café por litro de água, ajustando ao seu gosto.",
            ja: "中挽きの豆は、ハンドドリップやフレンチプレスで甘さが引き立ちます。お湯は90〜96℃、コーヒーは水1リットルあたり約60gを目安に、お好みで調整してください。"
          }
        ]
      }
    ],
    relatedSlugs: ["cafe-altinopolis-organico", "cafe-cia-organica-biodinamico"]
  }
];

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function getRelatedProducts(guide: Guide): Product[] {
  return guide.relatedSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((product): product is Product => Boolean(product) && isVisibleProduct(product as Product));
}
