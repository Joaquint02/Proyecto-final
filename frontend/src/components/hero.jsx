import { Link } from "react-router-dom";
import "../styles/hero.css";
function Hero() {
  return (
    <section className="hero">

      <div className="hero-text">

        <span className="hero-tag">
          🚀 Tecnología de última generación
        </span>

        <h1>
          Tecnología que impulsa tus ideas
        </h1>

        <p>
          En TechNova encontrá notebooks, componentes,
          periféricos y accesorios de las mejores marcas,
          con garantía oficial y envíos a todo el país.
        </p>

        <div className="hero-buttons">

          <Link to="/tienda" className="btn-primary">
            Comprar ahora
          </Link>

          <Link to="/tienda" className="btn-outline">
            Ver catálogo
          </Link>

        </div>

      </div>

      <div className="hero-image">

        <img
          src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900"
          alt="Laptop"
        />

      </div>

    </section>
  );
}

export default Hero;