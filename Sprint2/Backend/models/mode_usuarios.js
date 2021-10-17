const mongoose = require("mongoose");

const asignacionUsuario = mongoose.Schema({
  Documento: { type: Number, required: true },
  NombreApellido: { type: String, required: true },
  Telefono: { type: Number },
  Correo: { type: String, required: true },
  Sucursal: { type: String, required: true },
  Estado: { type: String, required: true },
});

module.exports = mongoose.model("AsignacionUsuario", asignacionUsuario);