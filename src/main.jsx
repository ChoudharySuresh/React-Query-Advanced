import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Products from "./Paginated.jsx";
import Parallel from "./Parallel.jsx";
import Optimistic from "./Optimistic.jsx";
import Dependant from "./Dependant.jsx";

export const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "paginated",
    element: <Products />,
  },
  {
    path: "parallel",
    element: <Parallel />,
  },
  {
    path: "optimistic",
    element: <Optimistic />,
  },
  {
    path: "dependant",
    element: <Dependant />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
