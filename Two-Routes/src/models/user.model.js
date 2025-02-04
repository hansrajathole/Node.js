const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username :{
        type: String,
        unique : [true, "username is already exist"],
        required : [true, "username is required"],
        match : [/^[a-zA-Z0-9]+$/,"username must be alphanumeric"]  
    },
    email :{
        type : String,
        unique : [true, "email is already exist"],
        required : [true, "email is required"],
        match : [/^\S+@\S+\.\S+$/,"email is invalid"]
    },
    password : {
        type : String
    }
})

const userModel = mongoose.model("user",userSchema)
module.exports = userModel