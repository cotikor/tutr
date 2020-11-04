const express = require("express");
const configureMiddleware = require("../middleware/globalMiddleware");
const errorHandler = require("../middleware/errorMiddleware");
const appointmentRoutes = require("../routes/appointmentRoutes");
const noteRoutes = require("../routes/noteRoutes");
const studentRoutes = require("../routes/studentRoutes");

const server = express();

configureMiddleware(server);

server.use('/appointments', appointmentRoutes)
server.use('/notes', noteRoutes)
server.use('/students', studentRoutes)

server.use(errorHandler);

module.exports = server;