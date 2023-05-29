import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import DataContextProvider from "./context/DataContext";
import ThemeContextProvider from "./context/ThemeContext";
import FightContextProvider from "./context/FightContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeContextProvider>
      <DataContextProvider>
        <FightContextProvider>
          <App />
        </FightContextProvider>
      </DataContextProvider>
    </ThemeContextProvider>
  </BrowserRouter>
);
