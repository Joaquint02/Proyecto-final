import {
  FaArrowTrendUp,
  FaMoneyBillTrendUp,
  FaUsers,
  FaBoxOpen,
} from "react-icons/fa6";

import "../styles/summaryCards.css";

function SummaryCards() {

  const cards = [

    {
      titulo: "Ingresos del mes",
      valor: "$ 45.200",
      icono: <FaMoneyBillTrendUp />,
      color: "green",
    },

    {
      titulo: "Clientes",
      valor: "128",
      icono: <FaUsers />,
      color: "blue",
    },

    {
      titulo: "Productos",
      valor: "35",
      icono: <FaBoxOpen />,
      color: "orange",
    },

    {
      titulo: "Crecimiento",
      valor: "+18%",
      icono: <FaArrowTrendUp />,
      color: "purple",
    },

  ];

  return (

    <section className="summary-grid">

      {

        cards.map((card, index) => (

          <div
            key={index}
            className={`summary-card ${card.color}`}
          >

            <div>

              <h4>

                {card.titulo}

              </h4>

              <h2>

                {card.valor}

              </h2>

            </div>

            <div className="summary-icon">

              {card.icono}

            </div>

          </div>

        ))

      }

    </section>

  );

}

export default SummaryCards;