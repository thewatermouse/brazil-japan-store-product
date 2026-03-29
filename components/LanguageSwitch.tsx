"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switch" aria-label="Language selector">
      <button
        type="button"
        className={language === "pt" ? "language-button active" : "language-button"}
        onClick={() => setLanguage("pt")}
      >
        PT
      </button>
      <button
        type="button"
        className={language === "ja" ? "language-button active" : "language-button"}
        onClick={() => setLanguage("ja")}
      >
        日本語
      </button>
    </div>
  );
}
