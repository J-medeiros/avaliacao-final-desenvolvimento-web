import { Route, Routes } from "react-router-dom";
import { UserListView } from "../views/UserListView";
import { UserFormView } from "../views/UserFormView";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<UserListView />}     />
    <Route path="/novo" element={<UserFormView/>} />
  </Routes>
);

export default AppRoutes;
