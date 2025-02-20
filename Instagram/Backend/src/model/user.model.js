const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: { 
        type: String,
        required: true, 
        unique: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    profilePicture: { 
        type: String,
        default: 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'  // default profile picture if no picture is provided by the user
    },
    posts : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    followers: [
        {   
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            default : [0]
        }
    ],
    following: [
        {   
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            default : [0]
        }
    ],
    bio : {
        type: String,
    },
    likes : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post',
            default : [0]
        }
    ],
    

}, { timestamps: true })


const userModel = mongoose.model('User', userSchema)
module.exports = userModel