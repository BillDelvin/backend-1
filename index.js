const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");

const apiRouter = require("./routes");

const app = express();
const PORT = 8000;
const server = http.createServer(app);

// peran body parser adalah untuk menghandel request dari user
// sebelum kita handel
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// request adalah parameter dari client
// response adalah parameter dari server
app.get("/", (request, response) => {
  response.send("Hello world!");
});

app.use(apiRouter);

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
