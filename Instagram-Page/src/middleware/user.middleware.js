const config = require("../config/config")
const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
module.exports.authUser = async(req, res, next) => {
   try {
        const token = req.headers.authorization.split(" ")[1]
    
        if(!token){
            return res.status(403).json({message: "Invalid token"})
        }
        const decoded = await userModel.verifyToken(token)

        const user = await userModel.findOne({_id: decoded.id})
        if(!user){
            return res.status(404).json({message: "User not found"})
        }
    
        req.user = user
        next()

        
   } catch (error) {
        console.log(error);
        res.status(401).json({message: "unauthorized user"})
   }

}