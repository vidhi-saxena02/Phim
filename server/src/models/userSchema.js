const moongose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new moongose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
    maxlength: [20, "Your name cannot exceed 20 characters"],
    minlength: [4, "Your name must be at least 4 characters"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Your password must be at least 6 characters"],
    select: false,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

//Encrypting password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    //if the password is not modified, then skip this function
    next();
  }
  this.password = await bcrypt.hash(this.password, 10); //hashing the password
});

//JWT token

userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
};

//Compare user password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = moongose.model("User", userSchema);

module.exports = User;
