import {
  FaArrowTrendUp,
  FaArrowTrendDown,
  FaBoxOpen,
  FaDollarSign,
} from "react-icons/fa6";

import "../styles/quickStats.css";

function QuickStats() {

  return (

    <section className="quick-stats">

      <div className="quick-card success">

        <FaArrowTrendUp />

        <div>

          <h4>Ventas hoy</h4>

          <h2>$1.250</h2>

          <span>+18%</span>

        </div>

      </div>

      <div className="quick-card warning">

        <FaBoxOpen />

        <div>

          <h4>Stock bajo</h4>

          <h2>3</h2>

          <span>Revisar</span>

        </div>

      </div>

      <div className="quick-card info">

        <FaDollarSign />

        <div>

          <h4>Promedio venta</h4>

          <h2>$700</h2>

          <span>Este mes</span>

        </div>

      </div>

    </section>

  );

}

export default QuickStats;