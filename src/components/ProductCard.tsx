import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useTranslation } from "../hooks/useTranslation";
import { type ProductModelInterface } from "../models/Product.Model.Interface";

interface Props {
  produto: ProductModelInterface;
  onDelete: (id: number) => void;
}

export const ProductCard: React.FC<Props> = ({ produto, onDelete }) => {
  const { theme } = useContext(ThemeContext);
  const t = useTranslation();

  const bgColor = theme === "dark" ? "#1e1e2f" : "#ffffff";
  const textColor = theme === "dark" ? "#f0f0f0" : "#000000";
  const borderColor = theme === "dark" ? "#333" : "#ddd";

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: textColor,
        border: `1px solid ${borderColor}`,
        borderRadius: "12px",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={produto.image}
        alt={produto.name}
        style={{
          width: "100%",
          height: "130px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "0.5rem",
        }}
      />

      <h3 style={{ fontSize: "1.125rem", fontWeight: "bold" }}>{produto.name}</h3>
      <p style={{ fontSize: "0.875rem", marginBottom: "0.5rem" }}>{produto.description}</p>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ color: theme === "dark" ? "#90ee90" : "#228B22", fontWeight: "bold" }}>
          {t.R$} {produto.price.toFixed(2)}
        </span>

        <button
          onClick={() => onDelete(produto.id)}
          style={{
            backgroundColor: "#dc3545",
            color: "#fff",
            padding: "0.25rem 0.75rem",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          {t.Excluir}
        </button>
      </div>
    </div>
  );
};
