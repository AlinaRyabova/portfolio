"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { DATA } from "@/lib/data";

type Language = "en" | "uk";

type Content = typeof DATA.en;

interface LanguageContextType {
  language: Language;
  content: Content;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const value = {
    language,
    content: DATA[language],
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
