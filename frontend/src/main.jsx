import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import "bootstrap-icons/font/bootstrap-icons.css";

import "./index.css";
import "./styles/globals.css";
import "./styles/variables.css";
import "./styles/navbar.css";
import "./styles/responsive.css"; 
import "./styles/darkmode.css";

import { ThemeProvider } from "./context/ThemeContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { CarritoProvider } from "./context/CarritoContext.jsx";
import { FavoritosProvider } from "./context/FavoritosContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <CarritoProvider>
          <FavoritosProvider>
            <App />
          </FavoritosProvider>
        </CarritoProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);