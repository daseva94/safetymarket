const express = require("express");
const cors = require("cors"); 

const app = express();
app.use(cors());
app.use(express.json());

const mongoose = require("./database/conection");
const authRouter = require("./routes/authRouter");
const rou_usuarios = require("./routes/rou_usuarios");
const { JWT } = require("google-auth-library");

app.use("/auth", authRouter);
app.use("/user", rou_usuarios);


app.listen(5000,() =>{
  console.log("El servidor está corriendo");
});