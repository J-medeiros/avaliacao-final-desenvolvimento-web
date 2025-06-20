/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";

import salesFiction from "../assets/data/SalesData";
import { type VendaModelInterface } from "../models/Sales.Model.Interface";

import GraficoPizza from "../components/GraficoPizza";
import GraficoBarras from "../components/GraficoBarras";
import { svgToPngBase64 } from "../utils/svgToPngBase64";

const DashboardSalesView: React.FC = () => {
  const [vendas] = useState<VendaModelInterface[]>(salesFiction);

  const cores = ["#4CAF50", "#FF9800", "#2196F3", "#E91E63", "#9C27B0"];

  const dadosPorProduto = vendas.reduce((acc: any, venda) => {
    acc[venda.produto] = (acc[venda.produto] || 0) + venda.quantidade;
    return acc;
  }, {});

  const pieData = Object.entries(dadosPorProduto).map(
    ([produto, quantidade]) => ({
      name: produto,
      value: quantidade as number,
    })
  );

  const barData = vendas.map((v) => ({
    name: v.produto,
    Quantidade: v.quantidade,
    Preco: v.preco,
  }));

  const gerarRelatorioPDF = async (tipo: "pizza" | "coluna") => {
  const doc = new jsPDF();
  const chartId = tipo === "pizza" ? "grafico-pizza" : "grafico-barras";
  const chartElement = document.getElementById(chartId);
  const svg = chartElement?.querySelector("svg") as SVGSVGElement;

  if (!svg) {
    console.error("SVG do gráfico não encontrado");
    return;
  }

  try {
    const imgData = await svgToPngBase64(svg);

    doc.text(
      tipo === "pizza"
        ? "Relatório - Gráfico de Pizza"
        : "Relatório - Gráfico de Colunas",
      14,
      15
    );

    // Adiciona imagem do gráfico
    doc.addImage(imgData, "PNG", 14, 20, 180, 100);

    // Tabela
    const startY = 130;
    if (tipo === "pizza") {
      autoTable(doc, {
        startY,
        head: [["Produto", "Quantidade Vendida"]],
        body: pieData.map((p) => [p.name, p.value]),
      });
    } else {
      autoTable(doc, {
        startY,
        head: [["Produto", "Quantidade", "Preço Unitário"]],
        body: barData.map((b) => [
          b.name,
          b.Quantidade,
          `R$ ${b.Preco.toFixed(2)}`,
        ]),
      });
    }

    doc.save(`grafico-${tipo}.pdf`);
  } catch (error) {
    console.error("Erro ao gerar imagem do gráfico:", error);
  }
};


  return (
    <div className="p-6 md:ml-64 mr-6 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <GraficoPizza
        pieData={pieData}
        cores={cores}
        gerarRelatorio={() => gerarRelatorioPDF("pizza")}
      />

      <GraficoBarras
        barData={barData}
        gerarRelatorio={() => gerarRelatorioPDF("coluna")}
      />
    </div>
  );
};

export default DashboardSalesView;
