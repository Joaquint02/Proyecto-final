import { useCarrito } from "../context/CarritoContext";
import { Link } from "react-router-dom";
import {
  FaTrash,
  FaMinus,
  FaPlus,
  FaShoppingBag,
} from "react-icons/fa";

import "../styles/carrito.css";

function Carrito() {
  const {
    carrito,
    eliminarProducto,
    aumentarCantidad,
    disminuirCantidad,
  } = useCarrito();

  const total = carrito.reduce(
    (acc, producto) =>
      acc + producto.precio * producto.cantidad,
    0
  );

  return (
    <div className="carrito-container">

      <h1 className="carrito-title">
        <FaShoppingBag /> Mi Carrito
      </h1>

      {carrito.length === 0 ? (
        <div className="carrito-vacio">

          <h2>Tu carrito está vacío</h2>

          <p>
            Agregá productos para comenzar tu compra.
          </p>

          <Link to="/tienda" className="seguir-comprando">
            Ir a la tienda
          </Link>

        </div>
      ) : (
        <div className="carrito-grid">

          <div className="productos">

            {carrito.map((producto) => (

              <div
                className="producto-card"
                key={producto.id}
              >

                <img
                  src={
                    producto.imagen ||
                    "https://via.placeholder.com/150"
                  }
                  alt={producto.nombre}
                />

                <div className="producto-info">

                  <h2>{producto.nombre}</h2>

                  <p>
                    ${producto.precio}
                  </p>

                  <div className="cantidad">

                    <button
                      onClick={() =>
                        disminuirCantidad(producto.id)
                      }
                    >
                      <FaMinus />
                    </button>

                    <span>
                      {producto.cantidad}
                    </span>

                    <button
                      onClick={() =>
                        aumentarCantidad(producto.id)
                      }
                    >
                      <FaPlus />
                    </button>

                  </div>

                </div>

                <button
                  className="eliminar"
                  onClick={() =>
                    eliminarProducto(producto.id)
                  }
                >
                  <FaTrash />
                </button>

              </div>

            ))}

          </div>

          <div className="resumen">

            <h2>Resumen de compra</h2>

            <div className="fila">
              <span>Productos</span>
              <span>{carrito.length}</span>
            </div>

            <div className="fila">
              <span>Envío</span>
              <span>Gratis</span>
            </div>

            <div className="fila total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <Link
              to="/checkout"
              className="btn-checkout"
            >
              Finalizar compra
            </Link>

          </div>

        </div>
      )}

    </div>
  );
}

export default Carrito;