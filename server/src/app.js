const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user.router");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/api/v1", userRouter);

module.exports = app;
