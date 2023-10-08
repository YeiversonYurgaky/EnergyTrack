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

//eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NGY4NzQ0ZWFjYjUwYWFkY2VhZjQwMmUiLCJub21icmVzIjoiQW1pbGthciIsImFwZWxsaWRvcyI6Ikhlcm5hbmRleiIsImVtYWlsIjoiYW1pbGthckBnbWFpbC5jb20iLCJpYXQiOjE2OTY3MDQ4ODEsImV4cCI6MTY5OTI5Njg4MX0.WP4KP1QR0DlvXyg4ntfgw8r-Vy277OlHQ3zItXcTpCc
