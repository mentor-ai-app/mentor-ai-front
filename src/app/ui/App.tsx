import { RouterProvider } from "react-router";
import "./index.css";
import { router } from "../model";

export const App = () => {
  return <RouterProvider router={router} />;
};
