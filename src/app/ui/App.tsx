import { RouterProvider } from "react-router";
import { router } from "../model";
import { queryClient } from "@/shared/http";
import { QueryClientProvider } from "@tanstack/react-query";

import "./index.css";

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
