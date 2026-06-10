console.log("SERVER ACTUAL CARGADO");

const express = require("express");
const cors = require("cors");
const sequelize = require("./src/config/database");

const productRoutes = require("./src/routes/productRoutes");
const authRoutes = require("./src/routes/authRoutes");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API funcionando");
});

app.get("/prueba", (req, res) => {
  res.send("PRUEBA SERVER");
});

app.get("/api/auth/test-direct", (req, res) => {
  res.send("TEST AUTH DIRECTO");
});

sequelize
  .sync()
  .then(() => {
    console.log("Base de datos sincronizada");
  })
  .catch((error) => {
    console.error(error);
  });

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});