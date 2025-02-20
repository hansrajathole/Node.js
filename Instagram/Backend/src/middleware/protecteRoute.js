const jwt = require('jsonwebtoken');
const User = require("../model/user.model")
const config = require("../config/config")

const protected = async (req,res,next)=>{
    
    const token = req.headers.authorization?.split(" ")[1]
    
    if(!token){
        return res.status(401).json({message: "Unauthorized"})
    }

    const decoded = jwt.verify(token, config.JWT_SECRET)

    const user = await User.findById(
        decoded.id
    )
    
    if(!user){
        return res.status(401).json({message: "Unauthorized"})
    }
    
    req.user = user
    next()

}

module.exports = protected;