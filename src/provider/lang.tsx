import React, { createContext, useContext, useState } from "react";

type Lang = "en" | "fr";

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) throw new Error("useLang must be used within a LangProvider");
  return context;
};

export default function LangProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("lang") as Lang) || "en";
    }
    return "en";
  });

  const toggleLang = () => {
    const next: Lang = lang === "en" ? "fr" : "en";
    setLang(next);
    if (typeof window !== "undefined") localStorage.setItem("lang", next);
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}
