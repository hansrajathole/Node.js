import express from "express"
import * as userController from "../controllers/user.controller.js"
import * as protecteRoute from "../middleware/protecteRoute.js"
import * as userMiddleware from "../middleware/user.middleware.js"
import { body } from "express-validator"
const router = express.Router()

router.post("/register",userMiddleware.registerValidator, userController.registerController)
router.post("/login",userMiddleware.loginUserValidator , userController.loginController)
router.get("/profile",protecteRoute.protecteRoute, userController.profileController)
router.get("/logout",protecteRoute.protecteRoute, userController.logoutController )

export default router