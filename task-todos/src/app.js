const express = require('express');
const app = express();
const routes = require('./routes/index.routes');

// Middleware to parse JSON
app.use(express.json());

// Use routes
app.use('/api', routes);

module.exports = app;
