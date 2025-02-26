import mongoose from 'mongoose'

const postsSchema = new mongoose.Schema({
    user :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    media :{
        type: String,
        required: true
    },
    caption : {
        type: String,
        required: true
    },
    likes : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            default : [0]
        }
    ],
    Comment : [
        {
            text: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment",
            },
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                default: [0]
            }
        }    
    ]
}, { timestamps: true })

const postModel = mongoose.model('Post', postsSchema)

export default postModel