const express = require("express");
const authController = require("../src/authController").default;

const authRouter = express.Router();


authRouter.post("/google", authController.googleAuth);

module.exports = authRouter;