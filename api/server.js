const express = require("express");
const configureMiddleware = require("../middleware/globalMiddleware");

const server = express();

configureMiddleware(server);

const appointmentRoutes = require("../routes/appointmentRoutes");
const noteRoutes = require("../routes/noteRoutes");
const studentRoutes = require("../routes/studentRoutes");


server.use('/appointments', appointmentRoutes)
server.use('/notes', noteRoutes)
server.use('/students', studentRoutes)


module.exports = server;