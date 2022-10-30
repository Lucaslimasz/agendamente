import { Navigate, Outlet } from "react-router-dom";
import { useAuthGoogle } from "../hooks/useAuthGoogle"

export const PrivateRoutes = () => {
  const {signed} = useAuthGoogle();

  return signed ? <Outlet /> : <Navigate to='/' />;
}