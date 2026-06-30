import {
  FaUserPlus,
  FaShoppingCart,
  FaBoxOpen,
  FaSyncAlt,
} from "react-icons/fa";

import "../styles/recentActivity.css";

function RecentActivity() {

  const actividades = [

    {
      icono: <FaUserPlus />,
      texto: "Nuevo usuario registrado",
      tiempo: "Hace 5 minutos",
    },

    {
      icono: <FaShoppingCart />,
      texto: "Nueva compra realizada",
      tiempo: "Hace 20 minutos",
    },

    {
      icono: <FaBoxOpen />,
      texto: "Producto agregado al catálogo",
      tiempo: "Hace 1 hora",
    },

    {
      icono: <FaSyncAlt />,
      texto: "Stock actualizado",
      tiempo: "Hace 2 horas",
    },

  ];

  return (

    <section className="activity-card">

      <h2>

        🕒 Actividad Reciente

      </h2>

      {

        actividades.map((item, index) => (

          <div
            key={index}
            className="activity-item"
          >

            <div className="activity-icon">

              {item.icono}

            </div>

            <div>

              <strong>

                {item.texto}

              </strong>

              <p>

                {item.tiempo}

              </p>

            </div>

          </div>

        ))

      }

    </section>

  );

}

export default RecentActivity;