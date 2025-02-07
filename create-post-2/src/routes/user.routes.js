const express = require("express")
const router = express.Router()
const controller = require("../controllers/user.controller")
const jwt = require("jsonwebtoken")

router.post("/register",controller.userRegisterController)
router.get("/login",controller.loginGetController)
router.post("/login",controller.loginController)
router.get("/feed", async(req,res,next)=>{
    try {
        console.log("verifing user....");
        const token = req.cookies.token

        if(!token){
            res.send("You are not authorized")
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        console.log("user verified")

        next()
        
    } catch (error) {
        console.log("user not verified")
        res.send("You are not authorized")
    }
},controller.feedController)
router.get("/create-post",controller.createController)
router.post("/create-post",controller.createPostController)
router.get("/delete/:id",controller.deleteController)
router.get("/logout",controller.logoutController)
module.exports = router

