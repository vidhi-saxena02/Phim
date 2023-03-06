const userDatabase = require("../models/userSchema");
const bcrypt = require("bcrypt");
const catchAsyncError = require("../middleware/catchAsyncError");
const sendToken = require("../utils/jwtToken");
const ErrorHandler = require("../utils/errorHandler");

exports.sendUserInformation = catchAsyncError(async (req, res) => {
  const { name, email, password } = req.body;

  const user = await userDatabase.create({
    name,
    email,
    password,
  });

  sendToken(user, 201, res);
});

// Login user

exports.LoginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please enter email and password", 400));
  }

  const user = await userDatabase.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    //if the password is not matched
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  sendToken(user, 200, res);
});

// Logout user
exports.Logout = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "Logged out",
  });
});
