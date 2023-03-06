const http = require("http");
const dotenv = require("dotenv");
const connectDB = require("./mongo/database");
const app = require("./app");
const server = http.createServer(app);

dotenv.config({ path: "./config/config.env" });

connectDB();

server.listen(4000, () => {
  console.log(`Listening on PORT ${process.env.PORT}`);
});
