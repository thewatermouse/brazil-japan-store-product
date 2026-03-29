"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function Footer() {
  const { language } = useLanguage();

  const copy = {
    pt: {
      eyebrow: "Entrega internacional",
      title: "Produtos brasileiros selecionados para o cliente no Japao",
      text: "Loja pensada para venda direta ao consumidor, com foco em confianca, origem e produtos que viajam bem.",
      launch: "Nesta fase",
      items: ["Catalogo enxuto", "Conteudo bilingue", "Base pronta para checkout"]
    },
    ja: {
      eyebrow: "越境販売",
      title: "日本向けに届けるブラジル産セレクトストア",
      text: "一般消費者向けに、信頼しやすく買いやすい越境ストアとして設計しています。",
      launch: "現状の構成",
      items: ["厳選カタログ", "日本語/ポルトガル語対応", "チェックアウト連携準備済み"]
    }
  } as const;

  const t = copy[language];

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="eyebrow">{t.eyebrow}</p>
          <h3>{t.title}</h3>
          <p>{t.text}</p>
        </div>
        <div>
          <p className="eyebrow">{t.launch}</p>
          <ul className="footer-list">
            {t.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
