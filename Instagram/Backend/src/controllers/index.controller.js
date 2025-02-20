const User = require("../model/user.model")
const Post = require("../model/posts.model")

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