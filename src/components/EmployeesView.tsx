import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useTranslation } from "../hooks/useTranslation";
import { FaPlus, FaTrash } from "react-icons/fa";
import dataFuncionarios from "../assets/data/EmployeesData"; // arquivo base fixo
import type { FuncionarioModelInterface } from "../models/Employees.Model.Interface";

const EmployeesView: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const t = useTranslation();
  const [funcionarios, setFuncionarios] = useState<FuncionarioModelInterface[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [novoFuncionario, setNovoFuncionario] = useState<Omit<FuncionarioModelInterface, "id">>({
    nome: "",
    dataNascimento: "",
    regimeTrabalhista: "CLT",
    funcao: "",
    horario: "",
    salario: "",
    horasExtras: [""],
    foto: "",
  });

  useEffect(() => {
    // Carrega sempre do arquivo original ignorando localStorage
    setFuncionarios(
      dataFuncionarios.map(f => ({
        ...f,
        regimeTrabalhista: f.regimeTrabalhista as "CLT" | "PJ" | "Diarista"
      }))
    );
  }, []);

  const handleAdicionarFuncionario = () => {
    setFuncionarios(prev => [...prev, { ...novoFuncionario, id: Date.now() }]);
    setShowModal(false);
    setNovoFuncionario({
      nome: "",
      dataNascimento: "",
      regimeTrabalhista: "CLT",
      funcao: "",
      horario: "",
      salario: "",
      horasExtras: [""],
      foto: "",
    });
  };

  const bgColor = theme === "dark" ? "#1e1e2f" : "#fff";
  const textColor = theme === "dark" ? "#f0f0f0" : "#000";

  return (
    <div style={{ backgroundColor: bgColor, color: textColor, minHeight: "100vh", padding: "2rem" }}>
      <h2>{t.Funcionarios}</h2>
      <button onClick={() => setShowModal(true)} style={{ padding: "0.5rem 1rem", borderRadius: "10px" }}>
        <FaPlus /> {t.NovoFuncionario}
      </button>

      {/* Modal */}
      {showModal && (
        <div style={{
          position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          backgroundColor: "#fff", borderRadius: "20px", padding: "2rem", zIndex: 1000,
          width: "400px", boxShadow: "0 0 20px rgba(0,0,0,0.2)"
        }}>
          <h3>{t.AdicionarFuncionario}</h3>
          <input placeholder={t.Nome} value={novoFuncionario.nome} onChange={e => setNovoFuncionario({ ...novoFuncionario, nome: e.target.value })} style={inputStyle} />
          <input type="date" placeholder={t.Nascimento} value={novoFuncionario.dataNascimento} onChange={e => setNovoFuncionario({ ...novoFuncionario, dataNascimento: e.target.value })} style={inputStyle} />
          <select value={novoFuncionario.regimeTrabalhista} onChange={e => setNovoFuncionario({ ...novoFuncionario, regimeTrabalhista: e.target.value as "CLT" | "PJ" | "Diarista" })} style={inputStyle}>
            <option value="CLT">{t.CLT}</option>
            <option value="PJ">{t.PJ}</option>
            <option value="Diarista">{t.Diarista}</option>
          </select>
          <input placeholder={t.Funcao} value={novoFuncionario.funcao} onChange={e => setNovoFuncionario({ ...novoFuncionario, funcao: e.target.value })} style={inputStyle} />
          <input placeholder={t.Horário} value={novoFuncionario.horario} onChange={e => setNovoFuncionario({ ...novoFuncionario, horario: e.target.value })} style={inputStyle} />
          <input placeholder={t.Salario} value={novoFuncionario.salario} onChange={e => setNovoFuncionario({ ...novoFuncionario, salario: e.target.value })} style={inputStyle} />
          <input placeholder={t.Foto} value={novoFuncionario.foto} onChange={e => setNovoFuncionario({ ...novoFuncionario, foto: e.target.value })} style={inputStyle} />
          <h4>{t.HorasExtras}</h4>
          {novoFuncionario.horasExtras.map((hora, idx) => (
            <input
              key={idx}
              placeholder={`${t.HorasExtras} ${idx + 1}`}
              value={hora}
              onChange={e => {
                const novas = [...novoFuncionario.horasExtras];
                novas[idx] = e.target.value;
                setNovoFuncionario({ ...novoFuncionario, horasExtras: novas });
              }}
              style={inputStyle}
            />
          ))}
          <button onClick={() => setNovoFuncionario({ ...novoFuncionario, horasExtras: [...novoFuncionario.horasExtras, ""] })} style={inputStyle}>+ Adicionar Hora Extra</button>
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <button onClick={handleAdicionarFuncionario} style={{ backgroundColor: "blue", color: "#fff", borderRadius: "10px", padding: "0.5rem 1rem" }}>{t.Salvar}</button>
            <button onClick={() => setShowModal(false)} style={{ borderRadius: "10px", padding: "0.5rem 1rem" }}>{t.Cancelar}</button>
          </div>
        </div>
      )}

      {/* Lista */}
      <div style={{ marginTop: "2rem" }}>
        {funcionarios.map(func => (
          <div key={func.id} style={{ backgroundColor: theme === "dark" ? "#2a2a3f" : "#f9f9f9", padding: "1rem", borderRadius: "12px", marginBottom: "1rem", display: "flex", gap: "1rem" }}>
            <img src={func.foto} alt={func.nome} style={{ width: "80px", height: "80px", borderRadius: "50%" }} />
            <div>
              <h4>{func.nome}</h4>
              <p>{func.funcao} | {func.regimeTrabalhista}</p>
              <p>{t.Horário}: {func.horario}</p>
              <p>{t.Salario}: R$ {func.salario}</p>
              <p>{t.HorasExtras}: {func.horasExtras.join(", ")}</p>
            </div>
            <button style={{ marginLeft: "auto", height: "30px" }}><FaTrash /></button>
          </div>
        ))}
      </div>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  marginBottom: "0.5rem",
  padding: "0.5rem",
  borderRadius: "10px",
  border: "1px solid #ccc"
};

export default EmployeesView;
