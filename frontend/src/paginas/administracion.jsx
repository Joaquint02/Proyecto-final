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

      <section className="dashboard-content">

        <DashboardStats />

        <UserManagement />

        <OrdersManagement />

        <ProductForm
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          setProducts={setProducts}
        />

        <ProductList
          products={products}
          setProducts={setProducts}
          setSelectedProduct={setSelectedProduct}
        />

      </section>

    </div>

  );

}

export default Administracion;