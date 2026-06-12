const express = require("express");

const router = express.Router();

const {
  register,
  login,
  getUsers,
  deleteUser
} = require("../controllers/authController");


router.post("/register", register);

router.post("/login", login);

router.get("/users", getUsers);

router.delete("/users/:id", deleteUser);


console.log("AUTH ROUTES CARGADAS");

module.exports = router;