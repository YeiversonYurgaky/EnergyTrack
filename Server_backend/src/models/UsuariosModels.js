//datos sensibles y no sensibles. contraseña, doreccion, documento:
//todos los datos sensibles van encriptados

const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UsuarioSchema = schema({
  nombres: String,
  apellidos: String,
  usuario: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("usuarios_collection", UsuarioSchema); //MONGO_DB=unacjs, eñ nombre se cambia a nuestra db
