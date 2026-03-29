"use client";

import Link from "next/link";

import { ProductCard } from "@/components/ProductCard";
import { useLanguage } from "@/components/LanguageProvider";
import { products } from "@/data/products";

const copy = {
  pt: {
    kicker: "Brasil vivo, em pequenos rituais",
    title: "Sabores e extratos do Brasil com origem real, agora para o Japão.",
    description:
      "Café do Cerrado, própolis verde de Minas e açaí da Amazônia. Uma loja pensada para quem quer comprar produtos brasileiros com história, contato com a natureza e uso no dia a dia.",
    primaryCta: "Explorar produtos",
    secondaryCta: "Conhecer a seleção",
    panelTitle: "O que define a loja",
    highlights: [
      "Ingredientes ligados a território, clima e colheita",
      "Produtos estáveis, leves e viáveis para envio internacional",
      "Experiência bilíngue para aproximar marca e consumidor final"
    ],
    shelfTitle: "Da floresta, da fazenda e do cotidiano brasileiro",
    shelfText:
      "Não é uma vitrine genérica de importados. Cada item entra aqui porque tem origem clara, ritual simples de consumo e personalidade brasileira perceptível no sabor, no aroma ou no uso.",
    shelfItems: ["Minas Gerais", "Cerrado Mineiro", "Pará"],
    featureEyebrow: "Seleção inicial",
    featureTitle: "Produtos para começar bem a loja",
    featureLink: "Ver catálogo completo",
    ritualEyebrow: "Como essa marca se sente",
    ritualTitle: "Natureza brasileira sem fantasia turística.",
    ritualItems: [
      {
        title: "Matéria-prima com lugar",
        text: "A origem não entra como enfeite. Ela é parte do produto, da decisão de compra e da confiança de quem recebe."
      },
      {
        title: "Uso simples no dia a dia",
        text: "Produtos pequenos, úteis e repetíveis. Nada depende de ocasião especial para fazer sentido."
      },
      {
        title: "Calor humano, não discurso institucional",
        text: "A linguagem da marca precisa parecer próxima, honesta e segura, não apresentação de trading company."
      }
    ],
    promiseEyebrow: "Compromisso da loja",
    promiseTitle: "Comprar com clareza: o que é, de onde vem e como usar.",
    promiseText:
      "A proposta comercial é direta: poucos produtos, boa explicação, identidade forte e espaço para crescer com o que realmente vender."
  },
  ja: {
    kicker: "ブラジルの自然を、毎日の小さな習慣へ",
    title: "土地の個性が伝わるブラジル産食品を、日本の暮らしへ。",
    description:
      "セラードのコーヒー、ミナスのグリーンプロポリス、アマゾンのアサイー。自然とのつながりや産地の空気を感じられる商品を、日本のお客様向けに丁寧に届けます。",
    primaryCta: "商品を見る",
    secondaryCta: "セレクションを知る",
    panelTitle: "このストアの考え方",
    highlights: [
      "土地・気候・収穫背景が感じられる原料",
      "越境配送しやすい軽量で安定した商品設計",
      "日本語とポルトガル語の両方で伝えるストア体験"
    ],
    shelfTitle: "森と畑と、ブラジルの日常から届くもの",
    shelfText:
      "単なる輸入雑貨の並びではありません。産地の個性があり、使い方がわかりやすく、ブラジルらしさが自然に伝わるものだけを選んでいます。",
    shelfItems: ["ミナスジェライス", "セラード", "パラー"],
    featureEyebrow: "初期ラインナップ",
    featureTitle: "この店を始めるための主役商品",
    featureLink: "商品一覧を見る",
    ritualEyebrow: "ブランドの空気感",
    ritualTitle: "観光的なブラジル像ではなく、自然と暮らしの近さを。",
    ritualItems: [
      {
        title: "産地が伝わること",
        text: "原産地は飾りではなく、安心感と選ぶ理由の一部です。"
      },
      {
        title: "日常に取り入れやすいこと",
        text: "特別なイベント用ではなく、毎日続けやすい小さな習慣として成立する商品を選びます。"
      },
      {
        title: "やわらかく誠実な言葉で伝えること",
        text: "企業説明ではなく、実際に買う人に寄り添う言葉で商品を届けます。"
      }
    ],
    promiseEyebrow: "この店の約束",
    promiseTitle: "何を買うのか、どこから来たのか、どう楽しめるのかを明確に。",
    promiseText:
      "まずは数を追わず、説明できる商品だけで始める。その姿勢が、ブランドの信頼をつくります。"
  }
} as const;

export function HomeContent() {
  const { language } = useLanguage();
  const featuredProducts = products.slice(0, 3);
  const t = copy[language];

  return (
    <>
      <section className="hero-section hero-nature">
        <div className="container hero-grid hero-grid-wide">
          <div>
            <p className="eyebrow">{t.kicker}</p>
            <h1>{t.title}</h1>
            <p className="hero-copy">{t.description}</p>
            <div className="hero-actions">
              <Link href="/products" className="button-primary">
                {t.primaryCta}
              </Link>
              <Link href="/about" className="button-secondary">
                {t.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="hero-panel hero-panel-organic">
            <p className="panel-title">{t.panelTitle}</p>
            <ul className="bullet-list bullet-list-spaced">
              {t.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="ingredient-orbs">
              {t.shelfItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section shelf-section">
        <div className="container shelf-grid">
          <div className="shelf-copy">
            <p className="eyebrow">{t.kicker}</p>
            <h2>{t.shelfTitle}</h2>
            <p>{t.shelfText}</p>
          </div>
          <div className="shelf-art" aria-hidden="true">
            <div className="shelf-card shelf-card-leaf" />
            <div className="shelf-card shelf-card-earth" />
            <div className="shelf-card shelf-card-sun" />
          </div>
        </div>
      </section>

      <section className="section section-featured">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t.featureEyebrow}</p>
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

      <section className="section ritual-section">
        <div className="container operation-grid">
          <div>
            <p className="eyebrow">{t.ritualEyebrow}</p>
            <h2>{t.ritualTitle}</h2>
          </div>
          <div className="timeline timeline-soft">
            {t.ritualItems.map((item, index) => (
              <div key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section promise-section">
        <div className="container promise-box">
          <p className="eyebrow">{t.promiseEyebrow}</p>
          <h2>{t.promiseTitle}</h2>
          <p>{t.promiseText}</p>
        </div>
      </section>
    </>
  );
}
