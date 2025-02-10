const express = require('express')
const routes = express.Router()
const userController = require("../controllers/users.controller")
const userMiddlerware = require("../middleware/user.middleware")

routes.post("/register",userController.registerUserController)
routes.post("/login",userController.loginUserController)

routes.get("/profile",userMiddlerware.authUser, userController.profileUserController)

module.exports = routes