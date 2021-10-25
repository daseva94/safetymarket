const mongoose = require('mongoose');

//CONEXION CON LA BASE DE DATOS LOCAL
const URL = 'mongodb://localhost:27017/Ventas';
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once("open", function () {
  console.log("MongoDB coneccion exitosa");
});

module.exports = mongoose;