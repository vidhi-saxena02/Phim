const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user.router");
const wishListRouter = require("./routes/wishList.route");
const cookieParser = require("cookie-parser");
const ErrorMiddleWare = require("./middleware/error");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/api/v1", userRouter);
app.use("/api/v1", wishListRouter);
app.use(ErrorMiddleWare);

module.exports = app;
