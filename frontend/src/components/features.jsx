import {
  FaShippingFast,
  FaShieldAlt,
  FaHeadset,
  FaCreditCard,
} from "react-icons/fa";

import "../styles/features.css";

function Features() {
  const datos = [
    {
      icono: <FaShippingFast />,
      titulo: "Envíos rápidos",
      texto: "Entregas en todo el país en tiempo récord.",
    },
    {
      icono: <FaShieldAlt />,
      titulo: "Garantía Oficial",
      texto: "Todos nuestros productos cuentan con garantía.",
    },
    {
      icono: <FaHeadset />,
      titulo: "Soporte Técnico",
      texto: "Asistencia personalizada antes y después de la compra.",
    },
    {
      icono: <FaCreditCard />,
      titulo: "Pagos Seguros",
      texto: "Aceptamos tarjetas, transferencias y cuotas.",
    },
  ];

  return (
    <section className="features">

      <div className="section-title">
        <h2>¿Por qué elegir TechNova?</h2>
        <p>
          Miles de clientes confían en nosotros para equipar
          su hogar, oficina y espacio de estudio.
        </p>
      </div>

      <div className="features-grid">

        {datos.map((item, index) => (

          <div
            className="feature-card"
            key={index}
          >
            <div className="feature-icon">
              {item.icono}
            </div>

            <h3>{item.titulo}</h3>

            <p>{item.texto}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Features;