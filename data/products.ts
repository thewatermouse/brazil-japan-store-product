export type Language = "pt" | "ja";

export type LocalizedText = Record<Language, string>;

export type Product = {
  slug: string;
  category: "propolis" | "coffee" | "wellness";
  name: LocalizedText;
  shortDescription: LocalizedText;
  story: LocalizedText;
  badge: LocalizedText;
  tastingNotes?: LocalizedText;
  usage: LocalizedText;
  benefits: LocalizedText[];
  faq: { question: LocalizedText; answer: LocalizedText }[];
  priceYen: number;
  weight: string;
  shelfLife: string;
  origin: LocalizedText;
};

export const products: Product[] = [
  {
    slug: "green-propolis-drops",
    category: "propolis",
    name: {
      pt: "Propolis Verde Brasileiro",
      ja: "ブラジル産グリーンプロポリス"
    },
    shortDescription: {
      pt: "Extrato premium em gotas, concentrado e facil de levar no dia a dia.",
      ja: "毎日のセルフケアに使いやすい高濃度ドロップタイプ。"
    },
    story: {
      pt: "Produzido com propolis verde de Minas Gerais, conhecido pelo perfil vegetal intenso e alta concentracao. Ideal para rotina de bem-estar, com envio simples e embalagem compacta.",
      ja: "ミナスジェライス州産のグリーンプロポリスを使用。植物由来の力強い個性と高濃度が特長で、毎日のウェルネス習慣に取り入れやすい小型サイズです。"
    },
    badge: {
      pt: "Mais vendido",
      ja: "人気商品"
    },
    usage: {
      pt: "Uso sugerido: algumas gotas diluidas em agua, cha ou mel.",
      ja: "おすすめの使い方: 水、お茶、はちみつに数滴加えてお召し上がりください。"
    },
    benefits: [
      {
        pt: "Frasco pequeno, facil de guardar e enviar.",
        ja: "小さなボトルで保管しやすく、配送にも向いています。"
      },
      {
        pt: "Ritual simples para o dia a dia.",
        ja: "毎日に取り入れやすいシンプルな習慣です。"
      },
      {
        pt: "Origem clara em Minas Gerais.",
        ja: "ミナスジェライス州産という明確な産地。"
      }
    ],
    faq: [
      {
        question: {
          pt: "Qual o melhor momento para consumir?",
          ja: "いつ飲むのがおすすめですか?"
        },
        answer: {
          pt: "Muita gente usa pela manha ou ao longo do dia, diluido em alguma bebida.",
          ja: "朝や日中に、水やお茶に混ぜて取り入れる方が多いです。"
        }
      },
      {
        question: {
          pt: "E forte no sabor?",
          ja: "味は強いですか?"
        },
        answer: {
          pt: "Tem perfil vegetal marcante, por isso muita gente prefere diluir antes de consumir.",
          ja: "植物感のあるしっかりした個性があるため、飲み物に混ぜる使い方が人気です。"
        }
      }
    ],
    priceYen: 3980,
    weight: "30ml",
    shelfLife: "24 meses",
    origin: {
      pt: "Minas Gerais, Brasil",
      ja: "ブラジル ミナスジェライス州"
    }
  },
  {
    slug: "cerrado-specialty-coffee",
    category: "coffee",
    name: {
      pt: "Cafe Especial do Cerrado",
      ja: "セラード産スペシャルティコーヒー"
    },
    shortDescription: {
      pt: "Graos torrados com docura natural, chocolate e final limpo.",
      ja: "自然な甘さとチョコレート感が楽しめる焙煎豆。"
    },
    story: {
      pt: "Lote do Cerrado Mineiro torrado para destacar notas classicas do cafe brasileiro. Um cafe facil de presentear, repetir compra e apresentar a marca para novos clientes no Japao.",
      ja: "ブラジルらしい甘さとバランスを引き出すよう焙煎したセラード ミネイロのロット。ギフトにも定期購入にも向いた定番商品です。"
    },
    badge: {
      pt: "Compra recorrente",
      ja: "リピート向け"
    },
    tastingNotes: {
      pt: "Notas de chocolate, castanha e acucar mascavo.",
      ja: "チョコレート、ナッツ、ブラウンシュガーのような風味。"
    },
    usage: {
      pt: "Perfeito para coado, prensa francesa e espresso suave.",
      ja: "ハンドドリップ、フレンチプレス、マイルドなエスプレッソに最適です。"
    },
    benefits: [
      {
        pt: "Perfil brasileiro classico, facil de agradar.",
        ja: "親しみやすいブラジルらしい味わい。"
      },
      {
        pt: "Bom para presente e recompra.",
        ja: "ギフトにもリピート購入にも向いています。"
      },
      {
        pt: "Funciona bem em varios metodos de preparo.",
        ja: "さまざまな抽出方法で楽しめます。"
      }
    ],
    faq: [
      {
        question: {
          pt: "Esse cafe e mais doce ou mais acido?",
          ja: "酸味より甘さが強いですか?"
        },
        answer: {
          pt: "A proposta e destacar docura, chocolate e castanha, com acidez mais discreta.",
          ja: "酸味よりも甘さとチョコ感を感じやすいバランスです。"
        }
      },
      {
        question: {
          pt: "Serve para filtro?",
          ja: "ハンドドリップ向きですか?"
        },
        answer: {
          pt: "Sim. E um cafe versatil, bom para filtro, prensa e espresso suave.",
          ja: "はい。ハンドドリップ、フレンチプレス、やさしいエスプレッソまで幅広く使えます。"
        }
      }
    ],
    priceYen: 1680,
    weight: "200g",
    shelfLife: "12 meses",
    origin: {
      pt: "Cerrado Mineiro, Brasil",
      ja: "ブラジル セラード ミネイロ"
    }
  },
  {
    slug: "acai-energy-powder",
    category: "wellness",
    name: {
      pt: "Acai em Po Energia",
      ja: "アサイーパウダー"
    },
    shortDescription: {
      pt: "Acai liofilizado em po, pratico para smoothies, bowls e receitas.",
      ja: "スムージーやボウルに使いやすいフリーズドライのアサイーパウダー。"
    },
    story: {
      pt: "A proposta aqui e levar o imaginario do acai brasileiro para o Japao sem depender de cadeia fria. Embalagem leve, alto valor por volume e uso versatil em casa.",
      ja: "冷凍物流なしでブラジル産アサイーの魅力を届けるためのパウダータイプ。軽量で扱いやすく、ご家庭で幅広く使えます。"
    },
    badge: {
      pt: "Diferenciado",
      ja: "個性派"
    },
    usage: {
      pt: "Misture com iogurte, leite, banana ou granola.",
      ja: "ヨーグルト、ミルク、バナナ、グラノーラと合わせてお楽しみください。"
    },
    benefits: [
      {
        pt: "Leva o imaginario do acai sem precisar de congelados.",
        ja: "冷凍不要でアサイーの魅力を楽しめます。"
      },
      {
        pt: "Versatil para bowls, smoothies e receitas.",
        ja: "ボウルやスムージー、レシピにも使いやすいです。"
      },
      {
        pt: "Formato leve, pratico e facil de armazenar.",
        ja: "軽量で保管しやすく、扱いやすい形です。"
      }
    ],
    faq: [
      {
        question: {
          pt: "Precisa de refrigeracao?",
          ja: "冷蔵は必要ですか?"
        },
        answer: {
          pt: "Nao. E justamente uma alternativa de acai para ecommerce sem cadeia fria.",
          ja: "不要です。常温流通しやすい形として提案しています。"
        }
      },
      {
        question: {
          pt: "Como usar no cafe da manha?",
          ja: "朝食ではどう使えますか?"
        },
        answer: {
          pt: "Com iogurte, banana, leite ou granola, ele entra bem em rotinas simples.",
          ja: "ヨーグルト、バナナ、ミルク、グラノーラと合わせる使い方が人気です。"
        }
      }
    ],
    priceYen: 2280,
    weight: "100g",
    shelfLife: "18 meses",
    origin: {
      pt: "Para, Brasil",
      ja: "ブラジル パラー州"
    }
  }
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
