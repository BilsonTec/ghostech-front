// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import App from "./App";
import Accueil from "./pages/Accueil";
import Programme from "./pages/Programme";
import Inscrire from "./pages/Inscrire";
import Harding from "./pages/Harding";
import Bilson from "./pages/Bilson";


import "./index.css";
import DashboardInscrits from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Accueil /> },
      { path: "programme", element: <Programme /> },
      { path: "inscrire", element: <Inscrire /> },
      { path: "Harding", element: <Harding /> },
      {path : "Bilson", element: <Bilson />},
      {path: "dashboard", element: <DashboardInscrits /> }

    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
