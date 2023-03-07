const express = require("express");
const { addToWishList } = require("../controller/wishList.controller");

const wishListRouter = express.Router();

wishListRouter.route("/wishlist").post(addToWishList);

module.exports = wishListRouter;
