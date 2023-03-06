const express = require("express");
const {
  sendUserInformation,
  LoginUser,
  Logout,
} = require("../controller/user.controller");
const userRouter = express.Router();

userRouter.route("/signup").post(sendUserInformation);
userRouter.route("/login").post(LoginUser);
userRouter.route("/logout").get(Logout);

module.exports = userRouter;
