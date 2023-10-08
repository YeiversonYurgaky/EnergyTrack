const express = require("express");
const UserController = require("../controllers/UsuarioController");

const api = express.Router();

api.post("/usuarios/create", UserController.create);
api.post("/usuarios/login", UserController.login);
api.get("/usuarios/listar", UserController.findAll);

module.exports = api;
