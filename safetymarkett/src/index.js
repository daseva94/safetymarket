const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const authRouter = require("./authRouter");

app.use("/auth", authRouter);

app.listen(5000,() =>{
  console.log("El servidor está corriendo")
});