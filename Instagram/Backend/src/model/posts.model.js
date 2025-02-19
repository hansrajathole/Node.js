const mongoose = require('mongoose')


const postsSchema = new mongoose.Schema({
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