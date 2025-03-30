import { Navigate, Outlet } from "react-router";
import { getAuthJWT } from "../lib";
import { toLogin } from "@/shared/navigation";

export const ProtectedRoutes = () => {
  if (!getAuthJWT()) {
    return <Navigate to={toLogin()} />;
  }
  return <Outlet />;
};
