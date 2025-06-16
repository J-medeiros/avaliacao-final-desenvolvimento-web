import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../services/UserService";
import { useTranslation } from "../hooks/useTranslation";

export function UserFormView() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const t = useTranslation();

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      addUser(name);
      navigate("/");
    },
    [name, navigate]
  );

  return (
    <div className="container py-4">
      <h1 className="mb-4">{t.titleForm}</h1>

      <form onSubmit={handleSubmit} className="mb-3">
        <div className="mb-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder={t.inputPlaceholder}
            required
          />
        </div>

        <div className="container py-2">
          <button type="submit" className="btn btn-success me-2">
            {t.submitButton}
          </button>
          <button className="btn btn-secondary" onClick={() => navigate("/")}>
            Voltar
          </button>
        </div>
      </form>
    </div>
  );
}
