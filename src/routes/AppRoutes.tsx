import { Route, Routes } from "react-router-dom";
import { UserFormView } from "../views/UserFormView";
import UsersView from "../views/UsersView";
import { ProductView } from "../views/ProductView";
import EmployeesView from "../components/EmployeesView";
import DashboardSalesView from "../views/DashboardSalesView";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<DashboardSalesView />} />
    <Route path="/dashboard" element={<DashboardSalesView />} />
    <Route path="/novo" element={<UserFormView />} />
    <Route path="/gerenciamento/usuarios" element={<UsersView />} />
    <Route path="/gerenciamento/produtos" element={<ProductView />} />
    <Route path="/gerenciamento/funcionarios" element={<EmployeesView />} />
  </Routes>
);

export default AppRoutes;
