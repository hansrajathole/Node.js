import express from "express"
import {createController ,likesController} from "../controllers/post.controller.js"
import {protecteRoute} from "../middleware/protecteRoute.js"
const router = express.Router()

router.post("/create",protecteRoute,createController)
router.patch("/update/:id",protecteRoute, likesController)



export default router