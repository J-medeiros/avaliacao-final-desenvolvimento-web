/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";

type Language = "pt" | "en";
type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: "pt",
  toggleLanguage: () => {},
});

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; path=/; max-age=31536000`; // 1 ano
}

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<Language>(
    () => (getCookie("lang") as Language) || "pt"
  );

  const toggleLanguage = () => {
    const newLang: Language = language === "pt" ? "en" : "pt";
    setLanguage(newLang);
    setCookie("lang", newLang);
  };

  useEffect(() => {
    setCookie("lang", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
