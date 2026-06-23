console.log("SERVER ACTUAL CARGADO");

const express = require("express");
const cors = require("cors");
const sequelize = require("./src/config/database");

const productRoutes = require("./src/routes/productRoutes");
const authRoutes = require("./src/routes/authRoutes");
const orderRoutes = require("./src/routes/orderroutes");
const statsRoutes =require("./src/routes/statsRoutes");

const User = require("./src/models/user");
const Product = require("./src/models/producto");
const Order = require("./src/models/order");
const OrderItem = require("./src/models/orderitem");

require("dotenv").config();

const app = express();

User.hasMany(Order);
Order.belongsTo(User);

Order.hasMany(OrderItem);
OrderItem.belongsTo(Order);

/* MIDDLEWARES */

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/* RUTAS */


app.use("/api/productos", productRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/orders", orderRoutes);

app.use("/api/stats", statsRoutes);


app.get("/", (req, res) => {
  res.send("API funcionando");
});


sequelize
  .sync()
  .then(() => {
    console.log(
      "Base de datos sincronizada con cambios"
    );
  })
  .catch((error) => {
    console.error(error);
  });

const PORT = 3000;

app.listen(PORT, () => {
  console.log(
    `Servidor corriendo en puerto ${PORT}`
  );
});