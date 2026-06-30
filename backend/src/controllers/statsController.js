const User = require("../models/user");
const Product = require("../models/producto");
const Order = require("../models/order");

const getStats = async (req, res) => {

  try {

    const totalUsuarios = await User.count();

    const totalProductos = await Product.count();

    const totalCompras = await Order.count();

    const ventas = await Order.sum("total");

    res.json({

      totalUsuarios,

      totalProductos,

      totalCompras,

      ventas: ventas || 0,

    });

  } catch (error) {

    console.error(error);

    res.status(500).json({

      error: error.message,

    });

  }

};

const getSalesChart = async (req, res) => {

  try {

    const ventasMensuales = [

      12,
      19,
      8,
      15,
      25,
      30,
      22,
      18,
      28,
      35,
      40,
      50,

    ];

    res.json(ventasMensuales);

  } catch (error) {

    console.error(error);

    res.status(500).json({

      error: error.message,

    });

  }

};

module.exports = {

  getStats,

  getSalesChart,

};