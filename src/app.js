console.log('✅ Express app initialized');
const express = require('express');
const app = express();
const cors = require('cors'); // ✅ Required to prevent any CORS issues
const connectDB = require('./config/db');
const routes = require('./routes');
const errorHandler = require('./middlewares/error.middleware');

// ✅ Always before routes
app.use(cors());
app.use(express.json());

// ✅ Add a test logger (helps confirm route is hit)
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

connectDB();

// ✅ Register your routes
app.use('/api', routes);

// ✅ Always last
app.use(errorHandler);

module.exports = app;