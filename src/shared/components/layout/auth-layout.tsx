import { Outlet } from "react-router";

export const AuthLayout = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <section className="w-full max-w-sm">
        <Outlet />
      </section>
    </div>
  );
};
