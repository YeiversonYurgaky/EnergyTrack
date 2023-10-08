const { Response } = require("../utils/response");
const UserModel = require("../models/UsuariosModels");

module.exports.CreateUser = async (user) => {
  return new Promise((resolve, reject) => {
    user
      .save()
      .then((resp) => {
        Response.status = "201";
        Response.message = "Se ha creado el usuario correctamente";
        Response.result = resp;
        resolve(Response);
      })
      .catch((err) => {
        console.log("error: ", err);
        Response.status = "500";
        Response.message = "Ocurrio in error en el servidor";
        Response.result = err;
        reject(Response);
      });
  });
};

module.exports.FindAllUser = async () => {
  return new Promise((resolve, reject) => {
    UserModel.find()
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

module.exports.login = (usuario, password) => {
  return new Promise((resolve, reject) => {
    UserModel.findOne({ usuario })
      .then((user) => {
        if (!user) {
          Response.status = 404;
          Response.message = "Usuario no encontrado.";
          reject(Response);
        } else if (user.password === password) {
          Response.status = 200;
          Response.message = "Inicio de sesión exitoso.";
          resolve(Response);
        } else {
          Response.status = 401;
          Response.message = "Contraseña incorrecta.";
          reject(Response);
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        Response.status = 500;
        Response.message = "Ocurrió un error en el servidor.";
        Response.error = err;
        reject(Response);
      });
  });
};
