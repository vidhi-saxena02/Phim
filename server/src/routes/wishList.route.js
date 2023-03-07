const express = require("express");
const {
  addToWishList,
  getWishList,
  deleteMovieFromWishList,
} = require("../controller/wishList.controller");

const { isAuthenticated } = require("../middleware/auth");

const wishListRouter = express.Router();

wishListRouter
  .route("/wishlist")
  .post(isAuthenticated, addToWishList)
  .get(isAuthenticated, getWishList);

wishListRouter
  .route("/wishlist/:id")
  .delete(isAuthenticated, deleteMovieFromWishList);

module.exports = wishListRouter;
