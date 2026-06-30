import { useEffect, useState } from "react";
import axios from "axios";

import {
  FaShoppingBag,
} from "react-icons/fa";

import "../styles/latestOrders.css";

function LatestOrders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    const cargar = async () => {

      try {

        const res = await axios.get(
          "http://localhost:3000/api/orders/latest"
        );

        setOrders(res.data);

      } catch (error) {

        console.error(error);

      }

    };

    cargar();

  }, []);

  return (

    <div className="latest-orders">

      <h2>

        <FaShoppingBag />

        Últimos pedidos

      </h2>

      <table>

        <thead>

          <tr>

            <th>ID</th>

            <th>Total</th>

            <th>Fecha</th>

          </tr>

        </thead>

        <tbody>

          {orders.map((order) => (

            <tr key={order.id}>

              <td>#{order.id}</td>

              <td>${order.total}</td>

              <td>

                {new Date(order.createdAt)
                  .toLocaleDateString()}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default LatestOrders;