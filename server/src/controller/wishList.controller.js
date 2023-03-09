const WishListDatabase = require("../models/wishListSchema");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");

exports.addToWishList = catchAsyncError(async (req, res, next) => {
  req.body.user = req.user.id;
  const wishList = await WishListDatabase.create(req.body);

  res.status(201).json({
    success: true,
    wishList,
  });
});

exports.getWishList = catchAsyncError(async (req, res, next) => {
  const wishList = await WishListDatabase.find({ user: req.user.id });

  res.status(200).json({
    success: true,
    wishList,
  });
});

exports.deleteMovieFromWishList = catchAsyncError(async (req, res, next) => {
  const movie = await WishListDatabase.findById(req.params.id);

  if (!movie) {
    return next(new ErrorHandler("Movie not found", 404));
  }

  await WishListDatabase.findByIdAndDelete(req.params.id);

  res.status(200).json({
    success: true,
    message: "Movie deleted from wish list",
    movie,
  });
});
