import { useEffect, useState, useContext } from "react";
import { initialProducts } from "../assets/data/productsData";
import { ProductCard } from "../components/ProductCard";
import type { ProductModelInterface } from "../models/Product.Model.Interface";
import { ThemeContext } from "../context/ThemeContext";
import { ProductFormModal } from "../components/ProductFormModal";
import { useTranslation } from "../hooks/useTranslation";

export const ProductView = () => {
  const [produtos, setProdutos] = useState<ProductModelInterface[]>([]);
  const [showModal, setShowModal] = useState(false);
  const { theme } = useContext(ThemeContext);
  const t = useTranslation();

  // Carrega produtos
  useEffect(() => {
    const localData = localStorage.getItem("produtos");
    if (!localData || JSON.parse(localData).length === 0) {
      setProdutos(initialProducts);
      localStorage.setItem("produtos", JSON.stringify(initialProducts));
    } else {
      setProdutos(JSON.parse(localData));
    }
  }, []);

  // Deletar produto
  const handleDelete = (id: number) => {
    const novos = produtos.filter(p => p.id !== id);
    setProdutos(novos);
    localStorage.setItem("produtos", JSON.stringify(novos));
  };

  // Adicionar novo produto
  const handleAdd = (produto: ProductModelInterface) => {
    const novos = [...produtos, produto];
    setProdutos(novos);
    localStorage.setItem("produtos", JSON.stringify(novos));
  };

  const bgColor = theme === "dark" ? "#1e1e2f" : "#fff";
  const textColor = theme === "dark" ? "#f0f0f0" : "#000";

  return (
    <div style={{
      backgroundColor: bgColor, color: textColor,
      padding: "2rem", minHeight: "100vh"
    }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
        {t.ListaProdutos}
      </h2>

      <button
        onClick={() => setShowModal(true)}
        style={{
          marginBottom: "1rem",
          backgroundColor: "#28a745",
          color: "#fff",
          padding: "0.5rem 1rem",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        {t.AdicionarProduto}
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {produtos.map((produto) => (
          <ProductCard key={produto.id} produto={produto} onDelete={handleDelete} />
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <ProductFormModal
          onClose={() => setShowModal(false)}
          onAdd={handleAdd}
        />
      )}
    </div>
  );
};
