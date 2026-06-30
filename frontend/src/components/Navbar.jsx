import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useCarrito } from "../context/CarritoContext";
import { useAuth } from "../context/AuthContext";

import {
  FaMoon,
  FaSun,
  FaShoppingCart,
  FaUserCircle,
  FaLaptop,
  FaSignOutAlt,
} from "react-icons/fa";

function Navbar() {
  const { carrito } = useCarrito();
  const { usuario, logout } = useAuth();
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const cantidad = carrito.reduce(
    (acc, item) => acc + item.cantidad,
    0
  );

  return (
    <header className="navbar">

      <div className="navbar-container">

        <Link className="logo" to="/">
          <FaLaptop className="logo-icon" />
          <div>
            <h2>TechNova</h2>
            <span>Tecnología que impulsa tus ideas</span>
          </div>
        </Link>

        <nav className="menu">

          <Link to="/">Inicio</Link>

          <Link to="/tienda">Productos</Link>

          {usuario?.rol === "admin" && (
            <Link to="/administracion">
              Administración
            </Link>
          )}

          {usuario && (
            <Link to="/mis-compras">
              Mis Compras
            </Link>
          )}

        </nav>

        <div className="navbar-actions">

          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <Link className="cart-btn" to="/carrito">

            <FaShoppingCart />

            {cantidad > 0 && (
              <span className="cart-count">
                {cantidad}
              </span>
            )}

          </Link>

          {usuario ? (
            <>
              <Link className="user-btn" to="/perfil">
                <FaUserCircle />
                <span>{usuario.username}</span>
              </Link>

              <button
                className="logout-btn"
                onClick={logout}
              >
                <FaSignOutAlt />
                <span>Salir</span>
              </button>
            </>
          ) : (
            <Link className="login-btn" to="/login">
              Ingresar
            </Link>
          )}

        </div>

      </div>

    </header>
  );
}

export default Navbar;