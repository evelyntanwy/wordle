const path = require("path");
const express = require("express");

const word = require("./routes/word");

const server = express();

server.use(express.json());
server.use(express.static(path.join(__dirname, "./public")));

server.use("/api/v1/word", word);

module.exports = server;
