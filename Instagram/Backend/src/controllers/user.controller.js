import User from "../model/user.model.js"
import Post from "../model/posts.model.js"
import config from "../config/config.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import redis from "../services/redis.service.js"
import { validationResult } from "express-validator"
import * as userService from "../services/user.service.js"

export const registerController = async function(req, res){


    const {username, email, password} = req.body

    try {

        const errors = validationResult(req)
    
        if(!errors.isEmpty()){
            return res.status(400).json({message: errors.array()[0].msg})
        }
        
        const user = await userService.createUser({
            username,
            email,
            password
        })
 
        delete user._doc.password

        const token =  user.generateToken();
        
        res.json({message: "User registered successfully", token: token, user})

    } catch (error) {
        console.log("Error in registerController: ", error.message);
        res.status(500).json({ message: error.message || "Internal Server Error" });
    }
}
export const loginController = async function(req, res){
    const {email, password , username } = req.body
    try {

        const errors = validationResult(req)
    
        if(!errors.isEmpty()){
            return res.status(400).json({message: errors.array()[0].msg})
        }

        const user = await userService.loginUser({
            username,
            email,
            password
        })
        
        const token = await user.generateToken()
        
        console.log("user logged in successfully");
        res.json({message: "User logged in successfully", token: token})

    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message || "Internal server error"})   
    }
}

export const profileController = async (req, res) => {

    try {         
        
        const posts = await Post.getAuthorPosts(req.user._id)
        console.log(posts);
        
        res.status(200).json({message: "user data found", userData : req.user , posts })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal Server Error"})
    }
    
}


export const logoutController = async (req, res) => {
    
    const timeRemainingForToken = req.tokenData.exp * 1000 - Date.now()
    console.log(timeRemainingForToken);
    
    await redis.set(`blacklist: ${req.tokenData.token}`, true , "EX" ,Math.floor(timeRemainingForToken/1000))

    res.send("logout successfully")
}