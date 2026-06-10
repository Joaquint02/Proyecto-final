import { useEffect, useState } from "react";
import "./App.css";

import api from "./services/api";

import Login from "./components/Login";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import DashboardStats from "./components/DashboardStats";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [selectedProduct, setSelectedProduct] =
    useState(null);

  const [selectedView, setSelectedView] =
    useState(null);

  const [products, setProducts] = useState([]);

  const [isAuthenticated, setIsAuthenticated] =
    useState(
      !!localStorage.getItem("token")
    );

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await api.get("/");
      setProducts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const username =
  localStorage.getItem("username");

  if (!isAuthenticated) {
    return (
      <Login
        setIsAuthenticated={
          setIsAuthenticated
        }
      />
    );
  }

  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <h2>📦 Inventario</h2>

        <ul>
          <li>Dashboard</li>
          <li>Productos</li>
        </ul>
        <ToastContainer
  position="top-right"
  autoClose={3000}
/>

        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem("token");
            setIsAuthenticated(false);
          }}
        >
          Cerrar Sesión
        </button>
      </aside>

      <main className="main-content">
        <header className="topbar">
  <div>
    <h1>
      Sistema de Gestión de Productos
    </h1>

    <p>
      Bienvenido, <strong>{username}</strong>
    </p>
  </div>
</header>

        <DashboardStats products={products} />

        {selectedView && (
          <ProductDetail
            product={selectedView}
            setSelectedView={
              setSelectedView
            }
          />
        )}

        <div className="content">
          <ProductForm
            selectedProduct={
              selectedProduct
            }
            setSelectedProduct={
              setSelectedProduct
            }
          />

          <ProductList
            products={products}
            setProducts={setProducts}
            setSelectedProduct={
              setSelectedProduct
            }
            setSelectedView={
              setSelectedView
            }
          />
        </div>
      </main>
    </div>
  );
}

export default App;