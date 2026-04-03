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
      { pt: "Frasco pequeno, facil de guardar e enviar.", ja: "小さなボトルで保管しやすく、配送にも向いています。" },
      { pt: "Ritual simples para o dia a dia.", ja: "毎日に取り入れやすいシンプルな習慣です。" },
      { pt: "Origem clara em Minas Gerais.", ja: "ミナスジェライス州産という明確な産地。" }
    ],
    faq: [
      {
        question: { pt: "Qual o melhor momento para consumir?", ja: "いつ飲むのがおすすめですか?" },
        answer: { pt: "Muita gente usa pela manha ou ao longo do dia, diluido em alguma bebida.", ja: "朝や日中に、水やお茶に混ぜて取り入れる方が多いです。" }
      },
      {
        question: { pt: "E forte no sabor?", ja: "味は強いですか?" },
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
    name: { pt: "Cafe Especial do Cerrado", ja: "セラード産スペシャルティコーヒー" },
    shortDescription: { pt: "Graos torrados com docura natural, chocolate e final limpo.", ja: "自然な甘さとチョコレート感が楽しめる焙煎豆。" },
    story: { pt: "Lote do Cerrado Mineiro torrado para destacar notas classicas do cafe brasileiro. Um cafe facil de presentear, repetir compra e apresentar a marca para novos clientes no Japao.", ja: "ブラジルらしい甘さとバランスを引き出すよう焙煎したセラード ミネイロのロット。ギフトにも定期購入にも向いた定番商品です。" },
    badge: { pt: "Compra recorrente", ja: "リピート向け" },
    tastingNotes: { pt: "Notas de chocolate, castanha e acucar mascavo.", ja: "チョコレート、ナッツ、ブラウンシュガーのような風味。" },
    usage: { pt: "Perfeito para coado, prensa francesa e espresso suave.", ja: "ハンドドリップ、フレンチプレス、マイルドなエスプレッソに最適です。" },
    benefits: [
      { pt: "Perfil brasileiro classico, facil de agradar.", ja: "親しみやすいブラジルらしい味わい。" },
      { pt: "Bom para presente e recompra.", ja: "ギフトにもリピート購入にも向いています。" },
      { pt: "Funciona bem em varios metodos de preparo.", ja: "さまざまな抽出方法で楽しめます。" }
    ],
    faq: [
      {
        question: { pt: "Esse cafe e mais doce ou mais acido?", ja: "酸味より甘さが強いですか?" },
        answer: { pt: "A proposta e destacar docura, chocolate e castanha, com acidez mais discreta.", ja: "酸味よりも甘さとチョコ感を感じやすいバランスです。" }
      },
      {
        question: { pt: "Serve para filtro?", ja: "ハンドドリップ向きですか?" },
        answer: { pt: "Sim. E um cafe versatil, bom para filtro, prensa e espresso suave.", ja: "はい。ハンドドリップ、フレンチプレス、やさしいエスプレッソまで幅広く使えます。" }
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
    name: { pt: "Acai em Po Energia", ja: "アサイーパウダー" },
    shortDescription: { pt: "Acai liofilizado em po, pratico para smoothies, bowls e receitas.", ja: "スムージーやボウルに使いやすいフリーズドライのアサイーパウダー。" },
    story: { pt: "A proposta aqui e levar o imaginario do acai brasileiro para o Japao sem depender de cadeia fria. Embalagem leve, alto valor por volume e uso versatil em casa.", ja: "冷凍物流なしでブラジル産アサイーの魅力を届けるためのパウダータイプ。軽量で扱いやすく、ご家庭で幅広く使えます。" },
    badge: { pt: "Diferenciado", ja: "個性派" },
    usage: { pt: "Misture com iogurte, leite, banana ou granola.", ja: "ヨーグルト、ミルク、バナナ、グラノーラと合わせてお楽しみください。" },
    benefits: [
      { pt: "Leva o imaginario do acai sem precisar de congelados.", ja: "冷凍不要でアサイーの魅力を楽しめます。" },
      { pt: "Versatil para bowls, smoothies e receitas.", ja: "ボウルやスムージー、レシピにも使いやすいです。" },
      { pt: "Formato leve, pratico e facil de armazenar.", ja: "軽量で保管しやすく、扱いやすい形です。" }
    ],
    faq: [
      {
        question: { pt: "Precisa de refrigeracao?", ja: "冷蔵は必要ですか?" },
        answer: { pt: "Nao. E justamente uma alternativa de acai para ecommerce sem cadeia fria.", ja: "不要です。常温流通しやすい形として提案しています。" }
      },
      {
        question: { pt: "Como usar no cafe da manha?", ja: "朝食ではどう使えますか?" },
        answer: { pt: "Com iogurte, banana, leite ou granola, ele entra bem em rotinas simples.", ja: "ヨーグルト、バナナ、ミルク、グラノーラと合わせる使い方が人気です。" }
      }
    ],
    priceYen: 2280,
    shippingWeightGrams: 140,
    weight: "100g",
    shelfLife: "18 meses",
    origin: { pt: "Para, Brasil", ja: "ブラジル パラー州" }
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
      pt: "A Alibec seleciona as melhores castanhas de caju do Brasil e as torra sem sal, preservando o sabor natural e a textura crocante. Produto nacional premium, ideal para snack ou culinaria.",
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
      { pt: "Versatil: snack, culinaria e granola.", ja: "スナック・料理・グラノーラと多用途。" }
    ],
    faq: [
      {
        question: { pt: "Tem sal ou conservantes?", ja: "塩分や保存料は入っていますか?" },
        answer: { pt: "Nao. E castanha torrada sem sal e sem conservantes.", ja: "いいえ。無塩・無保存料のローストカシューナッツです。" }
      }
    ],
    priceYen: 0,
    shippingWeightGrams: 280,
    weight: "250g",
    shelfLife: "8 meses (val. 18/10/2026)",
    origin: { pt: "Brasil", ja: "ブラジル" }
  },

  {
    slug: "chocolate-onveg-70-acucar-coco",
    category: "wellness",
    image: "/products/chocolate-onveg-70.jpg",
    name: { pt: "Chocolate OnVeg 70% Acucar de Coco - 80g", ja: "OnVeg ダークチョコレート70% ココナッツシュガー 80g" },
    shortDescription: {
      pt: "Chocolate organico 70% cacau da Amazonia, adocado com acucar de coco. Vegano e artesanal.",
      ja: "アマゾン産カカオ70%のオーガニックダークチョコ。ヴィーガン・無添加・手作り。"
    },
    story: {
      pt: "A OnVeg produz chocolate bean-to-bar com cacau da Amazonia, adocado com acucar de coco e sem conservantes. Certificado Organico Brasil, vegano e livre de gluten.",
      ja: "OnVegはアマゾン産カカオを使ったBean-to-Barチョコレート。ヴィーガン・グルテンフリー・無保存料で、オーガニックブラジル認証取得済みです。"
    },
    badge: { pt: "Organico", ja: "オーガニック" },
    tastingNotes: { pt: "Cacau intenso com leve docura de coco.", ja: "濃厚なカカオとほのかなヤシの甘さ。" },
    usage: {
      pt: "Deguste puro ou use em receitas. Rico em antioxidantes.",
      ja: "そのままお召し上がりいただくか、お菓子作りにもご利用いただけます。抗酸化物質が豊富です。"
    },
    benefits: [
      { pt: "Organico, vegano e sem gluten.", ja: "オーガニック・ヴィーガン・グルテンフリー。" },
      { pt: "Bean-to-bar com cacau da Amazonia.", ja: "アマゾン産カカオのBean-to-Bar製法。" },
      { pt: "Sem conservantes e ingredientes artesanais.", ja: "無保存料・職人製法。" }
    ],
    faq: [
      {
        question: { pt: "Tem lactose?", ja: "乳糖は含まれますか?" },
        answer: { pt: "Nao. E vegano, sem lactose.", ja: "含まれません。完全ヴィーガンです。" }
      }
    ],
    priceYen: 0,
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
      pt: "Chocolate organico 50% cacau da Amazonia com leite de coco. Vegano, artesanal e sem conservantes.",
      ja: "アマゾン産カカオ50%のオーガニックミルクチョコ（ヤシミルク使用）。ヴィーガン・無添加。"
    },
    story: {
      pt: "Versao mais suave da linha OnVeg, com cacau da Amazonia e leite de coco como base. Certificado Organico Brasil, bean-to-bar, sem gluten e sem conservantes.",
      ja: "OnVegのマイルドバージョン。アマゾン産カカオとヤシミルク使用のヴィーガンミルクチョコ。グルテンフリー・無保存料・オーガニック認証済み。"
    },
    badge: { pt: "Vegano", ja: "ヴィーガン" },
    tastingNotes: { pt: "Cacau suave com toque cremoso de coco.", ja: "まろやかなカカオとヤシのクリーミーさ。" },
    usage: {
      pt: "Ideal para quem prefere chocolate mais suave. Rico em antioxidantes.",
      ja: "まろやかなチョコレートがお好みの方に。抗酸化物質が豊富です。"
    },
    benefits: [
      { pt: "Organico, vegano e sem gluten.", ja: "オーガニック・ヴィーガン・グルテンフリー。" },
      { pt: "Leite de coco como alternativa vegetal.", ja: "植物性のヤシミルクを使用。" },
      { pt: "Artesanal, sem conservantes.", ja: "職人製法・無保存料。" }
    ],
    faq: [
      {
        question: { pt: "Tem leite de vaca?", ja: "牛乳は使われていますか?" },
        answer: { pt: "Nao. O leite usado e de coco, 100% vegano.", ja: "使われていません。ヤシミルク使用の100%ヴィーガンです。" }
      }
    ],
    priceYen: 0,
    shippingWeightGrams: 100,
    weight: "80g",
    shelfLife: "12 meses",
    origin: { pt: "Brasil", ja: "ブラジル" }
  },

  {
    slug: "guarana-valeso-moido",
    category: "wellness",
    image: "/products/guarana-valeso.jpg",
    name: { pt: "Guarana Moido Premium Valeso - 45g", ja: "グアラナパウダー プレミアム バレーゾ 45g" },
    shortDescription: {
      pt: "Guarana moido puro da Amazonia, alto teor de cafeina. Sem gluten e natural.",
      ja: "アマゾン産純粋グアラナパウダー。高カフェイン・無グルテン・無添加。"
    },
    story: {
      pt: "A Valeso produz guarana puro desde 1998 em cultivos proprios na Amazonia. Moido na hora para preservar os compostos ativos. Ideal para sucos, vitaminas, chas e bebidas energeticas.",
      ja: "バレーゾは1998年からアマゾン自社農園でグアラナを栽培。活性成分を保つよう挽きたてで出荷。ジュース・スムージー・お茶・エナジードリンクに最適です。"
    },
    badge: { pt: "Energizante", ja: "エナジー" },
    usage: {
      pt: "Adicione em sucos, vitaminas, chas ou xaropes. Produto nao hidrossoluvel; coar antes de beber.",
      ja: "ジュース・スムージー・お茶・シロップに加えてください。水溶性ではないため、飲む前に濾してください。"
    },
    benefits: [
      { pt: "Guarana puro, cultivado e processado pela propria marca.", ja: "自社農園で栽培・加工した純粋グアラナ。" },
      { pt: "Alto teor de cafeina natural.", ja: "天然カフェインを高濃度で含有。" },
      { pt: "Sem gluten, natural e seguro.", ja: "グルテンフリー・無添加・安全。" }
    ],
    faq: [
      {
        question: { pt: "Dissolve na agua?", ja: "水に溶けますか?" },
        answer: { pt: "Nao e hidrossoluvel. Mexa bem e coe antes de consumir.", ja: "水溶性ではありません。よく混ぜてから濾してお召し上がりください。" }
      }
    ],
    priceYen: 0,
    shippingWeightGrams: 80,
    weight: "45g",
    shelfLife: "18 meses",
    origin: { pt: "Amazonia, Brasil", ja: "ブラジル アマゾン" }
  },

  {
    slug: "macabite-red-choco-colorandina",
    category: "wellness",
    image: "/products/macabite-red-choco.jpg",
    name: { pt: "Maca Bite Red Choco - ColorAndina 30un", ja: "マカバイト レッドチョコ ColorAndina 30個入り" },
    shortDescription: {
      pt: "Snack de banana com maca peruana vermelha coberto de chocolate meio amargo. 46 kcal por porcao.",
      ja: "バナナ×赤マカのスナックをビタースイートチョコでコーティング。1個46kcal。"
    },
    story: {
      pt: "A ColorAndina combina maca peruana vermelha com banana desidratada e cobertura de chocolate meio amargo. Cada unidade contem 1g de maca peruana. Praticidade e funcionalidade no dia a dia.",
      ja: "ColorAndinaが赤いペルー産マカとバナナを組み合わせ、ビタースイートチョコでコーティング。1粒に1gのマカを配合。手軽な日課のサプリ感覚スナック。"
    },
    badge: { pt: "Funcional", ja: "機能性" },
    usage: {
      pt: "Consuma 1 unidade por dia como dose diaria de maca color. Pode ser consumido a qualquer hora.",
      ja: "1日1粒を目安に。いつでもお召し上がりいただけます。"
    },
    benefits: [
      { pt: "1g de maca peruana por unidade.", ja: "1粒に1gのペルー産マカを配合。" },
      { pt: "Cobertura de chocolate meio amargo.", ja: "ビタースイートチョコレートコーティング。" },
      { pt: "Snack pratico, 46 kcal por porcao.", ja: "手軽なスナック、1個46kcal。" }
    ],
    faq: [
      {
        question: { pt: "Quantas unidades por dia?", ja: "1日何粒が目安ですか?" },
        answer: { pt: "1 unidade e a dose diaria sugerida de maca color.", ja: "1日1粒が目安の摂取量です。" }
      }
    ],
    priceYen: 0,
    shippingWeightGrams: 200,
    weight: "30 unidades (150g aprox.)",
    shelfLife: "12 meses",
    origin: { pt: "Brasil / Peru", ja: "ブラジル・ペルー" }
  },

  {
    slug: "mel-organico-mn-propolis",
    category: "wellness",
    image: "/products/mel-mn-propolis.jpg",
    name: { pt: "Mel Organico MN Propolis - Bisnaga 200g", ja: "オーガニックハニー MN Propolis スクイズボトル 200g" },
    shortDescription: {
      pt: "Mel organico certificado Organico Brasil, em bisnaga pratica de 200g.",
      ja: "オーガニックブラジル認証済み蜂蜜。使いやすい200gスクイズボトル入り。"
    },
    story: {
      pt: "O mel da MN Propolis possui certificacao Organico Brasil por auditoria, garantindo a origem e o processo de producao. Apresentado em bisnaga higienica para facil uso no dia a dia.",
      ja: "MN Própolisの蜂蜜は第三者審査によるオーガニックブラジル認証取得。衛生的なスクイズボトルで毎日手軽にご使用いただけます。"
    },
    badge: { pt: "Certificado", ja: "認証済み" },
    usage: {
      pt: "Ideal para adocar chas, iogurtes e receitas. Pode ser usado junto ao extrato de propolis.",
      ja: "お茶・ヨーグルト・レシピの甘味付けに最適。プロポリスエキスと併用もおすすめです。"
    },
    benefits: [
      { pt: "Certificacao Organico Brasil por auditoria.", ja: "第三者審査のオーガニックブラジル認証。" },
      { pt: "Bisnaga pratica e higienica.", ja: "衛生的で使いやすいスクイズボトル。" },
      { pt: "Combina bem com propolis e chas.", ja: "プロポリスやお茶との相性抜群。" }
    ],
    faq: [
      {
        question: { pt: "E pasteurizado?", ja: "加熱殺菌されていますか?" },
        answer: { pt: "Para garantir a certificacao organica, o processo e controlado. Verifique o rotulo para detalhes.", ja: "オーガニック認証の基準に沿った工程で製造されています。詳細はラベルをご確認ください。" }
      }
    ],
    priceYen: 0,
    shippingWeightGrams: 240,
    weight: "200g",
    shelfLife: "24 meses",
    origin: { pt: "Brasil", ja: "ブラジル" }
  },

  {
    slug: "cafe-altinopolis-organico",
    category: "coffee",
    image: "/products/cafe-altinopolis.webp",
    name: { pt: "Cafe Organico Altinopolis Torrado Moido - 250g", ja: "アルチノポリス オーガニックコーヒー 中挽き 250g" },
    shortDescription: {
      pt: "Cafe organico certificado, torrado e moido, de Altinopolis SP. Sabor equilibrado e encorpado.",
      ja: "サンパウロ州アルチノポリス産オーガニック認証コーヒー。バランスよくコクのある中挽き。"
    },
    story: {
      pt: "A Altinopolis e referencia em cafe organico no estado de Sao Paulo. Torrado e moido para preservar o verdadeiro sabor do cafe brasileiro. Certificado Organico Brasil.",
      ja: "アルチノポリスはサンパウロ州を代表するオーガニックコーヒー産地。ブラジルコーヒー本来の味を引き出すよう焙煎・中挽きしました。オーガニックブラジル認証取得済み。"
    },
    badge: { pt: "Organico", ja: "オーガニック" },
    tastingNotes: { pt: "Encorpado, com notas de caramelo e baunilha.", ja: "コクのある味わいにキャラメルとバニラのニュアンス。" },
    usage: {
      pt: "Ideal para coado tradicional, aeropress ou cafeteira italiana.",
      ja: "ペーパードリップ・エアロプレス・マキネッタに最適です。"
    },
    benefits: [
      { pt: "Certificacao Organico Brasil.", ja: "オーガニックブラジル認証。" },
      { pt: "Torrado e moido em Altinopolis SP.", ja: "サンパウロ州アルチノポリスで焙煎・挽豆。" },
      { pt: "Aroma e sabor do cafe brasileiro classico.", ja: "クラシックなブラジルコーヒーの香りと風味。" }
    ],
    faq: [
      {
        question: { pt: "E torrado medio ou escuro?", ja: "焙煎は中煎りですか？深煎りですか？" },
        answer: { pt: "Torrado medio para equilibrar docura e corpo.", ja: "甘みとコクのバランスを取った中煎りです。" }
      }
    ],
    priceYen: 0,
    shippingWeightGrams: 280,
    weight: "250g",
    shelfLife: "12 meses",
    origin: { pt: "Altinopolis, Sao Paulo, Brasil", ja: "ブラジル サンパウロ州 アルチノポリス" }
  },

  {
    slug: "propolis-ponlee-verde-alcoolico",
    category: "propolis",
    image: "/products/propolis-ponlee-verde.jpg",
    name: { pt: "Extrato de Propolis Verde PonLee Alcoolico - 30ml", ja: "グリーンプロポリスエキス PonLee アルコール液 30ml" },
    shortDescription: {
      pt: "Extrato de propolis verde brasileiro em base alcoolica. Frasco 30ml, exportado para o mundo.",
      ja: "ブラジル産グリーンプロポリスのアルコールエキス。輸出仕様30mlボトル。"
    },
    story: {
      pt: "A PonLee produz propolis verde brasileiro com o selo Export Brazil. Concentracao e pureza reconhecidas internacionalmente, especialmente no mercado japones.",
      ja: "PonLeeはExport Brazilブランドでブラジル産グリーンプロポリスを長年製造。その濃度と純度は日本市場でも高く評価されています。"
    },
    badge: { pt: "Export Brazil", ja: "エクスポートブラジル" },
    usage: {
      pt: "Diluir em agua, suco ou mel. Uso oral, algumas gotas por dia.",
      ja: "水・ジュース・蜂蜜に希釈してお使いください。1日数滴が目安です。"
    },
    benefits: [
      { pt: "Propolis verde brasileiro de alta concentracao.", ja: "高濃度ブラジル産グリーンプロポリス。" },
      { pt: "Marca com tradicao de exportacao para o Japao.", ja: "日本への輸出実績豊富なブランド。" },
      { pt: "Frasco compacto 30ml, ideal para envio.", ja: "30ml小型ボトルで配送に最適。" }
    ],
    faq: [
      {
        question: { pt: "Tem alcool na formula?", ja: "アルコールは含まれますか?" },
        answer: { pt: "Sim, e base alcoolica. Ha versao sem alcool disponivel.", ja: "はい、アルコール基剤です。ノンアルコール版もございます。" }
      }
    ],
    priceYen: 0,
    shippingWeightGrams: 120,
    weight: "30ml",
    shelfLife: "24 meses",
    origin: { pt: "Brasil", ja: "ブラジル" }
  },

  {
    slug: "propolis-ponlee-curcuma-polen",
    category: "propolis",
    image: "/products/propolis-ponlee-curcuma.jpeg",
    name: { pt: "Propolis PonLee Curcuma e Polen - 30ml", ja: "プロポリス PonLee クルクマ＋花粉 ブレンド 30ml" },
    shortDescription: {
      pt: "Blend de extrato de propolis verde, polen e curcuma. Export Brazil, 30ml.",
      ja: "グリーンプロポリスエキス・花粉・クルクマのブレンド。輸出仕様30ml。"
    },
    story: {
      pt: "Versao enriquecida do extrato PonLee, combinando propolis verde brasileiro com polen apicola e curcuma. Formula voltada para quem busca um blend funcional de bem-estar.",
      ja: "PonLeeエキスの強化版。ブラジル産グリーンプロポリス・花粉・クルクマを組み合わせたウェルネスブレンドです。"
    },
    badge: { pt: "Blend funcional", ja: "ブレンド機能性" },
    usage: {
      pt: "Diluir em agua, suco ou mel. Algumas gotas por dia.",
      ja: "水・ジュース・蜂蜜に希釈してお使いください。1日数滴が目安です。"
    },
    benefits: [
      { pt: "Propolis verde + polen + curcuma num frasco.", ja: "プロポリス・花粉・クルクマを1本に。" },
      { pt: "Export Brazil, para quem busca produto reconhecido.", ja: "Export Brazil認証の信頼ブランド。" },
      { pt: "30ml compacto, ideal para e-commerce.", ja: "30ml小型ボトルでECに最適。" }
    ],
    faq: [
      {
        question: { pt: "Tem alcool?", ja: "アルコールは含まれますか?" },
        answer: { pt: "Sim, base alcoolica com propolis, polen e curcuma.", ja: "はい、プロポリス・花粉・クルクマ配合のアルコール基剤です。" }
      }
    ],
    priceYen: 0,
    shippingWeightGrams: 120,
    weight: "30ml",
    shelfLife: "24 meses",
    origin: { pt: "Brasil", ja: "ブラジル" }
  },

  {
    slug: "cafe-cia-organica-biodinamico",
    category: "coffee",
    image: "/products/cafe-cia-organica.webp",
    name: { pt: "Cafe Gourmet Organico Biodinamico Cia. Organica - 250g", ja: "Cia. Organica バイオダイナミックコーヒー 250g" },
    shortDescription: {
      pt: "Cafe 100% arabica, organico e biodinamico. Certificacao Demeter e IBD. Torrado e moido.",
      ja: "100%アラビカ・オーガニック・バイオダイナミック農法。Demeter・IBD認証取得済み中挽き。"
    },
    story: {
      pt: "A Cia. Organica existe desde 2002 e produz cafe gourmet sob a certificacao Demeter de agricultura biodinamica. Um dos cafes organicos mais reconhecidos do Brasil, com envio internacional.",
      ja: "2002年設立のCia. Orgânicaは、Demeterバイオダイナミック農業認証を取得したグルメコーヒーを生産。ブラジルを代表するオーガニックコーヒーの一つです。"
    },
    badge: { pt: "Demeter", ja: "デメテル認証" },
    tastingNotes: { pt: "Arabica complexo, com corpo pleno e acidez equilibrada.", ja: "複雑な風味、豊かなコク、バランスのよい酸味。" },
    usage: {
      pt: "Versatil para todos os metodos: coado, espresso, prensa francesa.",
      ja: "ドリップ・エスプレッソ・フレンチプレスすべてに対応。"
    },
    benefits: [
      { pt: "Certificacoes Demeter (biodinamico) e IBD (organico).", ja: "Demeter（バイオダイナミック）・IBD（オーガニック）両認証取得。" },
      { pt: "Cafe 100% arabica gourmet.", ja: "100%アラビカのグルメコーヒー。" },
      { pt: "Tradicao desde 2002, referencia em organico no Brasil.", ja: "2002年創業、ブラジルオーガニックコーヒーの名門。" }
    ],
    faq: [
      {
        question: { pt: "O que e biodinamico?", ja: "バイオダイナミックとは何ですか?" },
        answer: { pt: "Agricultura biodinamica vai alem do organico: considera ciclos lunares e equilibrio do solo. Certificada pela Demeter.", ja: "バイオダイナミック農法はオーガニックをさらに発展させたもの。月の周期と土壌バランスを重視し、Demeterが認証します。" }
      }
    ],
    priceYen: 0,
    shippingWeightGrams: 280,
    weight: "250g",
    shelfLife: "12 meses",
    origin: { pt: "Brasil", ja: "ブラジル" }
  },

  {
    slug: "castanha-para-alibec",
    category: "wellness",
    image: "/products/castanha-para-alibec.png",
    name: { pt: "Castanha do Para Alibec - 250g", ja: "ブラジルナッツ アリベック 250g" },
    shortDescription: {
      pt: "Castanha do Para natural selecionada, produto nacional premium da Alibec.",
      ja: "厳選されたブラジルナッツ。アリベックのプレミアム国産品。"
    },
    story: {
      pt: "A Alibec seleciona castanhas do Para das melhores regioes da Amazonia. Natural, sem processamento adicional, preservando todos os nutrientes. Fonte rica de selenio.",
      ja: "アリベックはアマゾンの最良の産地からブラジルナッツを厳選。無加工で栄養素をそのまま保持。セレンの豊富な供給源です。"
    },
    badge: { pt: "Rico em selenio", ja: "セレン豊富" },
    usage: {
      pt: "Consumir 1 a 2 unidades por dia como fonte de selenio. Tambem usada em receitas e granola.",
      ja: "セレン補給として1日1〜2粒が目安。グラノーラや料理にも。"
    },
    benefits: [
      { pt: "Fonte natural e concentrada de selenio.", ja: "セレンの天然・高濃度供給源。" },
      { pt: "Produto natural, sem aditivos.", ja: "無添加の自然食品。" },
      { pt: "Selecionada da Amazonia pela Alibec.", ja: "アリベックがアマゾンから厳選。" }
    ],
    faq: [
      {
        question: { pt: "Quantas castanhas por dia?", ja: "1日何粒が目安ですか?" },
        answer: { pt: "1 a 2 unidades por dia ja fornecem a dose diaria recomendada de selenio.", ja: "1日1〜2粒でセレンの推奨摂取量を補えます。" }
      }
    ],
    priceYen: 0,
    shippingWeightGrams: 280,
    weight: "250g",
    shelfLife: "8 meses (val. 16/11/2026)",
    origin: { pt: "Amazonia, Brasil", ja: "ブラジル アマゾン" }
  }
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
