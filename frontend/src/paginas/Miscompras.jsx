import { useEffect, useState } from "react";
import axios from "axios";

function MisCompras() {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const cargarCompras = async () => {

      try {

        const userId =
          localStorage.getItem("userId");

        const res = await axios.get(
          `http://localhost:3000/api/orders/user/${userId}`
        );

        console.log("COMPRAS:", res.data);

        setOrders(res.data);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    };

    cargarCompras();

  }, []);

  if (loading) {
    return <h2>Cargando compras...</h2>;
  }

  return (

    <div className="mis-compras">

      <h1>Mis Compras</h1>

      {orders.length === 0 ? (

        <h2>Todavía no realizaste compras</h2>

      ) : (

        orders.map((order) => (

          <div
            key={order.id}
            className="compra-card"
          >

            <h3>
              Compra #{order.id}
            </h3>

            <p>
              Fecha:
              {" "}
              {new Date(
                order.createdAt
              ).toLocaleDateString()}
            </p>

            <p>
              Total:
              {" "}
              ${order.total}
            </p>

            <hr />

            {order.OrderItems &&
              order.OrderItems.map((item) => (

                <div key={item.id}>

                  <p>
                    {item.nombre}
                    {" - "}
                    Cantidad:
                    {" "}
                    {item.cantidad}
                  </p>

                </div>

              ))
            }

          </div>

        ))

      )}

    </div>

  );

}

export default MisCompras;