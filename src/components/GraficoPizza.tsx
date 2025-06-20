import React, { useContext } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { ThemeContext } from "../context/ThemeContext";
import { useTranslation } from "../hooks/useTranslation";

interface PieChartViewProps {
  pieData: { name: string; value: number }[];
  cores: string[];
  gerarRelatorio: () => void;
}

const GraficoPizza: React.FC<PieChartViewProps> = ({
  pieData,
  cores,
  gerarRelatorio,
}) => {
  const { theme } = useContext(ThemeContext);
  const t = useTranslation();

  const bgColor = theme === "dark" ? "#1e1e2f" : "#ffffff";
  const textColor = theme === "dark" ? "#f0f0f0" : "#1a1a1a";
  const borderColor = theme === "dark" ? "#333" : "#ccc";

  return (
    <section
      id="grafico-pizza"
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
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: "600",
          marginBottom: "1.5rem",
        }}
      >
        {t.TituloGaficoPizza}
      </h3>

      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
          padding: "1.25rem 0",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {pieData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={cores[index % cores.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div
        style={{
          marginTop: "1.5rem",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
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
          {t.GerarRelatorioPDF}
        </button>
      </div>
    </section>
  );
};

export default GraficoPizza;
