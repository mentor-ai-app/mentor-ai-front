import RegisterPage from "@/pages/auth/register-page";
import { ProtectedRoutes } from "@/shared/auth";
import { AuthLayout } from "@/shared/components/layout/auth-layout";
import { routes } from "@/shared/navigation";
import { lazy } from "react";
import { createBrowserRouter } from "react-router";

const HomePage = lazy(() => import("@/pages/home-page"));
const LoginPage = lazy(() => import("@/pages/auth/login-page"));

export const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: routes.home,
        element: <HomePage />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: routes.login,
        element: <LoginPage />,
      },
      {
        path: routes.register,
        element: <RegisterPage />,
      },
    ],
  },
]);
