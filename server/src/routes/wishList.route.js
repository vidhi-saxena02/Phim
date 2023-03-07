const express = require("express");
const {
  addToWishList,
  getWishList,
} = require("../controller/wishList.controller");

const wishListRouter = express.Router();

wishListRouter.route("/wishlist").post(addToWishList).get(getWishList);

module.exports = wishListRouter;
