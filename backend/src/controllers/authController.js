const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {

  console.log("REGISTER EJECUTADO");
  console.log(req.body);

  try {

    const { username, password } = req.body;

    const existingUser = await User.findOne({
      where: { username }
    });

    if (existingUser) {

      return res.status(400).json({
        mensaje: "El usuario ya existe"
      });

    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user = await User.create({

      username,

      password: hashedPassword

    });

    res.status(201).json(user);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};

const login = async (req, res) => {

  console.log("LOGIN EJECUTADO");
  console.log(req.body);

  try {

    const { username, password } = req.body;

    const user = await User.findOne({
      where: { username }
    });

    if (!user) {

      return res.status(401).json({
        mensaje: "Usuario incorrecto"
      });

    }

    const validPassword =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!validPassword) {

      return res.status(401).json({
        mensaje: "Contraseña incorrecta"
      });

    }

    const token = jwt.sign(

      {
        id: user.id,
        rol: user.rol
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "24h"
      }

    );

    res.json({

      id: user.id,

      token,

      username: user.username,

      rol: user.rol

    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};

const getUsers = async (req, res) => {

  try {

    const users = await User.findAll({

      attributes: [
        "id",
        "username",
        "rol",
        "createdAt"
      ]

    });

    res.json(users);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};

const updateRole = async (req, res) => {

  try {

    const user = await User.findByPk(
      req.params.id
    );

    if (!user) {

      return res.status(404).json({
        mensaje: "Usuario no encontrado"
      });

    }

    user.rol =
      user.rol === "admin"
      ? "cliente"
      : "admin";

    await user.save();

    res.json(user);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};

const deleteUser = async (req, res) => {

  try {

    const user = await User.findByPk(
      req.params.id
    );

    if (!user) {

      return res.status(404).json({
        mensaje: "Usuario no encontrado"
      });

    }

    await user.destroy();

    res.json({
      mensaje: "Usuario eliminado"
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};

module.exports = {
  register,
  login,
  getUsers,
  updateRole,
  deleteUser
};