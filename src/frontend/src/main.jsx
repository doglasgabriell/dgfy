import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import Login from "./pages/Logins/Login.jsx";
import ErrorPage from "./routes/ErrorPage";

// Import do react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Logins/Register.jsx";
import AppLogged from "./AppLogged.jsx";

// função browserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home-page",
    element: <AppLogged />,
    children: [{}],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
