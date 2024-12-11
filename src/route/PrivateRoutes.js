import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../provider/AuthProvide";

export const PrivateRoutes = () => {
  const { token } = useAuth();

  if (!token) return <Navigate to="/login" />;
  return <Outlet />;
};
