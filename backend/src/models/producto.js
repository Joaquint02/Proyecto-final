const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");


const Product = sequelize.define("Product", {

  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },


  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },


  precio: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },


  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },


  imagen: {
    type: DataTypes.STRING,
    allowNull: true,
  }


});


module.exports = Product;