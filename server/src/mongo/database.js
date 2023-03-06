const mongoose = require("mongoose");

mongoose.connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

mongoose.connection.on("error", (err) => {
  console.log(
    "MongoDB connection error. Please make sure MongoDB is running. " + err
  );
  process.exit();
});

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URL);
};

module.exports = connectDB;
