import { useEffect, useState } from "react";
import axios from "axios";

function OrdersManagement() {

  const [orders, setOrders] =
    useState([]);

  useEffect(() => {

    loadOrders();

  }, []);

  const loadOrders = async () => {

    try {

      const res =
        await axios.get(
          "http://localhost:3000/api/orders"
        );

      setOrders(res.data);

    } catch (error) {

      console.error(error);

    }

  };

  return (

    <div className="card">

      <h2>
        Pedidos Realizados
      </h2>

      <table>

        <thead>

          <tr>

            <th>ID</th>

            <th>Usuario</th>

            <th>Total</th>

            <th>Fecha</th>

          </tr>

        </thead>

        <tbody>

          {orders.map(order => (

            <tr key={order.id}>

              <td>
                {order.id}
              </td>

              <td>
                {
                  order.User
                  ?.username
                }
              </td>

              <td>
                ${order.total}
              </td>

              <td>

                {
                  new Date(
                    order.createdAt
                  )
                  .toLocaleDateString()
                }

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default OrdersManagement;