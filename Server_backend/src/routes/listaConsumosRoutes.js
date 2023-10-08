const express = require("express");
const consumoController = require("../controllers/ListaConsumoControllers");

const api = express.Router();

api.post("/consumos/create", consumoController.createConsumo);
api.get("/consumos/listar", consumoController.findAll);

module.exports = api;
