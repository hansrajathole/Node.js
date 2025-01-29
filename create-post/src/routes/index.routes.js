const express = require("express")
const router = express.Router()
const indexController = require("../controllers/index.controller")

router.get("/",indexController.indexController)
router.get("/home",indexController.homeController)
router.get("/login",indexController.loginController)
router.get("/singup",indexController.createUser)
router.post("/login/user",indexController.loginUserController)
router.get("/create",indexController.createController)
router.post("/create-post",indexController.createPostController)
router.get("/home/like/:id",indexController.likePost)
router.get("/home/delete/:id",indexController.deletePost)
module.exports = router