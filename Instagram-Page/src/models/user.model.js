const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim : true,
        minlength: [3, "Username must be at least 3 characters long"],
        maxlength: [20, "Username must be at most 20 characters long"]
    },  

    email: {
        type: String,
        required: true,
        unique: true,
        trim : true,
        minlength: [5, "Email must be at least 5 characters long"],
        maxlength: [20, "Email must be at most 50 characters long"]
    }, 

    password: {
        type: String
    },

    profilePicture: {
        type: String,
        default: "https://imgs.search.brave.com/X7XPq0yunGvlrkH7gP12GzAcbLpgJ9-xhHWwA9RtyRQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzMzLzU0Lzc4/LzM2MF9GXzYzMzU0/Nzg0Ml9BdWdZemV4/VHBNSjl6MVljcFRL/VUJvcUJGMENVQ2sx/MC5qcGc"
    },

    // posts: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'post'
    // }],


    // followers:[{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'user'
    // }],

    // followings:[{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'user'
    // }],

});

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;
