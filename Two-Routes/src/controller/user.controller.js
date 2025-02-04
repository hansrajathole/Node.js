const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
module.exports.userContoller = function(req, res){
    res.send("user router")
}

module.exports.createUser = async function(req, res){
    try {
        const {username, email , password} = req.body
        const hashedpassword = await bcrypt.hash(password,10)

        const newUser = await User.create({
            username,
            email,
            password : hashedpassword   
        })
        console.log(newUser);
        
        res.status(201).json({
            newUser,
            message : "user waas created successfully"
        })
    } catch (error) {
        console.log(error, "internal server problem");
        
    }
}    

module.exports.loginController = async function(req,res){
    try {
        const {email,password} = await req.body

        const user = await User.findOne({email})
        if(!user){
            res.status(400).json({
                message : "invalid username or password"
            })
        }

        const match = user && bcrypt.compare(password,user.password)
        if(!match){
            res.status(400).json({
                message : "invalid username or password"
            })
        }

        const token = jwt.sign(
            {
                _id : user._id

            },
            process.env.SECREAT_CODE
        )
        res.cookie("data",token)
        res.status(200).json({user,
            message : "login successfully",
            token
        })
    } catch (error) {
      console.log(error , " Internal server problem");
        
    }   
}

module.exports.profileController = async function(req,res){

    
}