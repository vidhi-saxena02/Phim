const WishListDatabase = require("../models/wishListSchema");
const catchAsyncError = require("../middleware/catchAsyncError");

exports.addToWishList = catchAsyncError(async (req, res, next) => {
  const { movieName, movieId, user } = req.body;
  const wishList = await WishListDatabase.create({
    movieName,
    movieId,
    user,
  });

  res.status(201).json({
    success: true,
    wishList,
  });
});

exports.getWishList = catchAsyncError(async (req, res, next) => {
  const wishList = await WishListDatabase.find();

  res.status(200).json({
    success: true,
    wishList,
  });
});
