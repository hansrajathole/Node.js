import express from "express"
import * as postController from "../controllers/post.controller.js"
import {protecteRoute} from "../middleware/protecteRoute.js"
import * as postMiddleware from "../middleware/post.middleware.js"
import multer from "multer"
import imagekit from "../services/imagekit.service.js"
import mongoose from "mongoose"

const router = express.Router()

const storage = multer.memoryStorage()
const upload = multer({ storage })

router.post("/create",protecteRoute, upload.single("media"),postMiddleware.createPost , postController.createController )
router.patch("/update/:id",protecteRoute, postController.likesController)



export default router