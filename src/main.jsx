// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Accueil from "./pages/Accueil";
import Programme from "./pages/Programme";
import Contact from "./pages/Contact";
import Inscrire from "./pages/Inscrire";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Accueil /> },
      { path: "programme", element: <Programme /> },
      { path: "inscrire", element: <Inscrire /> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
