const User = require("../models/user");
const Product = require("../models/producto");
const Order = require("../models/order");

const getStats = async (req, res) => {

  try {

    const totalUsuarios =
      await User.count();

    const totalProductos =
      await Product.count();

    const totalCompras =
      await Order.count();

    const ventas =
      await Order.sum("total");

    res.json({

      totalUsuarios,

      totalProductos,

      totalCompras,

      ventas: ventas || 0

    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: error.message
    });

  }

};

module.exports = {
  getStats
};