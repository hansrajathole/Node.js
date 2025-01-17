const express = require('express')
const controller = require('../controllers/index.controller')
const register = require('../controllers/register.controller')
const router = express.Router()

router.get('/',controller.indexController)

router.get('/register',register.registerController)

module.exports = router