import { Routes, Route, Navigate } from "react-router-dom";

/* Layouts */
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

/* Pages */
import Login from "../pages/auth/Login";
import RoleList from "../pages/userRole/RoleList";
import CreateRole from "../pages/userRole/CreateRole";
import CreateUser from "../pages/userRole/CreateUser";
import CreateAppointment from "../pages/appointments/CreateAppoinment";

const AppRoutes = () => {
  return (
    <Routes>
      {/* AUTH ROUTES */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>

      {/* DASHBOARD ROUTES */}
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Navigate to="/roles" />} />

        {/* USER ROLE */}
        <Route path="/roles" element={<RoleList />} />
        <Route path="/roles/create" element={<CreateRole />} />
        <Route path="/users/create" element={<CreateUser />} />

        {/* APPOINTMENTS */}
        <Route
          path="/appointments"
          element={<CreateAppointment />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
