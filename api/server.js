const express = require("express");
const configureMiddleware = require("../middleware/globalMiddleware");

const server = express();

configureMiddleware(server);

const appointmentRoutes = require("../routes/appointmentRoutes");
const noteRoutes = require("../routes/noteRoutes");
const quizRoutes = require("../routes/quizRoutes");
const studentRoutes = require("../routes/studentRoutes");
const scoreRoutes = require("../routes/scoreRoutes");
const subjectRoutes = require("../routes/subjectRoutes");

server.use('/appointments', appointmentRoutes)
server.use('/notes', noteRoutes)
server.use('/quizzes', quizRoutes)
server.use('/scores', scoreRoutes)
server.use('/students', studentRoutes)
server.use('/subjects', subjectRoutes)


module.exports = server;