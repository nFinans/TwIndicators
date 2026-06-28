import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { TRANSLATIONS } from "@/data/i18n";

const LangContext = createContext({ lang: "tr", setLang: () => {}, t: TRANSLATIONS.tr });

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "tr";
    const saved = window.localStorage.getItem("nf_lang");
    return saved === "en" ? "en" : "tr";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("nf_lang", lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang, t: TRANSLATIONS[lang] }),
    [lang]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export const useLang = () => useContext(LangContext);
