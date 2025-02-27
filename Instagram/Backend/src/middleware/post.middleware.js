import imagekit from "../services/imagekit.service.js"
import mongoose from "mongoose"
import { Readable } from "stream"


export const createPost = async (req, res,next)=>{

    try {
        
        const file = await imagekit.upload({
            file :  Readable.from(req.file.buffer),
            fileName : new mongoose.Types.ObjectId().toString("base64"),
            isPublished : true,
            isPrivateFile : false
        }) 
    
        req.body.image = file
        
        next()
    } catch (error) {
        console.log(error);
        res.status(401).json({ message : error.message })
    }
    
}