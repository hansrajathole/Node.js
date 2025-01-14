const express = require('express');
const router = express.Router();
const { getTodos, createTodo } = require('../controllers/index.controller');

// Routes
router.get('/todos', getTodos);    // GET endpoint
router.post('/todos', createTodo); // POST endpoint

module.exports = router;
