import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaShoppingCart, FaHeart, FaStar, FaTruck } from "react-icons/fa";
import { toast } from "react-toastify";

import api from "../services/api";
import { useCarrito } from "../context/CarritoContext";
import { useFavoritos } from "../context/FavoritosContext";

import "../styles/productodetalle.css";

function ProductoDetalle() {

  const { id } = useParams();

  const [producto, setProducto] = useState(null);

  const { agregarProducto } = useCarrito();

  const {
    toggleFavorito,
    esFavorito
  } = useFavoritos();

  useEffect(() => {

    const cargarProducto = async () => {

      try {

        const res = await api.get(`/${id}`);

        setProducto(res.data);

      } catch (error) {

        console.error(error);

      }

    };

    cargarProducto();

  }, [id]);

  if (!producto) {

    return (
      <h2 className="loading">
        Cargando producto...
      </h2>
    );

  }

  const agregar = () => {

    agregarProducto(producto);

    toast.success("Producto agregado al carrito");

  };

  return (

    <div className="detalle-container">

      <div className="detalle-imagen">

        <img
          src={
            producto.imagen ||
            "https://via.placeholder.com/500"
          }
          alt={producto.nombre}
        />

      </div>

      <div className="detalle-info">

        <span className="badge">
          Oferta
        </span>

        <h1>

          {producto.nombre}

        </h1>

        <div className="rating">

          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />

          <span>(5.0)</span>

        </div>

        <div className="precio">

          ${producto.precio}

        </div>

        <p className="descripcion">

          {producto.descripcion}

        </p>

        <div className="stock">

          Stock disponible:

          <strong>

            {producto.stock}

          </strong>

        </div>

        <div className="envio">

          <FaTruck />

          Envío gratis a todo el país.

        </div>

        <div className="detalle-botones">

          <button
            className="btn-comprar"
            onClick={agregar}
          >

            <FaShoppingCart />

            Agregar al carrito

          </button>

          <button
            className="btn-favorito"
            onClick={() =>
              toggleFavorito(producto)
            }
          >

            <FaHeart />

            {
              esFavorito(producto.id)
                ? "Quitar favorito"
                : "Agregar favorito"
            }

          </button>

        </div>

        <Link
          className="volver"
          to="/tienda"
        >
          ← Volver al catálogo
        </Link>

      </div>

    </div>

  );

}

export default ProductoDetalle;