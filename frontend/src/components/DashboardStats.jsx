import { useEffect, useState } from "react";
import {
  FaBoxOpen,
  FaUsers,
  FaShoppingCart,
  FaDollarSign,
} from "react-icons/fa";

import axios from "axios";
import "../styles/dashboardStats.css";

function DashboardStats() {

  const [stats, setStats] = useState(null);

  useEffect(() => {

    const cargarStats = async () => {

      try {

        const res = await axios.get(
          "http://localhost:3000/api/stats"
        );

        setStats(res.data);

      } catch (error) {

        console.error("Error cargando estadísticas:", error);

      }

    };

    cargarStats();

  }, []);

  if (!stats) {

    return (

      <div className="stats-loading">

        Cargando estadísticas...

      </div>

    );

  }

  return (

    <section className="stats-container">

      <div className="stat-card">

        <div className="stat-icon blue">

          <FaBoxOpen />

        </div>

        <div className="stat-info">

          <h3>Productos</h3>

          <h2>{stats.totalProductos}</h2>

          <p>Total registrados</p>

        </div>

      </div>

      <div className="stat-card">

        <div className="stat-icon green">

          <FaUsers />

        </div>

        <div className="stat-info">

          <h3>Usuarios</h3>

          <h2>{stats.totalUsuarios}</h2>

          <p>Usuarios activos</p>

        </div>

      </div>

      <div className="stat-card">

        <div className="stat-icon orange">

          <FaShoppingCart />

        </div>

        <div className="stat-info">

          <h3>Compras</h3>

          <h2>{stats.totalCompras}</h2>

          <p>Pedidos realizados</p>

        </div>

      </div>

      <div className="stat-card">

        <div className="stat-icon purple">

          <FaDollarSign />

        </div>

        <div className="stat-info">

          <h3>Ventas</h3>

          <h2>

            ${Number(stats.ventas).toLocaleString()}

          </h2>

          <p>Total vendido</p>

        </div>

      </div>

    </section>

  );

}

export default DashboardStats;