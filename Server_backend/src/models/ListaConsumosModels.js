//datos sensibles y no sensibles. contraseña, doreccion, documento:
//todos los datos sensibles van encriptados

const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ListaConsumosSchema = schema({
  numero_de_dato: String,
  consumo_energetico: Number,
  fecha: Date,
  numero_de_piso: String,
});

module.exports = mongoose.model("consumos_collection", ListaConsumosSchema); //MONGO_DB=unacjs, eñ nombre se cambia a nuestra db
