"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useLanguage } from "@/components/LanguageProvider";
import { localizedPath, stripLocaleFromPath } from "@/lib/site";

export function LanguageSwitch() {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const basePath = stripLocaleFromPath(pathname);

  return (
    <div className="language-switch" aria-label="Language selector">
      <Link
        href={localizedPath(basePath, "pt")}
        className={language === "pt" ? "language-button active" : "language-button"}
        hrefLang="pt-BR"
        onClick={() => setLanguage("pt")}
      >
        PT
      </Link>
      <Link
        href={localizedPath(basePath, "ja")}
        className={language === "ja" ? "language-button active" : "language-button"}
        hrefLang="ja-JP"
        onClick={() => setLanguage("ja")}
      >
        日本語
      </Link>
    </div>
  );
}
