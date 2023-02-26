const http = require("http");
const PORT = 4000;
const server = http.createServer();

server.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

// const express = require("express");

// const app = express();
// app.use(express.json());

// app.listen(PORT, () => {
//   console.log(`Listening on PORT ${PORT}`);
// });
