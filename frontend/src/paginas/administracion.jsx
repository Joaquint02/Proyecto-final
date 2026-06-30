import { useState, useEffect, useRef } from "react";

import {
  FaChartPie,
  FaBoxOpen,
  FaUsers,
  FaShoppingCart,
  FaChartLine,
  FaSignOutAlt,
} from "react-icons/fa";

import SummaryCards from "../components/SummaryCards";
import DashboardStats from "../components/DashboardStats";
import SalesChart from "../components/SalesChart";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import UserManagement from "../components/UserManagement";
import OrdersManagement from "../components/OrdersManagement";
import RecentActivity from "../components/RecentActivity";
import QuickStats from "../components/QuickStats";
import LatestOrders from "../components/LatestOrders";

import api from "../services/api";

import "../styles/dashboard.css";

function Administracion({ logout }) {

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const dashboardRef = useRef(null);
  const productosRef = useRef(null);
  const usuariosRef = useRef(null);
  const pedidosRef = useRef(null);
  const reportesRef = useRef(null);

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {

    try {

      const res = await api.get("/");

      setProducts(res.data);

    } catch (error) {

      console.error(error);

    }

  };

  const scrollTo = (ref) => {

    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  };

  return (

    <div className="dashboard">

      <aside className="sidebar">

        <h2>⚡ TechNova</h2>

        <ul>

          <li onClick={() => scrollTo(dashboardRef)}>
            <FaChartPie />
            Dashboard
          </li>

          <li onClick={() => scrollTo(productosRef)}>
            <FaBoxOpen />
            Productos
          </li>

          <li onClick={() => scrollTo(usuariosRef)}>
            <FaUsers />
            Usuarios
          </li>

          <li onClick={() => scrollTo(pedidosRef)}>
            <FaShoppingCart />
            Pedidos
          </li>

          <li onClick={() => scrollTo(reportesRef)}>
            <FaChartLine />
            Reportes
          </li>

        </ul>

        <button
          className="logout-btn"
          onClick={logout}
        >

          <FaSignOutAlt />

          Cerrar sesión

        </button>

      </aside>

      <main className="dashboard-main">

        <header className="dashboard-header">

          <div>

            <h1>Dashboard TechNova</h1>

            <p>

              Administración completa del sistema

            </p>

          </div>

          <div className="admin-info">

            <div className="admin-avatar">

              A

            </div>

            <div>

              <strong>

                Administrador

              </strong>

              <p>

                admin@technova.com

              </p>

            </div>

          </div>

        </header>

        <section ref={dashboardRef}>

          <SummaryCards />

          <QuickStats />

          <DashboardStats />

          <SalesChart />

        </section>

        <section ref={pedidosRef}>

          <OrdersManagement />

          <LatestOrders />

        </section>

        <div className="dashboard-grid">

          <div
            className="left-column"
            ref={productosRef}
          >

            <ProductForm
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
              setProducts={setProducts}
            />

            <RecentActivity />

          </div>

          <div
            className="right-column"
            ref={usuariosRef}
          >

            <UserManagement />

          </div>

        </div>

        <div
          className="table-section"
          ref={reportesRef}
        >

          <ProductList
            products={products}
            setProducts={setProducts}
            setSelectedProduct={setSelectedProduct}
          />

        </div>

      </main>

    </div>

  );

}

export default Administracion;