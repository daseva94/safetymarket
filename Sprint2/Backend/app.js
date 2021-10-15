var express = require("express");
var mongoose = require("mongoose");
const cors = require("cors");
var app = express();

const productsRoutes = require("./routes/products");
const ventasRoutes = require("./routes/ventas");
const usuariosRoutes = require("./routes/usuarios");

app.use(express.json()); //
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose
  .connect(
    //mi base de datos
  )
  .then(() => {
    console.log("Conectado");
  });

app.use("/api/products", productsRoutes);
app.use("/api/ventas", ventasRoutes);
app.use("/api/usuarios", usuariosRoutes);

module.exports = app;