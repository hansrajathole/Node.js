const userModel = require('../models/user.model')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
const config = require("../config/config")
module.exports.registerUserController = async function  (req , res){
    try {
        const {username , email, password} = req.body
    
        if(!username){

            return res.status(400).json({message : "Username is required"})
            
        }

        if(!email){
            return res.status(400).json({message : "Email is required"})
        }

        if(!password){
            return res.status(400).json({message : "Password is required"})
        }

        const isUserExist = await userModel.findOne({
            $or : [
                {username : username},
                {email : email}
            ]
        })

        if(isUserExist){
            return res.status(400).json({message : "User already exist"})
        }


        const hashedPassword = await userModel.hashPassword(password)

        const user = new userModel({
            username : username,
            email : email,
            password : hashedPassword
        })

        await user.save()

        const token = user.generateToken()


        res.status(200).json({message : "User registered successfully", token : token})


    } catch (error) {
        console.error(error)
        res.status(500).json({message : "Internal Server Error"})
    }
}

module.exports.loginUserController = async function (req , res){
    try {
        const {email, password} = req.body
    
        if(!email){
            return res.status(400).json({message : "Email is required"})
        }
        
        if(!password){
            return res.status(400).json({message : "Password is required"})
        }
        
        const isUserExist = await userModel.findOne({email : email})
        
        if(!isUserExist){
            return res.status(400).json({message : "Invalid credentials"})
        }
    
        const isMatch = await userModel.comparePassword(password,isUserExist.password)
        
        if(!isMatch){
            return res.status(400).json({message : "Invalid credentials"})
        }
        
        
        const token = isUserExist.generateToken()
        console.log(token);
        
        res.status(200).json({message : "Logged in successfully", token : token})
    
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal Server Error", })
    }

}

module.exports.profileUserController = async function (req , res){

    res.send(req.user)
}