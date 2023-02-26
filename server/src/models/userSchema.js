const moongose = require("mongoose");

const userSchema = new moongose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = moongose.model("User", userSchema);
