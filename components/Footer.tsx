"use client";

import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { localizedPath } from "@/lib/site";

export function Footer() {
  const { language } = useLanguage();

  const copy = {
    pt: {
      eyebrow: "Entrega internacional",
      title: "Produtos brasileiros selecionados para o cliente no Japão",
      text: "Loja pensada para venda direta ao consumidor, com foco em confiança, origem e produtos que viajam bem.",
      launch: "Explorar",
      items: [
        { href: "/sets", label: "Kits" },
        { href: "/shipping", label: "Frete" },
        { href: "/faq", label: "FAQ" },
        { href: "/policies", label: "Políticas" }
      ]
    },
    ja: {
      eyebrow: "越境販売",
      title: "日本向けに届けるブラジル産セレクトストア",
      text: "一般消費者向けに、信頼しやすく買いやすい越境ストアとして設計しています。",
      launch: "ページ案内",
      items: [
        { href: "/sets", label: "セット" },
        { href: "/shipping", label: "配送" },
        { href: "/faq", label: "FAQ" },
        { href: "/policies", label: "ポリシー" }
      ]
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
          <ul className="footer-list footer-links-list">
            {t.items.map((item) => (
              <li key={item.href}>
                <Link href={localizedPath(item.href, language)}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <NewsletterSignup />
      </div>
    </footer>
  );
}
