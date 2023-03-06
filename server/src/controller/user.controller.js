const userDatabase = require("../models/userSchema");
const bcrypt = require("bcrypt");

exports.sendUserInformation = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await userDatabase.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ error: error, message: "Something went wrong" });
  }
};
