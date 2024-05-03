import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/index.css";
import "./style/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/AboutPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import WorksPage from "./pages/WorksPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "about",
    element: <AboutPage />,
  },

  {
    path: "services",
    element: <ServicesPage />,
  },

  {
    path: "works",
    element: <WorksPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
