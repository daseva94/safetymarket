var express = require("express");
var mongoose = require("mongoose");
const cors = require("cors");
var app = express();


const usuariosRoutes = require("./routes/rou_usuarios");
const URL ='mongodb://localhost:27017/safetymarket'

app.use(express.json()); //
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose
  .connect(
  URL,{useNewUrlParser: true, useUnifiedTopology: true}   //mi base de datos
  )
  .then(() => {
    console.log("Conectado");
  });
app.use("/api/usuarios", usuariosRoutes);

module.exports = app;