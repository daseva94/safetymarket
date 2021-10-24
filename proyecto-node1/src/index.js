const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const mongoose = require("./database/conection");
const authRouter = require("./routes/authRouter");

app.use("/auth", authRouter);


app.listen(5000,() =>{
  console.log("El servidor está corriendo");
});