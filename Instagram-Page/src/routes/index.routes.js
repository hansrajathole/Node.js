const express = require('express')
const router = express.Router()
const userMiddlerware = require("../middleware/user.middleware")
const indexController = require("../controllers/index.controller")
router.get("/feed", userMiddlerware.authUser, indexController.feedController)


module.exports = router