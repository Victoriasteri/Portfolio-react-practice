import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
