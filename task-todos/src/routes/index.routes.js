const express = require('express');
const router = express.Router();
const { getTodos, createTodo } = require('../controllers/index.controller');

router.get('/todos', getTodos); 
router.post('/todos', createTodo);

module.exports = router;
