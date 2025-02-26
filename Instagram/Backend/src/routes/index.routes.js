import express from "express"
import {feedController} from "../controllers/index.controller.js"
import {protecteRoute} from "../middleware/protecteRoute.js"

const router = express.Router()

router.get("/feed",protecteRoute,feedController)


export default router