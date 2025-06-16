import { Route, Routes } from "react-router-dom";
import { UserListView } from "../views/UserListView";
import { UserFormView } from "../views/UserFormView";
import UsersView from "../views/UsersView";


const AppRoutes = () => (


  <Routes>
    <Route path="/" element={<UserListView />}     />
    <Route path="/novo" element={<UserFormView/>} />
    <Route path="/gerenciamento/usuarios" element={<UsersView />} />
      {/* <Route path="/gerenciamento/produtos" element={<ProductsView />} /> */}
      {/* <Route path="/gerenciamento/funcionarios" element={<EmployeesView />} /> */}
  </Routes>
);

export default AppRoutes;
