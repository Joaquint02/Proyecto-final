import { useEffect, useState } from "react";
import axios from "axios";

function DashboardStats() {

  const [stats, setStats] =
    useState(null);

  useEffect(() => {

    const cargarStats =
      async () => {

      try {

        const res =
          await axios.get(
            "http://localhost:3000/api/stats"
          );

        setStats(res.data);

      } catch (error) {

        console.error(error);

      }

    };

    cargarStats();

  }, []);

  if (!stats) {

    return <h2>Cargando estadísticas...</h2>;

  }

  return (

    <div className="stats-container">

      <div className="stat-card">

        <h3>📦 Productos</h3>

        <h2>
          {stats.totalProductos}
        </h2>

      </div>

      <div className="stat-card">

        <h3>👥 Usuarios</h3>

        <h2>
          {stats.totalUsuarios}
        </h2>

      </div>

      <div className="stat-card">

        <h3>🛒 Compras</h3>

        <h2>
          {stats.totalCompras}
        </h2>

      </div>

      <div className="stat-card">

        <h3>💰 Ventas</h3>

        <h2>
          ${stats.ventas}
        </h2>

      </div>

    </div>

  );

}

export default DashboardStats;