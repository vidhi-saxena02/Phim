const express = require("express");
const { sendUserInformation } = require("../controller/user.controller");
const userRouter = express.Router();

userRouter.route("/signup").post(sendUserInformation);

module.exports = userRouter;
