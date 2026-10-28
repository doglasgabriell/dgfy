import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import Home from "./pages/Home";
import Login from "./pages/Login";
import ErrorPage from "./routes/ErrorPage";


// Import do react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// função browserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
