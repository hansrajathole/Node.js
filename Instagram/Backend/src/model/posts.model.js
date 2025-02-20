const mongoose = require('mongoose')


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
})

const postModel = mongoose.model('Post', postsSchema)
module.exports = postModel