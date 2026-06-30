import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import "../styles/footer.css";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">

          <h2>⚡ TechNova</h2>

          <p>
            Tecnología que impulsa tus ideas.
            Equipos, accesorios y componentes
            de las mejores marcas.
          </p>

        </div>

        <div className="footer-section">

          <h3>Empresa</h3>

          <a href="/">Inicio</a>

          <a href="/tienda">Productos</a>

          <a href="/carrito">Carrito</a>

          <a href="/perfil">Mi Perfil</a>

        </div>

        <div className="footer-section">

          <h3>Contacto</h3>

          <p>

            <FaMapMarkerAlt />

            Montevideo, Uruguay

          </p>

          <p>

            <FaPhoneAlt />

            +598 99 999 999

          </p>

          <p>

            <FaEnvelope />

            contacto@technova.com

          </p>

        </div>

        <div className="footer-section">

          <h3>Seguinos</h3>

          <div className="social-icons">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-copy">

        © 2026 TechNova Store | Desarrollado con React + Node.js + MySQL

      </div>

    </footer>

  );

}

export default Footer;