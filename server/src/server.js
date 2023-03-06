const http = require("http");
const dotenv = require("dotenv");
const connectDB = require("./mongo/database");
const app = require("./app");
const server = http.createServer(app);

dotenv.config({ path: "./config/config.env" });

connectDB();

//Unhandle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log("Shutting down due to uncaught exception");
  process.exit(1);
});
server.listen(4000, () => {
  console.log(`Listening on PORT ${process.env.PORT}`);
});

//Unhandle promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log("Shutting down the server due to unhandled promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
