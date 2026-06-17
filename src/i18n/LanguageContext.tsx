import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Lang } from "@/i18n/translations";

type TranslationShape = (typeof translations)["sv"];

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: TranslationShape;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "sam-lang";

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "sv";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "sv" || stored === "en") return stored;
  } catch {
    /* localStorage unavailable – fall through to detection */
  }
  const browser = window.navigator.language?.toLowerCase() ?? "";
  // Swedish-first site: only switch to English for clearly English browsers.
  return browser.startsWith("en") ? "en" : "sv";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore write errors (e.g. private mode) */
    }
  }, [lang]);

  const value: LanguageContextValue = {
    lang,
    setLang: (next: Lang) => setLangState(next),
    toggleLang: () => setLangState((prev) => (prev === "sv" ? "en" : "sv")),
    t: translations[lang],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
