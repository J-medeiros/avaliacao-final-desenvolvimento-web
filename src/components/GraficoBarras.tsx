import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ThemeContext } from "../context/ThemeContext";

interface BarGraphViewProps {
  barData: { name: string; Quantidade: number; Preco: number }[];
  gerarRelatorio: () => void;
}

const GraficoBarras: React.FC<BarGraphViewProps> = ({
  barData,
  gerarRelatorio,
}) => {
  const { theme } = useContext(ThemeContext);

  const bgColor = theme === "dark" ? "#1e1e2f" : "#ffffff";
  const textColor = theme === "dark" ? "#f0f0f0" : "#1a1a1a";
  const borderColor = theme === "dark" ? "#333" : "#ccc";

  return (
    <section id="grafico-barras"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        border: `1px solid ${borderColor}`,
        borderRadius: "12px",
        padding: "1.5rem",
        marginBottom: "2.5rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "1.5rem" }}>
        Comparativo Preço x Quantidade (Gráfico de Barras)
      </h3>

      <div style={{ display: "flex", gap: "2rem", justifyContent: "center", alignItems: "center", padding: "1.25rem 0" }}>
        <div style={{ width: "50%", height: "300px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="bottom" />
              <Bar dataKey="Quantidade" fill="#8884d8" />
              <Bar dataKey="Preco" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "flex-start" }}>
        <button
          onClick={gerarRelatorio}
          style={{
            backgroundColor: "#28a745",
            color: "#fff",
            padding: "0.5rem 1.5rem",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Gerar Relatório PDF
        </button>
      </div>
    </section>
  );
};

export default GraficoBarras;
