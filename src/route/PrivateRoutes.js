import { Navigate, Outlet } from "react-router-dom";

import TasksComponent from "../components/Tareas/TasksComponent";
import { useAuth } from "../provider/AuthProvide";

export const PrivateRoutes = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;
  return <Outlet />;
};
