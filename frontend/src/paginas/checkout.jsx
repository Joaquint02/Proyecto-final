import { useCarrito } from "../context/CarritoContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Checkout() {

  const {
    carrito,
    vaciarCarrito
  } = useCarrito();

  const navigate = useNavigate();

  const total = carrito.reduce(

    (acc, producto) =>

      acc + producto.precio * producto.cantidad,

    0

  );

  const confirmarCompra = async () => {

    try {

      const userId =
        localStorage.getItem("userId");

      await axios.post(

        "http://localhost:3000/api/orders",

        {

          userId,

          carrito

        }

      );

      vaciarCarrito();

      navigate("/compra-exitosa");

    } catch (error) {

      console.error(error);

      alert(
        "Error al registrar la compra"
      );

    }

  };

  return (

    <div className="checkout-container">

      <h1>
        Confirmar compra
      </h1>

      {

      carrito.length === 0

      ?

      <h2>
        No hay productos en el carrito
      </h2>

      :

      <>

      {

      carrito.map((producto)=>(

      <div
        key={producto.id}
        className="checkout-item"
      >

      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="checkout-img"
      />

      <div>

      <h3>
        {producto.nombre}
      </h3>

      <p>
        Cantidad:
        {" "}
        {producto.cantidad}
      </p>

      <p>
        Precio:
        {" "}
        ${producto.precio}
      </p>

      </div>

      </div>

      ))

      }

      <h2>

      Total: ${total}

      </h2>

      <button
        onClick={confirmarCompra}
      >

      Comprar ahora

      </button>

      </>

      }

    </div>

  );

}

export default Checkout;