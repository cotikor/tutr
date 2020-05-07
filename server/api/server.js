const express = require("express");
const configureMiddleware = require("../middleware/globalMiddleware");

const server = express();

configureMiddleware(server);

const sanityCheck = require("../routes/sanityCheck");

server.use('/sanity', sanityCheck)


module.exports = server;