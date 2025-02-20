const express  = require('express');
const router = express.Router()
const indexController = require("../controllers/index.controller")
const protecteRoute = require("../middleware/protecteRoute")


router.get("/feed",protecteRoute,indexController.feedController)


module.exports = router