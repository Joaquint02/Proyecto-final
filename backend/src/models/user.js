const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");


const User = sequelize.define("User", {

  username: {

    type: DataTypes.STRING,

    allowNull:false,

    unique:true

  },


  password: {

    type: DataTypes.STRING,

    allowNull:false

  },


  rol: {

    type: DataTypes.STRING,

    defaultValue:"cliente"

  }


});


module.exports = User;