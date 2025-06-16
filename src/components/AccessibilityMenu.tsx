import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";

export function AccessibilityMenu() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div
      className="d-flex gap-2 p-2 shadow"
      style={{
        position: "fixed",
        top: 10,
        right: 10,
        background: "#f8f9fa",
        borderRadius: "8px",
        zIndex: 999,
      }}
    >
      <button onClick={toggleTheme} className="btn btn-outline-dark btn-sm">
        Tema: {theme === "ligth" ? "Claro" : "Escuro"}
      </button>
      <button onClick={toggleLanguage} className="btn btn-outline-primary btn-sm">
        Idioma: {language === "pt" ? "PT-BR" : "EN-US"}
      </button>
    </div>
  );
}
