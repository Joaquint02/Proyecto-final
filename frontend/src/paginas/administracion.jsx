import { useState, useEffect } from "react";

import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";
import DashboardStats from "../components/DashboardStats";
import UserManagement from "../components/UserManagement";
import OrdersManagement from "../components/OrdersManagement";

import api from "../services/api";

function Administracion({ logout }) {

  const [products, setProducts] = useState([]);

  const [selectedProduct, setSelectedProduct] =
    useState(null);

  const loadProducts = async () => {

    try {

      const res = await api.get("/");

      setProducts(res.data);

    } catch (error) {

      console.error(
        "Error cargando productos",
        error
      );

    }

  };

  useEffect(() => {

    loadProducts();

  }, []);

  return (

    <div className="dashboard">

      <header className="dashboard-header">

        <h1>
          Panel Administrativo
        </h1>

        <button onClick={logout}>
          Cerrar Sesión
        </button>

      </header>

      <div className="dashboard-content">

        <DashboardStats />

        <section className="admin-grid">

          <div className="admin-card">
            <UserManagement />
          </div>

          <div className="admin-card">
            <OrdersManagement />
          </div>

          <div className="admin-card">
            <ProductForm
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
              setProducts={setProducts}
            />
          </div>

        </section>

        <div className="product-table">

          <ProductList
            products={products}
            setProducts={setProducts}
            setSelectedProduct={setSelectedProduct}
          />

        </div>

      </div>

    </div>

  );

}

export default Administracion;