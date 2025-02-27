import Post from "../model/posts.model.js"
import User from "../model/user.model.js"

export const createController = async (req,res) => {

    try {
        const media = req.body.image.url
        const {caption} = req.body
        
        const userId = req.user._id
        if(!media) return res.status(400).json({message: "media is required"})
        if(!caption) return res.status(400).json({message: "caption is required"})
            
        const newPost = new Post({
            user: userId,
            media, 
            caption
        })
        await newPost.save()
        const user = await User.findOneAndUpdate({_id : req.user._id},{
            $push: {posts: newPost._id}
        })
        console.log(user);
        res.status(201).json({message: "Post Created successfully", postData: newPost})
        
    }
     catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal Server Error"})
        
    }
}


export const likesController = async (req,res) => {
    try {
        const postId = req.params.id
        const userId = req.user._id
        
        const post = await Post.findById(postId)
        if(!post) return res.status(404).json({message: "Post not found"})
        
        if(post.likes.includes(userId)){
            post.likes.pull(userId)
        } else {
            post.likes.push(userId)
        }
        await post.save()
        
        res.status(200).json({message: "Like updated successfully", postData: post})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal Server Error"})
        
    }
}
