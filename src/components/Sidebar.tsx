import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useTranslation } from "../hooks/useTranslation";
import {
  FaUserCog,
  FaChevronLeft,
  FaChevronDown,
  FaChevronRight,
  FaThLarge,
  FaUser,
  FaBox,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // IMPORTANTE

type SidebarProps = {
  isOpen: boolean;
  toggle: () => void;
};

export function Sidebar({ isOpen, toggle }: SidebarProps) {
  const { theme } = useContext(ThemeContext);
  const [gerenciamentoOpen, setGerenciamentoOpen] = useState(false);
  const t = useTranslation();

  const toggleGerenciamento = () => setGerenciamentoOpen(!gerenciamentoOpen);

  const bgColor = theme === "dark" ? "#1e1e2f" : "#ffffff";
  const textColor = theme === "dark" ? "#f0f0f0" : "#333";
  const mutedColor = theme === "dark" ? "#aaa" : "#777";

  return (
    <div
      style={{
        width: isOpen ? 250 : 60,
        height: "100vh",
        background: bgColor,
        color: textColor,
        transition: "width 0.3s ease",
        padding: "1rem",
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
        position: "fixed",
        top: 0,
        left: 0,
        overflowX: "hidden",
        zIndex: 1000,
      }}
    >
      <div className="d-flex align-items-center justify-content-between mb-4">
        {isOpen && (
          <h4 style={{ color: "#f8a100", margin: 0 }}>{t.nameProject}</h4>
        )}
        <button
          onClick={toggle}
          className="btn btn-light btn-sm"
          style={{
            borderRadius: "50%",
            transform: isOpen ? "rotate(0deg)" : "rotate(180deg)",
            transition: "transform 0.3s",
          }}
        >
          <FaChevronLeft />
        </button>
      </div>

      {/* Painel principal */}
      <Link to="/" style={{ textDecoration: "none", color: textColor }}>
        <div className="mb-3 d-flex align-items-center gap-2">
          <FaThLarge />
          {isOpen && <span>{t.Painel}</span>}
        </div>
      </Link>

      <div
        style={{
          color: mutedColor,
          fontSize: "0.75rem",
          marginBottom: "0.5rem",
        }}
      >
        {isOpen && <strong>{t.UTILIDADES}</strong>}
      </div>

      {/* Gerenciamento */}
      <div
        className="mb-2"
        style={{ cursor: "pointer" }}
        onClick={toggleGerenciamento}
      >
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <FaUserCog />
            {isOpen && <span>{t.Gerenciamento}</span>}
          </div>
          {isOpen && (
            <span>{gerenciamentoOpen ? <FaChevronDown /> : <FaChevronRight />}</span>
          )}
        </div>

        {gerenciamentoOpen && isOpen && (
          <div style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
            <Link to="/gerenciamento/usuarios" style={{ textDecoration: "none", color: textColor }}>
              <div className="d-flex align-items-center gap-2 mb-2">
                <FaUser />
                <span>{t.Usuarios}</span>
              </div>
            </Link>
            <Link to="/gerenciamento/produtos" style={{ textDecoration: "none", color: textColor }}>
              <div className="d-flex align-items-center gap-2 mb-2">
                <FaBox />
                <span>{t.Produtos}</span>
              </div>
            </Link>
            <Link to="/gerenciamento/funcionarios" style={{ textDecoration: "none", color: textColor }}>
              <div className="d-flex align-items-center gap-2">
                <FaUsers />
                <span>{t.Funcionarios}</span>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
