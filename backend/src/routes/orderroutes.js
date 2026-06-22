const express = require("express");

const router = express.Router();

const {
  createOrder,
  getOrdersByUser,
  getAllOrders
} = require("../controllers/orderController");

router.get(
  "/",
  getAllOrders
);

router.post("/", createOrder);

router.get(
  "/user/:userId",
  getOrdersByUser
);

module.exports = router;