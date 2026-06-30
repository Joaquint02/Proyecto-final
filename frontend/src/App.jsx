import { useState } from "react";
import "./App.css";
import "./styles/carrito.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Home from "./paginas/home";
import Tienda from "./paginas/tienda";
import ProductoDetalle from "./paginas/productodetalle";
import Carrito from "./paginas/carrito";
import Perfil from "./paginas/perfil";
import Administracion from "./paginas/administracion";
import Checkout from "./paginas/checkout";
import CompraExitosa from "./paginas/CompraExitosa";
import Login from "./components/Login";
import MisCompras from "./paginas/MisCompras";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("token") ? true : false
  );

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/tienda"
          element={<Tienda />}
        />

        <Route
          path="/producto/:id"
          element={<ProductoDetalle />}
        />

        <Route
          path="/carrito"
          element={<Carrito />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />

        <Route
          path="/compra-exitosa"
          element={<CompraExitosa />}
        />

        <Route
         path="/mis-compras"
        element={<MisCompras />}
         />

        <Route
          path="/perfil"
          element={<Perfil />}
        />

        <Route
          path="/login"
          element={
            <Login
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />


        <Route
            path="/administracion"
          element={
            localStorage.getItem("rol") === "admin"
              ? (
                <Administracion
                  logout={() => {

                    localStorage.removeItem("token");
                    localStorage.removeItem("rol");
                    localStorage.removeItem("usuario");
                    localStorage.removeItem("userId");
                    setIsAuthenticated(false);

                    window.location.href = "/";
                  }}
                />
              )
              : (
                <Home />
              )
          }
        />

      </Routes>

      <Footer />

      <ToastContainer />

    </BrowserRouter>

  );
}

export default App;