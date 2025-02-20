const User = require("../model/user.model")
const Post = require("../model/posts.model")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

module.exports.registerController = async function(req, res){
    const {username, email, password} = req.body

    try {
    
    if(!username){
        return res.status(400).json({message: "username is required"})
    }
    
    if(!email){
        return res.status(400).json({message: "email is required"})
    }
    
    if(!password){
        return res.status(400).json({message: "password is required"})
    }

    const user = await User.findOne({
        $or: [{username}, {email}]
    })
    
    if(user){
        return res.status(400).json({message: "user already exists"})
    }

    const hashedPassword = await bcrypt.hash(password,10)

    const newUser = new User({
        username,
        email,
        password: hashedPassword
    })
    
    await newUser.save()

    const token = await jwt.sign({
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
       
    },"token")

    console.log("user registered successfully");
    
    res.json({message: "User registered successfully", token: token})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal Server Error"})
    }
}
module.exports.loginController = async function(req, res){
    const {email, password} = req.body
    try {
        
        if(!email) {
            return res.status(400).json({message: "email is required"})
        }
        
        if(!password) {
            return res.status(400).json({message: "password is required"})
        }
        
        const user = await User.findOne({email})
        
        if(!user) {
            return res.status(401).json({message: "Invalid email or password"})
        }

        const isMatch = await bcrypt.compare(password, user.password)
        
        if(!isMatch) {
            return res.status(401).json({message: "Invalid email or password"})
        }
        
        const token = await jwt.sign({
            id: user._id,
            username: user.username,
            email: user.email,
        },"token")
        
        console.log("user logged in successfully");
        
        res.json({message: "User logged in successfully", token: token})

    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal Server Error"})   
    }
}

module.exports.profileController = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-password").populate("posts")
        if(!user) return res.status(404).json({message: "User not found"})
            
        res.status(200).json({message: "user data found", userData : user})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal Server Error"})
    }
    
}


module.exports.createController = async (req,res) => {

    try {
        const {media , caption } = req.body
        const useerId = req.user._id
        if(!media) return res.status(400).json({message: "media is required"})
        if(!caption) return res.status(400).json({message: "caption is required"})
            
        const newPost = new Post({
            user: useerId,
            media, 
            caption
        })
        await newPost.save()
        await User.findOneAndUpdate(req.user._id,{
            $push: {posts: newPost._id}
        })
        res.status(201).json({message: "Post Created successfully", postData: newPost})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal Server Error"})
        
    }
}

module.exports.feedController = async (req,res) => {
    try {
        const posts = await Post.find().populate("user")
        
        if(!posts) {
            return res.status(404).json({message: "No posts found"})
        }
        res.status(200).json({message: "user feed data found", posts})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal Server Error"})
    }
}