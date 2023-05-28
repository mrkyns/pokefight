import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import DataContextProvider from "./context/DataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </BrowserRouter>
);
