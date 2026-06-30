import { useEffect, useState } from "react";
import axios from "axios";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

import "../styles/chart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function SalesChart() {

  const [ventas, setVentas] = useState([]);

  useEffect(() => {

    const cargarGrafico = async () => {

      try {

        const res = await axios.get(
          "http://localhost:3000/api/stats/ventas"
        );

        setVentas(res.data);

      } catch (error) {

        console.error(error);

      }

    };

    cargarGrafico();

  }, []);

  const data = {

    labels: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ],

    datasets: [

      {

        label: "Ventas",

        data: ventas,

        borderRadius: 10,

      },

    ],

  };

  const options = {

    responsive: true,

    plugins: {

      legend: {

        position: "top",

      },

    },

  };

  return (

    <div className="chart-card">

      <h2>

        📈 Ventas Mensuales

      </h2>

      <Bar
        data={data}
        options={options}
      />

    </div>

  );

}

export default SalesChart;