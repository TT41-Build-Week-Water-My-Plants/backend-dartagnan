const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const plantRouter = require("./api/plants/plants-router");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use("/api/plants", plantRouter);

module.exports = server;
