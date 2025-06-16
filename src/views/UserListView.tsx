import { useEffect, useMemo, useState } from "react";
import { getUsers } from "../services/UserService";
import { Link } from "react-router-dom";
import { useTranslation } from "../hooks/useTranslation";

export function UserListView() {
  const [users, setUsers] = useState<string[]>([]);
  const t = useTranslation();

  useEffect(() => {
    setUsers(getUsers());
  }, []);

  const userList = useMemo(() => {
    return users.map((user, index) => (
      <li className="list-group-item" key={index}>
        {user}
      </li>
    ));
  }, [users]);

  return (
    <div className="container py-4">
      <h1 className="mb-4">{t.titleList}</h1>

      <ul className="list-group mb-4">{userList}</ul>

      <Link to="/novo" className="btn btn-primary">
        {t.newUser}
      </Link>
    </div>
  );
}
