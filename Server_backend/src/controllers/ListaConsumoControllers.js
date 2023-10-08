const {
  CreateConsumo,
  FindAllConsumos,
  deleteConsumo,
} = require("../repository/consumosRepository");
const ConsumoModel = require("../models/ListaConsumosModels");

//crear el consumo
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

//Que el usuario visualice los consumos en la página
async function findAll(req, res) {
  const response = await FindAllConsumos();
  res.status(response.status).send(response);
}

async function eliminarConsumo(req, res) {
  const consumoId = req.params.id; // Obtener la ID desde la URL

  if (!consumoId) {
    res
      .status(404)
      .send({ message: "La identificación del consumo es requerida" });
    return;
  }

  deleteConsumo(consumoId)
    .then((response) => {
      if (response.status === "404") {
        res.status(404).send(response);
      } else {
        res.status(response.status).send(response);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      const response = {
        status: 500,
        message: "Ocurrió un error en el servidor.",
        error: error.message || "Error desconocido",
      };
      res.status(response.status).send(response);
    });
}

module.exports = { createConsumo, findAll, eliminarConsumo };
