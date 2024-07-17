const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const taskRoutes = require("./routes/taskRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/tasks", taskRoutes);
app.use(errorHandler);

module.exports = app;