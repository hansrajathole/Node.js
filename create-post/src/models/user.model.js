const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username :{
        type: String,
        required : true
    },
    email : {
        type : String
    },
    profileImg :{
        type :String
    },
    bio :{
        type : String
    }
})

const userModel =  mongoose.model("userData",userSchema)
module.exports = userModel