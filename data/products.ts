export type Language = "pt" | "ja";

export type LocalizedText = Record<Language, string>;

export type Product = {
  slug: string;
  category: "propolis" | "coffee" | "wellness";
  image: string;
  name: LocalizedText;
  shortDescription: LocalizedText;
  story: LocalizedText;
  badge: LocalizedText;
  tastingNotes?: LocalizedText;
  usage: LocalizedText;
  benefits: LocalizedText[];
  faq: { question: LocalizedText; answer: LocalizedText }[];
  priceYen: number;
  shippingWeightGrams: number;
  weight: string;
  shelfLife: string;
  origin: LocalizedText;
};

export const products: Product[] = [
  {
    slug: "green-propolis-drops",
    category: "propolis",
    image: "/placeholders/propolis.svg",
    name: {
      pt: "Própolis Verde Brasileiro",
      ja: "ブラジル産グリーンプロポリス"
    },
    shortDescription: {
      pt: "Extrato premium em gotas, concentrado e fácil de levar no dia a dia.",
      ja: "毎日のセルフケアに使いやすい高濃度ドロップタイプ。"
    },
    story: {
      pt: "Produzido com própolis verde de Minas Gerais, conhecido pelo perfil vegetal intenso e alta concentração. Ideal para rotina de bem-estar, com envio simples e embalagem compacta.",
      ja: "ミナスジェライス州産のグリーンプロポリスを使用。植物由来の力強い個性と高濃度が特長で、毎日のウェルネス習慣に取り入れやすい小型サイズです。"
    },
    badge: {
      pt: "Mais vendido",
      ja: "人気商品"
    },
    usage: {
      pt: "Uso sugerido: algumas gotas diluídas em água, chá ou mel.",
      ja: "おすすめの使い方: 水、お茶、はちみつに数滴加えてお召し上がりください。"
    },
    benefits: [
      { pt: "Frasco pequeno, fácil de guardar e enviar.", ja: "小さなボトルで保管しやすく、配送にも向いています。" },
      { pt: "Ritual simples para o dia a dia.", ja: "毎日に取り入れやすいシンプルな習慣です。" },
      { pt: "Origem clara em Minas Gerais.", ja: "ミナスジェライス州産という明確な産地。" }
    ],
    faq: [
      {
        question: { pt: "Qual o melhor momento para consumir?", ja: "いつ飲むのがおすすめですか?" },
        answer: { pt: "Muita gente usa pela manhã ou ao longo do dia, diluído em alguma bebida.", ja: "朝や日中に、水やお茶に混ぜて取り入れる方が多いです。" }
      },
      {
        question: { pt: "É forte no sabor?", ja: "味は強いですか?" },
        answer: { pt: "Tem perfil vegetal marcante, por isso muita gente prefere diluir antes de consumir.", ja: "植物感のあるしっかりした個性があるため、飲み物に混ぜる使い方が人気です。" }
      }
    ],
    priceYen: 3980,
    shippingWeightGrams: 120,
    weight: "30ml",
    shelfLife: "24 meses",
    origin: { pt: "Minas Gerais, Brasil", ja: "ブラジル ミナスジェライス州" }
  },
  {
    slug: "cerrado-specialty-coffee",
    category: "coffee",
    image: "/placeholders/coffee.svg",
    name: { pt: "Café Especial do Cerrado", ja: "セラード産スペシャルティコーヒー" },
    shortDescription: { pt: "Grãos torrados com doçura natural, chocolate e final limpo.", ja: "自然な甘さとチョコレート感が楽しめる焙煎豆。" },
    story: { pt: "Lote do Cerrado Mineiro torrado para destacar notas clássicas do café brasileiro. Um café fácil de presentear, repetir compra e apresentar a marca para novos clientes no Japão.", ja: "ブラジルらしい甘さとバランスを引き出すよう焙煎したセラード ミネイロのロット。ギフトにも定期購入にも向いた定番商品です。" },
    badge: { pt: "Compra recorrente", ja: "リピート向け" },
    tastingNotes: { pt: "Notas de chocolate, castanha e açúcar mascavo.", ja: "チョコレート、ナッツ、ブラウンシュガーのような風味。" },
    usage: { pt: "Perfeito para coado, prensa francesa e espresso suave.", ja: "ハンドドリップ、フレンチプレス、マイルドなエスプレッソに最適です。" },
    benefits: [
      { pt: "Perfil brasileiro clássico, fácil de agradar.", ja: "親しみやすいブラジルらしい味わい。" },
      { pt: "Bom para presente e recompra.", ja: "ギフトにもリピート購入にも向いています。" },
      { pt: "Funciona bem em vários métodos de preparo.", ja: "さまざまな抽出方法で楽しめます。" }
    ],
    faq: [
      {
        question: { pt: "Esse café é mais doce ou mais ácido?", ja: "酸味より甘さが強いですか?" },
        answer: { pt: "A proposta é destacar doçura, chocolate e castanha, com acidez mais discreta.", ja: "酸味よりも甘さとチョコ感を感じやすいバランスです。" }
      },
      {
        question: { pt: "Serve para filtro?", ja: "ハンドドリップ向きですか?" },
        answer: { pt: "Sim. É um café versátil, bom para filtro, prensa e espresso suave.", ja: "はい。ハンドドリップ、フレンチプレス、やさしいエスプレッソまで幅広く使えます。" }
      }
    ],
    priceYen: 1680,
    shippingWeightGrams: 260,
    weight: "200g",
    shelfLife: "12 meses",
    origin: { pt: "Cerrado Mineiro, Brasil", ja: "ブラジル セラード ミネイロ" }
  },
  {
    slug: "acai-energy-powder",
    category: "wellness",
    image: "/placeholders/acai.svg",
    name: { pt: "Açaí em Pó Energia", ja: "アサイーパウダー" },
    shortDescription: { pt: "Açaí liofilizado em pó, prático para smoothies, bowls e receitas.", ja: "スムージーやボウルに使いやすいフリーズドライのアサイーパウダー。" },
    story: { pt: "A proposta aqui é levar o imaginário do açaí brasileiro para o Japão sem depender de cadeia fria. Embalagem leve, alto valor por volume e uso versátil em casa.", ja: "冷凍物流なしでブラジル産アサイーの魅力を届けるためのパウダータイプ。軽量で扱いやすく、ご家庭で幅広く使えます。" },
    badge: { pt: "Diferenciado", ja: "個性派" },
    usage: { pt: "Misture com iogurte, leite, banana ou granola.", ja: "ヨーグルト、ミルク、バナナ、グラノーラと合わせてお楽しみください。" },
    benefits: [
      { pt: "Leva o imaginário do açaí sem precisar de congelados.", ja: "冷凍不要でアサイーの魅力を楽しめます。" },
      { pt: "Versátil para bowls, smoothies e receitas.", ja: "ボウルやスムージー、レシピにも使いやすいです。" },
      { pt: "Formato leve, prático e fácil de armazenar.", ja: "軽量で保管しやすく、扱いやすい形です。" }
    ],
    faq: [
      {
        question: { pt: "Precisa de refrigeração?", ja: "冷蔵は必要ですか?" },
        answer: { pt: "Não. É justamente uma alternativa de açaí para ecommerce sem cadeia fria.", ja: "不要です。常温流通しやすい形として提案しています。" }
      },
      {
        question: { pt: "Como usar no café da manhã?", ja: "朝食ではどう使えますか?" },
        answer: { pt: "Com iogurte, banana, leite ou granola, ele entra bem em rotinas simples.", ja: "ヨーグルト、バナナ、ミルク、グラノーラと合わせる使い方が人気です。" }
      }
    ],
    priceYen: 2280,
    shippingWeightGrams: 140,
    weight: "100g",
    shelfLife: "18 meses",
    origin: { pt: "Pará, Brasil", ja: "ブラジル パラー州" }
  },

  {
    slug: "castanha-caju-alibec",
    category: "wellness",
    image: "/products/castanha-caju-alibec.jpg",
    name: { pt: "Castanha de Caju Torrada sem Sal - Alibec 250g", ja: "カシューナッツ ロースト無塩 アリベック 250g" },
    shortDescription: {
      pt: "Castanha de caju torrada sem sal, selecionada e embalada para manter o crocante.",
      ja: "無塩ローストのカシューナッツ。歯ごたえを保つよう丁寧に選別・包装されています。"
    },
    story: {
      pt: "A Alibec seleciona as melhores castanhas de caju do Brasil e as torra sem sal, preservando o sabor natural e a textura crocante. Produto nacional premium, ideal para snack ou culinária.",
      ja: "アリベックはブラジル産の最高品質のカシューナッツを無塩でロースト。自然な風味とサクサク感を保ったプレミアム国産品。おやつや料理にも最適です。"
    },
    badge: { pt: "Sem sal", ja: "無塩" },
    usage: {
      pt: "Pode ser consumida como snack, adicionada em saladas, granola ou pratos salgados.",
      ja: "そのままスナックとして、またはサラダ、グラノーラ、料理のトッピングにもお使いいただけます。"
    },
    benefits: [
      { pt: "Torrada sem sal, preservando o sabor natural.", ja: "無塩ローストで自然な風味をそのままに。" },
      { pt: "Produto selecionado e embalado com validade longa.", ja: "選別済みで長期保存が可能な包装。" },
      { pt: "Versátil: snack, culinária e granola.", ja: "スナック・料理・グラノーラと多用途。" }
    ],
    faq: [
      {
        question: { pt: "Tem sal ou conservantes?", ja: "塩分や保存料は入っていますか?" },
        answer: { pt: "Não. É castanha torrada sem sal e sem conservantes.", ja: "いいえ。無塩・無保存料のローストカシューナッツです。" }
      }
    ],
    priceYen: 1680,
    shippingWeightGrams: 280,
    weight: "250g",
    shelfLife: "8 meses (val. 18/10/2026)",
    origin: { pt: "Brasil", ja: "ブラジル" }
  },

  {
    slug: "chocolate-onveg-70-acucar-coco",
    category: "wellness",
    image: "/products/chocolate-onveg-70.jpg",
    name: { pt: "Chocolate OnVeg 70% Açúcar de Coco - 80g", ja: "OnVeg ダークチョコレート70% ココナッツシュガー 80g" },
    shortDescription: {
      pt: "Chocolate orgânico 70% cacau da Amazônia, adoçado com açúcar de coco. Vegano e artesanal.",
      ja: "アマゾン産カカオ70%のオーガニックダークチョコ。ヴィーガン・無添加・手作り。"
    },
    story: {
      pt: "A OnVeg produz chocolate bean-to-bar com cacau da Amazônia, adoçado com açúcar de coco e sem conservantes. Certificado Orgânico Brasil, vegano e livre de glúten.",
      ja: "OnVegはアマゾン産カカオを使ったBean-to-Barチョコレート。ヴィーガン・グルテンフリー・無保存料で、オーガニックブラジル認証取得済みです。"
    },
    badge: { pt: "Orgânico", ja: "オーガニック" },
    tastingNotes: { pt: "Cacau intenso com leve doçura de coco.", ja: "濃厚なカカオとほのかなヤシの甘さ。" },
    usage: {
      pt: "Deguste puro ou use em receitas. Rico em antioxidantes.",
      ja: "そのままお召し上がりいただくか、お菓子作りにもご利用いただけます。抗酸化物質が豊富です。"
    },
    benefits: [
      { pt: "Orgânico, vegano e sem glúten.", ja: "オーガニック・ヴィーガン・グルテンフリー。" },
      { pt: "Bean-to-bar com cacau da Amazônia.", ja: "アマゾン産カカオのBean-to-Bar製法。" },
      { pt: "Sem conservantes e ingredientes artesanais.", ja: "無保存料・職人製法。" }
    ],
    faq: [
      {
        question: { pt: "Tem lactose?", ja: "乳糖は含まれますか?" },
        answer: { pt: "Não. É vegano, sem lactose.", ja: "含まれません。完全ヴィーガンです。" }
      }
    ],
    priceYen: 1680,
    shippingWeightGrams: 100,
    weight: "80g",
    shelfLife: "12 meses",
    origin: { pt: "Brasil", ja: "ブラジル" }
  },

  {
    slug: "chocolate-onveg-50-leite-coco",
    category: "wellness",
    image: "/products/chocolate-onveg-50.jpg",
    name: { pt: "Chocolate OnVeg Leite de Coco 50% - 80g", ja: "OnVeg ミルクチョコレート50% ヤシミルク 80g" },
    shortDescription: {
      pt: "Chocolate orgânico 50% cacau da Amazônia com leite de coco. Vegano, artesanal e sem conservantes.",
      ja: "アマゾン産カカオ50%のオーガニックミルクチョコ（ヤシミルク使用）。ヴィーガン・無添加。"
    },
    story: {
      pt: "Versão mais suave da linha OnVeg, com cacau da Amazônia e leite de coco como base. Certificado Orgânico Brasil, bean-to-bar, sem glúten e sem conservantes.",
      ja: "OnVegのマイルドバージョン。アマゾン産カカオとヤシミルク使用のヴィーガンミルクチョコ。グルテンフリー・無保存料・オーガニック認証済み。"
    },
    badge: { pt: "Vegano", ja: "ヴィーガン" },
    tastingNotes: { pt: "Cacau suave com toque cremoso de coco.", ja: "まろやかなカカオとヤシのクリーミーさ。" },
    usage: {
      pt: "Ideal para quem prefere chocolate mais suave. Rico em antioxidantes.",
      ja: "まろやかなチョコレートがお好みの方に。抗酸化物質が豊富です。"
    },
    benefits: [
      { pt: "Orgânico, vegano e sem glúten.", ja: "オーガニック・ヴィーガン・グルテンフリー。" },
      { pt: "Leite de coco como alternativa vegetal.", ja: "植物性のヤシミルクを使用。" },
      { pt: "Artesanal, sem conservantes.", ja: "職人製法・無保存料。" }
    ],
    faq: [
      {
        question: { pt: "Tem leite de vaca?", ja: "牛乳は使われていますか?" },
        answer: { pt: "Não. O leite usado é de coco, 100% vegano.", ja: "使われていません。ヤシミルク使用の100%ヴィーガンです。" }
      }
    ],
    priceYen: 1580,
    shippingWeightGrams: 100,
    weight: "80g",
    shelfLife: "12 meses",
    origin: { pt: "Brasil", ja: "ブラジル" }
  },

  {
    slug: "guarana-valeso-moido",
    category: "wellness",
    image: "/products/guarana-valeso.jpg",
    name: { pt: "Guaraná Moído Premium Valeso - 45g", ja: "グアラナパウダー プレミアム バレーゾ 45g" },
    shortDescription: {
      pt: "Guaraná moído puro da Amazônia, alto teor de cafeína. Sem glúten e natural.",
      ja: "アマゾン産純粋グアラナパウダー。高カフェイン・無グルテン・無添加。"
    },
    story: {
      pt: "A Valeso produz guaraná puro desde 1998 em cultivos próprios na Amazônia. Moído na hora para preservar os compostos ativos. Ideal para sucos, vitaminas, chás e bebidas energéticas.",
      ja: "バレーゾは1998年からアマゾン自社農園でグアラナを栽培。活性成分を保つよう挽きたてで出荷。ジュース・スムージー・お茶・エナジードリンクに最適です。"
    },
    badge: { pt: "Energizante", ja: "エナジー" },
    usage: {
      pt: "Adicione em sucos, vitaminas, chás ou xaropes. Produto não hidrossolúvel; coar antes de beber.",
      ja: "ジュース・スムージー・お茶・シロップに加えてください。水溶性ではないため、飲む前に濾してください。"
    },
    benefits: [
      { pt: "Guaraná puro, cultivado e processado pela própria marca.", ja: "自社農園で栽培・加工した純粋グアラナ。" },
      { pt: "Alto teor de cafeína natural.", ja: "天然カフェインを高濃度で含有。" },
      { pt: "Sem glúten, natural e seguro.", ja: "グルテンフリー・無添加・安全。" }
    ],
    faq: [
      {
        question: { pt: "Dissolve na água?", ja: "水に溶けますか?" },
        answer: { pt: "Não é hidrossolúvel. Mexa bem e coe antes de consumir.", ja: "水溶性ではありません。よく混ぜてから濾してお召し上がりください。" }
      }
    ],
    priceYen: 1280,
    shippingWeightGrams: 80,
    weight: "45g",
    shelfLife: "18 meses",
    origin: { pt: "Amazônia, Brasil", ja: "ブラジル アマゾン" }
  },

  {
    slug: "macabite-red-choco-colorandina",
    category: "wellness",
    image: "/products/macabite-red-choco.jpg",
    name: { pt: "Maca Bite Red Choco - ColorAndina 30un", ja: "マカバイト レッドチョコ ColorAndina 30個入り" },
    shortDescription: {
      pt: "Snack de banana com maca peruana vermelha coberto de chocolate meio amargo. 46 kcal por porção.",
      ja: "バナナ×赤マカのスナックをビタースイートチョコでコーティング。1個46kcal。"
    },
    story: {
      pt: "A ColorAndina combina maca peruana vermelha com banana desidratada e cobertura de chocolate meio amargo. Cada unidade contém 1g de maca peruana. Praticidade e funcionalidade no dia a dia.",
      ja: "ColorAndinaが赤いペルー産マカとバナナを組み合わせ、ビタースイートチョコでコーティング。1粒に1gのマカを配合。手軽な日課のサプリ感覚スナック。"
    },
    badge: { pt: "Funcional", ja: "機能性" },
    usage: {
      pt: "Consuma 1 unidade por dia como dose diária de maca color. Pode ser consumido a qualquer hora.",
      ja: "1日1粒を目安に。いつでもお召し上がりいただけます。"
    },
    benefits: [
      { pt: "1g de maca peruana por unidade.", ja: "1粒に1gのペルー産マカを配合。" },
      { pt: "Cobertura de chocolate meio amargo.", ja: "ビタースイートチョコレートコーティング。" },
      { pt: "Snack prático, 46 kcal por porção.", ja: "手軽なスナック、1個46kcal。" }
    ],
    faq: [
      {
        question: { pt: "Quantas unidades por dia?", ja: "1日何粒が目安ですか?" },
        answer: { pt: "1 unidade é a dose diária sugerida de maca color.", ja: "1日1粒が目安の摂取量です。" }
      }
    ],
    priceYen: 2480,
    shippingWeightGrams: 200,
    weight: "30 unidades (150g aprox.)",
    shelfLife: "12 meses",
    origin: { pt: "Brasil / Peru", ja: "ブラジル・ペルー" }
  },

  {
    slug: "mel-organico-mn-propolis",
    category: "wellness",
    image: "/products/mel-mn-propolis.jpg",
    name: { pt: "Mel Orgânico MN Propolis - Bisnaga 200g", ja: "オーガニックハニー MN Propolis スクイズボトル 200g" },
    shortDescription: {
      pt: "Mel orgânico certificado Orgânico Brasil, em bisnaga prática de 200g.",
      ja: "オーガニックブラジル認証済み蜂蜜。使いやすい200gスクイズボトル入り。"
    },
    story: {
      pt: "O mel da MN Propolis possui certificação Orgânico Brasil por auditoria, garantindo a origem e o processo de produção. Apresentado em bisnaga higiênica para fácil uso no dia a dia.",
      ja: "MN Própolisの蜂蜜は第三者審査によるオーガニックブラジル認証取得。衛生的なスクイズボトルで毎日手軽にご使用いただけます。"
    },
    badge: { pt: "Certificado", ja: "認証済み" },
    usage: {
      pt: "Ideal para adoçar chás, iogurtes e receitas. Pode ser usado junto ao extrato de própolis.",
      ja: "お茶・ヨーグルト・レシピの甘味付けに最適。プロポリスエキスと併用もおすすめです。"
    },
    benefits: [
      { pt: "Certificação Orgânico Brasil por auditoria.", ja: "第三者審査のオーガニックブラジル認証。" },
      { pt: "Bisnaga prática e higiênica.", ja: "衛生的で使いやすいスクイズボトル。" },
      { pt: "Combina bem com própolis e chás.", ja: "プロポリスやお茶との相性抜群。" }
    ],
    faq: [
      {
        question: { pt: "É pasteurizado?", ja: "加熱殺菌されていますか?" },
        answer: { pt: "Para garantir a certificação orgânica, o processo é controlado. Verifique o rótulo para detalhes.", ja: "オーガニック認証の基準に沿った工程で製造されています。詳細はラベルをご確認ください。" }
      }
    ],
    priceYen: 1980,
    shippingWeightGrams: 240,
    weight: "200g",
    shelfLife: "24 meses",
    origin: { pt: "Brasil", ja: "ブラジル" }
  },

  {
    slug: "cafe-altinopolis-organico",
    category: "coffee",
    image: "/products/cafe-altinopolis.webp",
    name: { pt: "Café Orgânico Altinópolis Torrado Moído - 250g", ja: "アルチノポリス オーガニックコーヒー 中挽き 250g" },
    shortDescription: {
      pt: "Café orgânico certificado, torrado e moído, de Altinópolis SP. Sabor equilibrado e encorpado.",
      ja: "サンパウロ州アルチノポリス産オーガニック認証コーヒー。バランスよくコクのある中挽き。"
    },
    story: {
      pt: "A Altinópolis é referência em café orgânico no estado de São Paulo. Torrado e moído para preservar o verdadeiro sabor do café brasileiro. Certificado Orgânico Brasil.",
      ja: "アルチノポリスはサンパウロ州を代表するオーガニックコーヒー産地。ブラジルコーヒー本来の味を引き出すよう焙煎・中挽きしました。オーガニックブラジル認証取得済み。"
    },
    badge: { pt: "Orgânico", ja: "オーガニック" },
    tastingNotes: { pt: "Encorpado, com notas de caramelo e baunilha.", ja: "コクのある味わいにキャラメルとバニラのニュアンス。" },
    usage: {
      pt: "Ideal para coado tradicional, aeropress ou cafeteira italiana.",
      ja: "ペーパードリップ・エアロプレス・マキネッタに最適です。"
    },
    benefits: [
      { pt: "Certificação Orgânico Brasil.", ja: "オーガニックブラジル認証。" },
      { pt: "Torrado e moído em Altinópolis SP.", ja: "サンパウロ州アルチノポリスで焙煎・挽豆。" },
      { pt: "Aroma e sabor do café brasileiro clássico.", ja: "クラシックなブラジルコーヒーの香りと風味。" }
    ],
    faq: [
      {
        question: { pt: "É torrado médio ou escuro?", ja: "焙煎は中煎りですか？深煎りですか？" },
        answer: { pt: "Torrado médio para equilibrar doçura e corpo.", ja: "甘みとコクのバランスを取った中煎りです。" }
      }
    ],
    priceYen: 1980,
    shippingWeightGrams: 280,
    weight: "250g",
    shelfLife: "12 meses",
    origin: { pt: "Altinópolis, São Paulo, Brasil", ja: "ブラジル サンパウロ州 アルチノポリス" }
  },

  {
    slug: "propolis-ponlee-verde-alcoolico",
    category: "propolis",
    image: "/products/propolis-ponlee-verde.jpg",
    name: { pt: "Extrato de Própolis Verde PonLee Alcoólico - 30ml", ja: "グリーンプロポリスエキス PonLee アルコール液 30ml" },
    shortDescription: {
      pt: "Extrato de própolis verde brasileiro em base alcoólica. Frasco 30ml, exportado para o mundo.",
      ja: "ブラジル産グリーンプロポリスのアルコールエキス。輸出仕様30mlボトル。"
    },
    story: {
      pt: "A PonLee produz própolis verde brasileiro com o selo Export Brazil. Concentração e pureza reconhecidas internacionalmente, especialmente no mercado japonês.",
      ja: "PonLeeはExport Brazilブランドでブラジル産グリーンプロポリスを長年製造。その濃度と純度は日本市場でも高く評価されています。"
    },
    badge: { pt: "Export Brazil", ja: "エクスポートブラジル" },
    usage: {
      pt: "Diluir em água, suco ou mel. Uso oral, algumas gotas por dia.",
      ja: "水・ジュース・蜂蜜に希釈してお使いください。1日数滴が目安です。"
    },
    benefits: [
      { pt: "Própolis verde brasileiro de alta concentração.", ja: "高濃度ブラジル産グリーンプロポリス。" },
      { pt: "Marca com tradição de exportação para o Japão.", ja: "日本への輸出実績豊富なブランド。" },
      { pt: "Frasco compacto 30ml, ideal para envio.", ja: "30ml小型ボトルで配送に最適。" }
    ],
    faq: [
      {
        question: { pt: "Tem álcool na fórmula?", ja: "アルコールは含まれますか?" },
        answer: { pt: "Sim, é base alcoólica. Há versão sem álcool disponível.", ja: "はい、アルコール基剤です。ノンアルコール版もございます。" }
      }
    ],
    priceYen: 3980,
    shippingWeightGrams: 120,
    weight: "30ml",
    shelfLife: "24 meses",
    origin: { pt: "Brasil", ja: "ブラジル" }
  },

  {
    slug: "propolis-ponlee-curcuma-polen",
    category: "propolis",
    image: "/products/propolis-ponlee-curcuma.jpeg",
    name: { pt: "Própolis PonLee Cúrcuma e Pólen - 30ml", ja: "プロポリス PonLee クルクマ＋花粉 ブレンド 30ml" },
    shortDescription: {
      pt: "Blend de extrato de própolis verde, pólen e cúrcuma. Export Brazil, 30ml.",
      ja: "グリーンプロポリスエキス・花粉・クルクマのブレンド。輸出仕様30ml。"
    },
    story: {
      pt: "Versão enriquecida do extrato PonLee, combinando própolis verde brasileiro com pólen apícola e cúrcuma. Fórmula voltada para quem busca um blend funcional de bem-estar.",
      ja: "PonLeeエキスの強化版。ブラジル産グリーンプロポリス・花粉・クルクマを組み合わせたウェルネスブレンドです。"
    },
    badge: { pt: "Blend funcional", ja: "ブレンド機能性" },
    usage: {
      pt: "Diluir em água, suco ou mel. Algumas gotas por dia.",
      ja: "水・ジュース・蜂蜜に希釈してお使いください。1日数滴が目安です。"
    },
    benefits: [
      { pt: "Própolis verde + pólen + cúrcuma num frasco.", ja: "プロポリス・花粉・クルクマを1本に。" },
      { pt: "Export Brazil, para quem busca produto reconhecido.", ja: "Export Brazil認証の信頼ブランド。" },
      { pt: "30ml compacto, ideal para e-commerce.", ja: "30ml小型ボトルでECに最適。" }
    ],
    faq: [
      {
        question: { pt: "Tem álcool?", ja: "アルコールは含まれますか?" },
        answer: { pt: "Sim, base alcoólica com própolis, pólen e cúrcuma.", ja: "はい、プロポリス・花粉・クルクマ配合のアルコール基剤です。" }
      }
    ],
    priceYen: 4480,
    shippingWeightGrams: 120,
    weight: "30ml",
    shelfLife: "24 meses",
    origin: { pt: "Brasil", ja: "ブラジル" }
  },

  {
    slug: "cafe-cia-organica-biodinamico",
    category: "coffee",
    image: "/products/cafe-cia-organica.webp",
    name: { pt: "Café Gourmet Orgânico Biodinâmico Cia. Orgânica - 250g", ja: "Cia. Organica バイオダイナミックコーヒー 250g" },
    shortDescription: {
      pt: "Café 100% arábica, orgânico e biodinâmico. Certificação Demeter e IBD. Torrado e moído.",
      ja: "100%アラビカ・オーガニック・バイオダイナミック農法。Demeter・IBD認証取得済み中挽き。"
    },
    story: {
      pt: "A Cia. Orgânica existe desde 2002 e produz café gourmet sob a certificação Demeter de agricultura biodinâmica. Um dos cafés orgânicos mais reconhecidos do Brasil, com envio internacional.",
      ja: "2002年設立のCia. Orgânicaは、Demeterバイオダイナミック農業認証を取得したグルメコーヒーを生産。ブラジルを代表するオーガニックコーヒーの一つです。"
    },
    badge: { pt: "Demeter", ja: "デメテル認証" },
    tastingNotes: { pt: "Arábica complexo, com corpo pleno e acidez equilibrada.", ja: "複雑な風味、豊かなコク、バランスのよい酸味。" },
    usage: {
      pt: "Versátil para todos os métodos: coado, espresso, prensa francesa.",
      ja: "ドリップ・エスプレッソ・フレンチプレスすべてに対応。"
    },
    benefits: [
      { pt: "Certificações Demeter (biodinâmico) e IBD (orgânico).", ja: "Demeter（バイオダイナミック）・IBD（オーガニック）両認証取得。" },
      { pt: "Café 100% arábica gourmet.", ja: "100%アラビカのグルメコーヒー。" },
      { pt: "Tradição desde 2002, referência em orgânico no Brasil.", ja: "2002年創業、ブラジルオーガニックコーヒーの名門。" }
    ],
    faq: [
      {
        question: { pt: "O que é biodinâmico?", ja: "バイオダイナミックとは何ですか?" },
        answer: { pt: "Agricultura biodinâmica vai além do orgânico: considera ciclos lunares e equilíbrio do solo. Certificada pela Demeter.", ja: "バイオダイナミック農法はオーガニックをさらに発展させたもの。月の周期と土壌バランスを重視し、Demeterが認証します。" }
      }
    ],
    priceYen: 2680,
    shippingWeightGrams: 280,
    weight: "250g",
    shelfLife: "12 meses",
    origin: { pt: "Brasil", ja: "ブラジル" }
  },

  {
    slug: "castanha-para-alibec",
    category: "wellness",
    image: "/products/castanha-para-alibec.png",
    name: { pt: "Castanha do Pará Alibec - 250g", ja: "ブラジルナッツ アリベック 250g" },
    shortDescription: {
      pt: "Castanha do Pará natural selecionada, produto nacional premium da Alibec.",
      ja: "厳選されたブラジルナッツ。アリベックのプレミアム国産品。"
    },
    story: {
      pt: "A Alibec seleciona castanhas do Pará das melhores regiões da Amazônia. Natural, sem processamento adicional, preservando todos os nutrientes. Fonte rica de selênio.",
      ja: "アリベックはアマゾンの最良の産地からブラジルナッツを厳選。無加工で栄養素をそのまま保持。セレンの豊富な供給源です。"
    },
    badge: { pt: "Rico em selênio", ja: "セレン豊富" },
    usage: {
      pt: "Consumir 1 a 2 unidades por dia como fonte de selênio. Também usada em receitas e granola.",
      ja: "セレン補給として1日1〜2粒が目安。グラノーラや料理にも。"
    },
    benefits: [
      { pt: "Fonte natural e concentrada de selênio.", ja: "セレンの天然・高濃度供給源。" },
      { pt: "Produto natural, sem aditivos.", ja: "無添加の自然食品。" },
      { pt: "Selecionada da Amazônia pela Alibec.", ja: "アリベックがアマゾンから厳選。" }
    ],
    faq: [
      {
        question: { pt: "Quantas castanhas por dia?", ja: "1日何粒が目安ですか?" },
        answer: { pt: "1 a 2 unidades por dia já fornecem a dose diária recomendada de selênio.", ja: "1日1〜2粒でセレンの推奨摂取量を補えます。" }
      }
    ],
    priceYen: 1980,
    shippingWeightGrams: 280,
    weight: "250g",
    shelfLife: "8 meses (val. 16/11/2026)",
    origin: { pt: "Amazônia, Brasil", ja: "ブラジル アマゾン" }
  }
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
