"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type { Language } from "@/data/products";

const copy = {
  pt: {
    eyebrow: "FAQ geral",
    title: "Perguntas que um cliente real faria antes de comprar.",
    items: [
      { q: "Os produtos já estão no Japão?", a: "A operação é organizada para envio ao consumidor final no Japão, com comunicação clara sobre disponibilidade e prazo antes da confirmação." },
      { q: "Posso comprar como presente?", a: "Sim. Kits e compras para presente podem ser tratados como pedido especial pelo canal comercial." },
      { q: "Tem pedido mínimo?", a: "Não para o fluxo padrão. Para atacado leve ou recompra programada, a conversa segue por atendimento." },
      { q: "O pedido pode ser taxado na alfândega?", a: "Compras para uso pessoal entram no Japão como importação pessoal e, em pequenas quantidades, raramente são taxadas. Se houver taxa ou inspeção, o destinatário é o responsável legal. Detalhes na página de políticas." }
    ]
  },
  ja: {
    eyebrow: "よくある質問",
    title: "購入前によく出る質問をまとめました。",
    items: [
      { q: "商品は日本国内在庫ですか?", a: "在庫状況と発送方法は、注文確定前に必ず案内します。初期段階では越境配送前提の運用です。" },
      { q: "ギフトとして注文できますか?", a: "はい。ギフト用途やセット注文は個別相談にも対応します。" },
      { q: "最低注文数はありますか?", a: "通常注文にはありません。軽い卸や定期相談は別途対応します。" },
      { q: "関税はかかりますか?", a: "個人使用目的の少量のご注文は個人輸入となり、課税されることはまれです。関税や検査が発生した場合は受取人のご負担となります。詳細はポリシーページをご覧ください。" }
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
