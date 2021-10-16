const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    dni:Number,
    descripcion: String, 
    valor: Number, 
    estado: Number
    
});

const productModel = mongoose.model('product', productSchema)

module.exports = productModel;