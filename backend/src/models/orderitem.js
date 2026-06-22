const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const OrderItem = sequelize.define("OrderItem", {

  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },

  precio: {
    type: DataTypes.FLOAT,
    allowNull: false
  },

  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  }

});

module.exports = OrderItem;