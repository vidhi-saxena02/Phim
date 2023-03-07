const express = require("express");
const {
  addToWishList,
  getWishList,
} = require("../controller/wishList.controller");

const { isAuthenticated } = require("../middleware/auth");

const wishListRouter = express.Router();

wishListRouter
  .route("/wishlist")
  .post(isAuthenticated, addToWishList)
  .get(isAuthenticated, getWishList);

module.exports = wishListRouter;
