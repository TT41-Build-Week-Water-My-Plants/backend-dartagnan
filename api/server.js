const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const plantRouter = require("./api/plants/plants-router");
const authRouter = require("./api/auth/auth-router");
const userRouter = require("./api/users/users-router");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use("/api/plants", plantRouter);
server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);

module.exports = server;
