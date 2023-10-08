const { Response } = require("../utils/response");
const ConsumoModel = require("../models/ListaConsumosModels");

module.exports.CreateConsumo = (data) => {
  return new Promise((resolve, reject) => {
    const { numero_de_dato, consumo_energetico, fecha, numero_de_piso } = data;
    const nuevoConsumo = new ConsumoModel({
      numero_de_dato,
      consumo_energetico,
      fecha,
      numero_de_piso,
    });

    nuevoConsumo
      .save()
      .then((resp) => {
        Response.status = "201";
        Response.message = "Se ha creado el consumo correctamente";
        Response.result = resp;
        resolve(Response);
      })
      .catch((err) => {
        console.error("Error:", err);
        Response.status = "500";
        Response.message = "Ocurrió un error en el servidor";
        Response.result = err;
        reject(Response);
      });
  });
};

module.exports.FindAllConsumos = async () => {
  return new Promise((resolve, reject) => {
    ConsumoModel.find()
      .then((resp) => {
        Response.status = "200";
        Response.message = "Resgirstros encontrados";
        Response.result = resp;
        resolve(Response);
      })
      .catch((err) => {
        console.log("error: ", err);
        Response.status = "500";
        Response.message = "Ocurrio un error en el servidor";
        Response.result = err;
        reject(Response);
      });
  });
};

module.exports.deleteConsumo = (consumoId) => {
  return new Promise((resolve, reject) => {
    ConsumoModel.findByIdAndDelete(consumoId)
      .then((resp) => {
        if (!resp) {
          const response = {
            status: "404",
            message: "Consumo no encontrado",
          };
          reject(response);
        } else {
          const response = {
            status: "200",
            message: "Consumo eliminado correctamente",
            result: resp,
          };
          resolve(response);
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        const response = {
          status: "500",
          message: "Ocurrió un error en el servidor",
          result: err,
        };
        reject(response);
      });
  });
};
