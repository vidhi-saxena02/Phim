const mongoose = require("mongoose");

const wishListSchema = new mongoose.Schema({
  movieName: {
    type: String,
    required: true,
  },

  movieId: {
    type: String,
    required: true,
  },

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("WishList", wishListSchema);
