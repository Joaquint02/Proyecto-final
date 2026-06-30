import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useCarrito } from "../context/CarritoContext";
import { useFavoritos } from "../context/FavoritosContext";

import {
  FaShoppingCart,
  FaHeart,
  FaRegHeart,
  FaStar
} from "react-icons/fa";

import "../styles/cards.css";

function ProductCard({ producto }) {

  const { agregarProducto } = useCarrito();

  const { toggleFavorito, esFavorito } = useFavoritos();

  const comprar = () => {

    agregarProducto(producto);

    toast.success("Producto agregado al carrito 🛒");

  };

  return (

    <div className="product-card">

      <div className="product-image">

        <span className="discount">
          -15%
        </span>

        <button
          className="favorite-btn"
          onClick={() => toggleFavorito(producto)}
        >

          {
            esFavorito(producto.id)
              ? <FaHeart />
              : <FaRegHeart />
          }

        </button>

        <img
          src={
            producto.imagen ||
            "https://via.placeholder.com/300x250?text=TechNova"
          }
          alt={producto.nombre}
        />

      </div>

      <div className="product-info">

        <div className="rating">

          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />

        </div>

        <h3>{producto.nombre}</h3>

        <p className="description">

          {producto.descripcion
            ? producto.descripcion.substring(0, 70)
            : "Producto tecnológico de alta calidad."}

        </p>

        <div className="price">

          <span className="old-price">

            ${(producto.precio * 1.15).toFixed(2)}

          </span>

          <span className="new-price">

            ${producto.precio}

          </span>

        </div>

        <div className="card-buttons">

          <Link
            to={`/producto/${producto.id}`}
            className="details-btn"
          >
            Ver detalle
          </Link>

          <button
            className="cart-btn-card"
            onClick={comprar}
          >
            <FaShoppingCart />
            Comprar
          </button>

        </div>

      </div>

    </div>

  );

}

export default ProductCard;