const userDatabase = require("../models/userSchema");
const bcrypt = require("bcrypt");
const catchAsyncError = require("../middleware/catchAsyncError");
const sendToken = require("../utils/jwtToken");

exports.sendUserInformation = catchAsyncError(async (req, res) => {
  const { name, email, password } = req.body;

  const user = await userDatabase.create({
    name,
    email,
    password,
  });

  sendToken(user, 201, res);
});
