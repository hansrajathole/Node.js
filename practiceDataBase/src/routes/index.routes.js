const express = require('express')
const indexController = require('../controllers/index.controller')
const router = express.Router()

router.get('/',indexController.indexController)
router.get('/register',indexController.registerController)
router.get('/userfind',indexController.userFind)
router.get('/update',indexController.userUpdate)
router.get('/delete',indexController.userDelete)

module.exports = router