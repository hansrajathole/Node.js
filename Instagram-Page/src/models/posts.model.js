const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    media :{
        type : String,
        required : true
    },
    caption :{
        type : String,
        required : true
    }
})

const postModel = mongoose.model("post",postSchema)
module.exports = postModel