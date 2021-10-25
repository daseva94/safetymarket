const mongoose = require("mongoose");

const asignacionUsuario = mongoose.Schema({
  Documento: { type: Number, required: true },
  name: { type: String, required: true },
  Tel: { type: Number },
  email: { type: String, required: true },
  Sucursal: { type: String, required: true },
  Estado: { type: String, required: true },
});

module.exports = mongoose.model("AsignacionUsuario", asignacionUsuario);