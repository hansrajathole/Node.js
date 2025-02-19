const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('../config/config')
const bcrypt = require('bcrypt');
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
        maxlength: [30, "Email must be at most 50 characters long"]
    }, 

    password: {
        type: String
    },

    profilePicture: {
        type: String,
        default: "https://imgs.search.brave.com/X7XPq0yunGvlrkH7gP12GzAcbLpgJ9-xhHWwA9RtyRQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzMzLzU0Lzc4/LzM2MF9GXzYzMzU0/Nzg0Ml9BdWdZemV4/VHBNSjl6MVljcFRL/VUJvcUJGMENVQ2sx/MC5qcGc"
    },

    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post',
        default : [0]

    }],


    followers:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        default : [0]
    }],

    followings:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        default : [0]
    }],

});

userSchema.methods.generateToken = function () {
    return jwt.sign({
        id : this._id,
        username : this.username,
        email : this.email
    },config.JWT_SECRET)
}

userSchema.statics.verifyToken = function (token) {
    return jwt.verify(token, config.JWT_SECRET)
}

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10)
}

userSchema.statics.comparePassword = async function (password, hash) {
    return await bcrypt.compare(password, hash)
}

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;
