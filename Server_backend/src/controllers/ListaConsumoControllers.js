const { CreateConsumo } = require("../repository/consumosRepository");
const ConsumoModel = require("../models/ListaConsumosModels");

async function createConsumo(req, res) {
  const params = req.body;

  const consumo = new ConsumoModel();

  if (
    !params.numero_de_dato ||
    !params.consumo_energetico ||
    !params.fecha ||
    !params.numero_de_piso
  ) {
    res.status(404).send({ message: "Todos los campos son requeridos" });
    return;
  }

  consumo.numero_de_dato = params.numero_de_dato;
  consumo.consumo_energetico = params.consumo_energetico;
  consumo.fecha = params.fecha;
  consumo.numero_de_piso = params.numero_de_piso;

  const response = await CreateConsumo(consumo);
  res.status(response.status).send(response);
}

module.exports = { createConsumo };