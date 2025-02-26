import express from "express"
import {registerController, loginController , profileController} from "../controllers/user.controller.js"
import {protecteRoute} from "../middleware/protecteRoute.js"
import * as userMiddleware from "../middleware/user.middleware.js"
import { body } from "express-validator"
const router = express.Router()

router.post("/register",userMiddleware.registerValidator, registerController)
router.post("/login",userMiddleware.loginUserValidator ,loginController)
router.get("/profile",protecteRoute,profileController)


export default router