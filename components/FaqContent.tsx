"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type { Language } from "@/data/products";

const copy = {
  pt: {
    eyebrow: "FAQ geral",
    title: "Perguntas que um cliente real faria antes de comprar.",
    items: [
      { q: "Os produtos ja estao no Japao?", a: "A operacao e organizada para envio ao consumidor final no Japao, com comunicacao clara sobre disponibilidade e prazo antes da confirmacao." },
      { q: "Posso comprar como presente?", a: "Sim. Kits e compras para presente podem ser tratados como pedido especial pelo canal comercial." },
      { q: "Tem pedido minimo?", a: "Nao para o fluxo padrao. Para atacado leve ou recompra programada, a conversa segue por atendimento." }
    ]
  },
  ja: {
    eyebrow: "よくある質問",
    title: "購入前によく出る質問をまとめました。",
    items: [
      { q: "商品は日本国内在庫ですか?", a: "在庫状況と発送方法は、注文確定前に必ず案内します。初期段階では越境配送前提の運用です。" },
      { q: "ギフトとして注文できますか?", a: "はい。ギフト用途やセット注文は個別相談にも対応します。" },
      { q: "最低注文数はありますか?", a: "通常注文にはありません。軽い卸や定期相談は別途対応します。" }
    ]
  }
} as const;

export function FaqContent({ language: forcedLanguage }: { language?: Language }) {
  const { language: contextLanguage } = useLanguage();
  const language = forcedLanguage ?? contextLanguage;
  const t = copy[language];

  return (
    <section className="section">
      <div className="container prose-shell">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>{t.title}</h1>
        <div className="faq-list">
          {t.items.map((item) => (
            <article key={item.q} className="faq-item">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
