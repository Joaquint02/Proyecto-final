const express = require("express");

const router = express.Router();

const {
  getStats,
  getSalesChart,
} = require("../controllers/statsController");

router.get("/", getStats);

router.get("/ventas", getSalesChart);

module.exports = router;