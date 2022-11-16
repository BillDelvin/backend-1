const express = require("express");
const app = express();

const todosRouter = require("./todos");

// file ini bertujuan untuk menampung semua router API yang sudah kita buat
const api = "/api/v1";

app.use(api, todosRouter);

module.exports = app;
