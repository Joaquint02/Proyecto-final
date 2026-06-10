const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.get("/", verifyToken, getProducts);

router.get("/:id", verifyToken, getProductById);

router.post("/", verifyToken, createProduct);

router.put("/:id", verifyToken, updateProduct);

router.delete("/:id", verifyToken, deleteProduct);

module.exports = router;