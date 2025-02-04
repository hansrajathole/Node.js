const express = require("express")
const router = express.Router()
const userContoller = require("../controller/user.controller")


router.get("/",userContoller.userContoller)
router.post("/create",userContoller.createUser)
router.post("/login",userContoller.loginController)
router.get("/profile",userContoller.profileController)

module.exports = router