const http = require("http");
const moongose = require("mongoose");
const PORT = 4000;
const app = require("./app");
const server = http.createServer(app);

const MONGO_URL =
  "mongodb+srv://movie-api:ciC3dntr5HTaVVtn@phim-cluster.i1lkugj.mongodb.net/users?retryWrites=true&w=majority";

moongose.connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

moongose.connection.on("error", (err) => {
  console.log(
    "MongoDB connection error. Please make sure MongoDB is running. " + err
  );
  process.exit();
});

async function startServer() {
  await moongose.connect(MONGO_URL);
  server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
  });
}

startServer();
