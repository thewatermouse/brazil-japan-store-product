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
  },
  {
    slug: "guarana-em-po-energia",
    date: "2026-09-28",
    title: {
      pt: "Guaraná em pó: energia natural da Amazônia",
      ja: "アマゾンの天然エナジー：グアラナパウダーの使い方"
    },
    description: {
      pt: "O que é o guaraná, por que tem mais cafeína que o café e como usar o pó puro em bebidas e receitas.",
      ja: "グアラナとは何か、コーヒーより多いカフェイン、純粋パウダーの飲み物やレシピでの使い方を解説します。"
    },
    intro: {
      pt: "O guaraná é o energético natural mais brasileiro que existe. Este guia explica de onde vem, por que energiza e como usar o pó puro no dia a dia.",
      ja: "グアラナは、ブラジルを代表する天然のエナジー素材です。この記事では、その産地やエネルギーの理由、純粋パウダーの使い方をご紹介します。"
    },
    sections: [
      {
        heading: { pt: "O que é o guaraná", ja: "グアラナとは" },
        paragraphs: [
          {
            pt: "O guaraná é uma planta nativa da Amazônia cujas sementes são ricas em cafeína natural. Moído na hora, o pó preserva os compostos ativos e mantém o sabor característico.",
            ja: "グアラナはアマゾン原産の植物で、その種子には天然のカフェインが豊富に含まれます。挽きたてのパウダーは活性成分と独特の風味をしっかり保ちます。"
          }
        ]
      },
      {
        heading: { pt: "Por que energiza", ja: "エネルギーの理由" },
        paragraphs: [
          {
            pt: "As sementes de guaraná chegam a conter cerca do dobro da cafeína de um grão de café. Por isso é muito usado em sucos, vitaminas e bebidas para dar disposição ao longo do dia.",
            ja: "グアラナの種子には、コーヒー豆の約2倍のカフェインが含まれるとされます。そのため、ジュースやスムージー、ドリンクに加えて一日の活力に取り入れられています。"
          }
        ]
      },
      {
        heading: { pt: "Como usar", ja: "使い方" },
        paragraphs: [
          {
            pt: "Adicione uma pequena quantidade em sucos, vitaminas, chás ou receitas. O pó não é totalmente hidrossolúvel: mexa bem e, se preferir, coe antes de beber. Comece com pouco para sentir o efeito.",
            ja: "ジュース・スムージー・お茶・レシピに少量を加えてください。パウダーは完全な水溶性ではないため、よく混ぜ、お好みで濾してからお召し上がりください。まずは少量からお試しを。"
          }
        ]
      }
    ],
    relatedSlugs: ["guarana-valeso-moido", "macabite-red-choco-colorandina"]
  },
  {
    slug: "castanha-do-para-selenio",
    date: "2026-09-28",
    title: {
      pt: "Castanha do Pará: a fonte natural de selênio",
      ja: "ブラジルナッツ：天然のセレン供給源"
    },
    description: {
      pt: "Por que a castanha do Pará é uma das maiores fontes de selênio, quantas comer por dia e como conservar.",
      ja: "ブラジルナッツがセレンの豊富な供給源である理由、1日の目安量、保存方法を解説します。"
    },
    intro: {
      pt: "A castanha do Pará é um dos alimentos mais ricos em selênio do planeta. Este guia explica o que ela oferece, quanto consumir e como conservar.",
      ja: "ブラジルナッツは、地球上でもセレンを最も多く含む食品のひとつです。この記事では、その特徴と目安量、保存方法をご紹介します。"
    },
    sections: [
      {
        heading: { pt: "O que é a castanha do Pará", ja: "ブラジルナッツとは" },
        paragraphs: [
          {
            pt: "Colhida de árvores nativas da Amazônia, a castanha do Pará é natural, sem processamento adicional, e concentra nutrientes — especialmente o selênio, um mineral importante para o corpo.",
            ja: "アマゾンの原生林から収穫されるブラジルナッツは、無加工で自然のまま。栄養素、とりわけ体に大切なミネラルであるセレンを豊富に含みます。"
          }
        ]
      },
      {
        heading: { pt: "Quantas comer por dia", ja: "1日の目安量" },
        paragraphs: [
          {
            pt: "Por ser tão concentrada em selênio, 1 a 2 unidades por dia já costumam suprir a necessidade diária. Não é preciso comer muitas — a moderação é parte do benefício.",
            ja: "セレンが非常に豊富なため、1日1〜2粒で目安量を補えるとされます。たくさん食べる必要はなく、適量が大切です。"
          }
        ]
      },
      {
        heading: { pt: "Como conservar e usar", ja: "保存と使い方" },
        paragraphs: [
          {
            pt: "Guarde em recipiente fechado, em local fresco e seco. Consuma pura como snack ou adicione em granolas, saladas e receitas.",
            ja: "密閉容器に入れ、冷暗所で保管してください。そのままスナックとして、またはグラノーラやサラダ、料理に加えてお楽しみください。"
          }
        ]
      }
    ],
    relatedSlugs: ["castanha-para-alibec", "castanha-caju-alibec"]
  },
  {
    slug: "chocolate-bean-to-bar-amazonia",
    date: "2026-09-28",
    title: {
      pt: "Chocolate bean-to-bar da Amazônia: o que significa",
      ja: "アマゾンのBean-to-Barチョコレートとは"
    },
    description: {
      pt: "Entenda o conceito bean-to-bar, o cacau da Amazônia e por que esses chocolates são veganos e sem conservantes.",
      ja: "Bean-to-Barの意味、アマゾン産カカオ、そしてヴィーガンで無添加である理由を解説します。"
    },
    intro: {
      pt: "Bean-to-bar é um jeito de fazer chocolate com controle total, do grão à barra. Este guia explica o conceito, o cacau da Amazônia e o que torna esses chocolates diferentes.",
      ja: "Bean-to-Barは、カカオ豆から板チョコまでを一貫して手がける製法です。この記事では、その意味とアマゾン産カカオ、そしてこれらのチョコの違いをご紹介します。"
    },
    sections: [
      {
        heading: { pt: "O que é bean-to-bar", ja: "Bean-to-Barとは" },
        paragraphs: [
          {
            pt: "Bean-to-bar significa que o mesmo produtor cuida de todas as etapas — seleção do cacau, torra, moagem e a barra final. Isso dá mais controle sobre qualidade e sabor, e valoriza a origem do grão.",
            ja: "Bean-to-Barとは、同じ生産者がカカオの選別から焙煎、摩砕、板チョコの仕上げまで、すべての工程を手がけることを指します。品質と風味をより細かく管理でき、豆の産地を大切にできます。"
          }
        ]
      },
      {
        heading: { pt: "Cacau da Amazônia", ja: "アマゾン産カカオ" },
        paragraphs: [
          {
            pt: "O cacau amazônico tem perfil de sabor próprio, ligado à floresta e ao solo da região. Chocolates feitos com ele carregam essa identidade brasileira no aroma e no sabor.",
            ja: "アマゾン産カカオは、森と土壌に育まれた独自の風味を持ちます。これを使ったチョコレートには、香りと味わいにブラジルらしい個性が宿ります。"
          }
        ]
      },
      {
        heading: { pt: "Vegano e açúcar de coco", ja: "ヴィーガンとココナッツシュガー" },
        paragraphs: [
          {
            pt: "As versões que trabalhamos são veganas, sem glúten e sem conservantes. Algumas usam açúcar de coco no lugar do açúcar refinado, e leite de coco no lugar do leite; a barra 70% é mais intensa, a 50% mais suave.",
            ja: "取り扱いのタイプはヴィーガン・グルテンフリー・無保存料です。精製糖の代わりにココナッツシュガー、牛乳の代わりにヤシミルクを使うものもあります。70%はより濃厚に、50%はよりまろやかに楽しめます。"
          }
        ]
      }
    ],
    relatedSlugs: ["chocolate-onveg-70-acucar-coco", "chocolate-onveg-50-leite-coco"]
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
