import React, { useState, useContext } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { type VendaModelInterface } from "../models/Sales.Model.Interface";
import salesFiction from "../assets/data/SalesData";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { ThemeContext } from "../context/ThemeContext";

const DashboardSalesView: React.FC = () => {
  const { theme } = useContext(ThemeContext);
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

  const gerarRelatorioPDF = (tipo: "pizza" | "coluna") => {
    const doc = new jsPDF();
    if (tipo === "pizza") {
      doc.text("Relatório - Gráfico de Pizza", 14, 15);
      autoTable(doc, {
        startY: 20,
        head: [["Produto", "Quantidade Vendida"]],
        body: pieData.map((p) => [p.name, p.value]),
      });
    } else {
      doc.text("Relatório - Gráfico de Colunas", 14, 15);
      autoTable(doc, {
        startY: 20,
        head: [["Produto", "Quantidade", "Preço Unitário"]],
        body: barData.map((b) => [
          b.name,
          b.Quantidade,
          `R$ ${b.Preco.toFixed(2)}`,
        ]),
      });
    }
    doc.save(`grafico-${tipo}.pdf`);
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mb-10">
        <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
          Produtos Vendidos (Gráfico de Pizza)
        </h3>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-5">
          {/* Gráfico */}
          <div
            className="md:w-1/2 flex justify-center items-center"
            style={{ height: 300 }}
          >
            <ResponsiveContainer width="50%" height="100%">
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

          {/* Texto Descritivo */}
          <div className="w-full md:w-1/2 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            <p className="font-semibold mb-2">O que este gráfico mostra?</p>
            <p>
              Este gráfico mostra, de forma visual, a participação de cada
              produto nas vendas totais. Cada “fatia” representa a quantidade
              vendida.
            </p>
            <p className="mt-2">
              Isso ajuda a identificar os produtos mais populares e aqueles que
              precisam de mais atenção.
            </p>
          </div>
        </div>

        {/* Botão PDF */}
        <div className="mt-6 flex justify-start">
          <button
            onClick={() => gerarRelatorioPDF("pizza")}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded transition"
          >
            Gerar Relatório PDF
          </button>
        </div>
      </section>

      <div className="p-6 md:ml-64 mr-6 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
        {/* GRÁFICO DE BARRAS */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mb-10">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            Comparativo Preço x Quantidade (Gráfico de Barras)
          </h3>

          <div className="flex flex-row md:flex-row justify-center items-center gap-8 p-5">
            {/* Gráfico */}
            <div
              className="md:w-1/2 flex justify-center items-center"
              style={{ height: 300 }}
            >
              <ResponsiveContainer width="50%" height="100%">
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

            {/* Descrição */}
            <div className="md:w-1/2 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              <p className="font-semibold mb-2">O que este gráfico mostra?</p>
              <p>
                Aqui comparamos duas informações de cada produto: o preço e a
                quantidade vendida.
              </p>
              <p className="mt-2">
                As barras roxas representam a quantidade vendida, enquanto as
                verdes mostram o preço unitário.
              </p>
              <p className="mt-2">
                Essa informação é útil para decidir quais produtos promover,
                ajustar preços e planejar estoque.
              </p>
            </div>
          </div>

          {/* Botão */}
          <div className="mt-6 flex justify-start">
            <button
              onClick={() => gerarRelatorioPDF("coluna")}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded transition"
            >
              Gerar Relatório PDF
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default DashboardSalesView;
