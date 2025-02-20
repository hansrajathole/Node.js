const express  = require('express');
const router = express.Router()
const userController = require("../controllers/user.controller")
const protecteRoute = require("../middleware/protecteRoute")


router.post("/register",userController.registerController)
router.post("/login",userController.loginController)
router.get("/profile",protecteRoute,userController.profileController)


module.exports = router