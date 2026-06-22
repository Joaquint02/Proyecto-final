const Order = require("../models/order");
const OrderItem = require("../models/orderitem");

const createOrder = async (req, res) => {

  try {

    const { userId, carrito } = req.body;

    if (!carrito || carrito.length === 0) {

      return res.status(400).json({
        mensaje: "El carrito está vacío"
      });

    }

    const total = carrito.reduce(
      (acc, item) =>
        acc + item.precio * item.cantidad,
      0
    );

    const order = await Order.create({
      total,
      UserId: userId
    });

    for (const item of carrito) {

      await OrderItem.create({

        nombre: item.nombre,

        precio: item.precio,

        cantidad: item.cantidad,

        OrderId: order.id

      });

    }

    res.status(201).json({
      mensaje: "Compra registrada",
      order
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: error.message
    });

  }

};

const getOrdersByUser = async (req, res) => {

  try {

    const { userId } = req.params;

    const orders = await Order.findAll({

      where: {
        UserId: userId
      },

      include: [OrderItem],

      order: [["createdAt", "DESC"]]

    });

    res.json(orders);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: error.message
    });

  }

};

const getAllOrders = async (req, res) => {

  try {

    const orders = await Order.findAll({

      include: [

        {
          model: OrderItem
        },

        {
          model: require("../models/user"),
          attributes: [
            "id",
            "username"
          ]
        }

      ],

      order: [
        ["createdAt", "DESC"]
      ]

    });

    res.json(orders);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};

module.exports = {
  createOrder,
  getOrdersByUser,
  getAllOrders
};