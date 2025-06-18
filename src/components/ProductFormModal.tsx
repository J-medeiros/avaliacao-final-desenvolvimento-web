import React, { useState } from "react";
import { type ProductModelInterface } from "../models/Product.Model.Interface";
import { useTranslation } from "../hooks/useTranslation";

interface Props {
  onClose: () => void;
  onAdd: (produto: ProductModelInterface) => void;
}

export const ProductFormModal: React.FC<Props> = ({ onClose, onAdd }) => {
  const t = useTranslation();
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "/assets/images/default-product.png",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const novoProduto: ProductModelInterface = {
      id: Date.now(),
      name: form.name,
      description: form.description,
      price: parseFloat(form.price),
      image: form.image,
      stock: 0,
    };
    onAdd(novoProduto);
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999,
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: "20px",
          width: "350px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        }}
      >
        <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
          {t.NovoProduto}
        </h3>

        <input
          name="name"
          type="text"
          placeholder={t.inputPlaceholder}
          onChange={handleChange}
          required
          style={{
            padding: "0.75rem",
            borderRadius: "12px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "1rem",
          }}
        />
        <input
          name="description"
          type="text"
          placeholder={t.descriptionPlaceholder}
          onChange={handleChange}
          required
          style={{
            padding: "0.75rem",
            borderRadius: "12px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "1rem",
          }}
        />
        <input
          name="price"
          type="number"
          placeholder= {t.pricePlaceholder}
          onChange={handleChange}
          required
          style={{
            padding: "0.75rem",
            borderRadius: "12px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "1rem",
          }}
        />
        <input
          name="image"
          type="text"
          placeholder={t.imagePlaceholder}
          onChange={handleChange}
          style={{
            padding: "0.75rem",
            borderRadius: "12px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "1rem",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <button
            type="button"
            onClick={onClose}
            style={{
              background: "#f0f0f0",
              border: "none",
              padding: "0.6rem 1rem",
              borderRadius: "12px",
              cursor: "pointer",
            }}
          >
            {t.Cancelar}
          </button>
          <button
            type="submit"
            style={{
              background: "#007bff",
              color: "#fff",
              border: "none",
              padding: "0.6rem 1.2rem",
              borderRadius: "12px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {t.Salvar}
          </button>
        </div>
      </form>
    </div>
  );
};
