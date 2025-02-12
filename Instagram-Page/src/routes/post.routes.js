const express = require("express")
const router = express.Router()
const userMiddlerware = require("../middleware/user.middleware")
const postController = require("../controllers/posts.controller")

router.post("/create", userMiddlerware.authUser,postController.createPostController)


module.exports= router




