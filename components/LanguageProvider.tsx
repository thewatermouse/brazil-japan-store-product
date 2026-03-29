"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";

import type { Language } from "@/data/products";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("store-language");
    if (savedLanguage === "pt" || savedLanguage === "ja") {
      setLanguage(savedLanguage);
      return;
    }

    const browserLanguage = window.navigator.language.toLowerCase();
    if (browserLanguage.startsWith("ja")) {
      setLanguage("ja");
    }
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage: (nextLanguage: Language) => {
        setLanguage(nextLanguage);
        window.localStorage.setItem("store-language", nextLanguage);
      }
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
