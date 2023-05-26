import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Pokedex from "./components/Pokedex";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pokedex",
    element: <Pokedex />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="bg-pattern bg-auto bg-repeat bg-black min-h-screen font-pokefont text-white">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
