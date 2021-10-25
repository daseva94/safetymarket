const mongoose = require('mongoose');

// CREAR MODELO DE DOCUMENTOS JSON EN LA BASE DE DATOS
const ventasSchema = new mongoose.Schema({
  id:{type:Number, required:[true,'ID obligatorio']},
  total:Number,
  cantidad:Number,
  fecha:{type:Date, default: Date.now},
  documento:Number,
  cliente:String, 
  vendedor:String
});
const ventasModel = mongoose.model('ventas', ventasSchema);
module.exports = ventasModel;