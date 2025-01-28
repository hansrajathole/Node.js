const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    postImage :{
        type: String,
        required : true
    },
    caption : {
        type : String
    },
    likes : {
        type : Number,
        default : 0
    },
})

const postModel =  mongoose.model("postData",postSchema)
module.exports = postModel