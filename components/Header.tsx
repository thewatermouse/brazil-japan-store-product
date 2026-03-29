"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useLanguage } from "@/components/LanguageProvider";
import { LanguageSwitch } from "@/components/LanguageSwitch";

const navItems = {
  pt: [
    { href: "/", label: "Inicio" },
    { href: "/products", label: "Produtos" },
    { href: "/about", label: "Marca" },
    { href: "/checkout", label: "Pedido" },
    { href: "/contact", label: "Contato" }
  ],
  ja: [
    { href: "/", label: "ホーム" },
    { href: "/products", label: "商品一覧" },
    { href: "/about", label: "ブランド" },
    { href: "/checkout", label: "注文" },
    { href: "/contact", label: "お問い合わせ" }
  ]
} as const;

export function Header() {
  const pathname = usePathname();
  const { language } = useLanguage();

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link href="/" className="brand-mark">
          <span className="brand-kicker">
            {language === "pt" ? "Brasil para o Japao" : "Brazil to Japan"}
          </span>
          <strong>{language === "pt" ? "Loja Brasil Select" : "Nippon Brasil Select"}</strong>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          {navItems[language].map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "nav-link active" : "nav-link"}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <LanguageSwitch />
      </div>
    </header>
  );
}
