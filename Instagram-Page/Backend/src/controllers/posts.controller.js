
const postModel = require("../models/posts.model");
const userModel = require("../models/user.model");
module.exports.createPostController = async (req, res)=>{
    const {media , caption} = req.body
    console.log(req.user);
    
    if(!media){
        return res.status(400).json({message : "media is required"})
    }
    if(!caption){
        return res.status(400).json({message : "caption is required"})
    }

    const newPost = await postModel.create({
        media,
        caption
    })

    const id = req.user._id

    await userModel.findByIdAndUpdate(id,{
        $push :{
            posts : newPost._id
        }
    })


    
    
    res.status(201).json({message : newPost})
}