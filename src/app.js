const express = require('express');
const app = express();
const connectDB = require('./config/db');
const routes = require('./routes');
const errorHandler = require('./middlewares/error.middleware');
app.use(errorHandler);


app.use(express.json());
connectDB();

app.use('/api', routes);

module.exports = app;
