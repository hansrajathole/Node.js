import mongoose from "mongoose";

const commentSchema = mongoose.Schema( {
    text: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
        required : true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required : true,
    },
    post : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Post",
        required : true

    }
})


const Comment = mongoose.model("Comment" , commentSchema)
export default Comment