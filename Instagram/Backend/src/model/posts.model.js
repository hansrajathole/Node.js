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
    }
})

const postModel = mongoose.model('Post', postsSchema)
module.exports = postModel