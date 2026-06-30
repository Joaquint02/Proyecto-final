import { Link } from "react-router-dom";
import "../styles/bannerSale.css";

function BannerSale() {
  return (
    <section className="banner-sale">

      <div className="banner-content">

        <span className="sale-tag">
          🔥 HOT SALE
        </span>

        <h2>
          Hasta 30% OFF
        </h2>

        <p>
          Aprovechá nuestras ofertas en notebooks,
          monitores y accesorios seleccionados.
        </p>

        <Link
          to="/tienda"
          className="sale-button"
        >
          Comprar ahora
        </Link>

      </div>

    </section>
  );
}

export default BannerSale;