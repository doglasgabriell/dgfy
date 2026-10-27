import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// import de components/pages
import Login from "./pages/login.jsx";

import ErrorPage from "./routes/ErrorPage.jsx"; 

// Import do react router
import {createBrowserRouter, RouterProvider} from "react-router-dom";

// função browserRouter
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: 'login',
    element: <Login />
  }
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
