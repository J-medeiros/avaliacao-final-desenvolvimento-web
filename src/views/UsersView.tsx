import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useTranslation } from "../hooks/useTranslation";
import { FaTrash, FaEye } from "react-icons/fa";

interface Usuario {
  id: number;
  nome: string;
  email: string;
  cpfCnpj: string;
}

const UsuariosView: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const t = useTranslation();
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    // Simulação de fetch dos dados
    setUsuarios([
      { id: 1, nome: "Pietro Mateus Kauê Oliveira", email: "pietromateusoliveira@oliveiracontabil.com.br", cpfCnpj: "337.661.736-85" },
      { id: 2, nome: "Rafaela Joana Melissa Rezende", email: "rafaelajoanarezende@lctour.com.br", cpfCnpj: "555.261.640-55" },
      { id: 3, nome: "Samuel Gabriel Porto", email: "samuelgabrielporto@attglobal.net", cpfCnpj: "834.665.998-90" },
      { id: 4, nome: "Mariana Lima", email: "mariana.lima@example.com", cpfCnpj: "123.456.789-00" },
      { id: 5, nome: "Ana Silva", email: "ana.silva@example.com", cpfCnpj: "234.567.890-11" },
      { id: 6, nome: "Lucas Mendes", email: "lucas.mendes@example.com", cpfCnpj: "345.678.901-22" },
    ]);
  }, []);

  const bgColor = theme === "dark" ? "#1e1e2f" : "#fff";
  const textColor = theme === "dark" ? "#f0f0f0" : "#000";
  const borderColor = theme === "dark" ? "#333" : "#ddd";

  return (
    <div style={{ padding: "2rem", backgroundColor: bgColor, color: textColor, minHeight: "100vh" }}>
      <h3>{t.Usuarios}</h3>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
        <thead>
          <tr style={{ borderBottom: `1px solid ${borderColor}`, color: textColor, textAlign: "left" }}>
            <th style={{ padding: "0.75rem" }}><input type="checkbox" /></th>
            <th style={{ padding: "0.75rem" }}>{t.Nome}</th>
            <th style={{ padding: "0.75rem" }}>{t.Email}</th>
            <th style={{ padding: "0.75rem" }}>{t.Cpf_cnpj}</th>
            <th style={{ padding: "0.75rem" }}></th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id} style={{ borderBottom: `1px solid ${borderColor}` }}>
              <td style={{ padding: "0.75rem" }}><input type="checkbox" /></td>
              <td style={{ padding: "0.75rem" }}>{usuario.nome}</td>
              <td style={{ padding: "0.75rem" }}>{usuario.email}</td>
              <td style={{ padding: "0.75rem" }}>{usuario.cpfCnpj}</td>
              <td style={{ padding: "0.75rem", display: "flex", gap: "0.5rem" }}>
                <button className="btn btn-light btn-sm"><FaEye /></button>
                <button className="btn btn-light btn-sm"><FaTrash /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsuariosView;
