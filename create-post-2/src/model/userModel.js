const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username :{
        type : String,
        unique : true,
    },
    profileImage : {
        type : String
    }, 
    email : {
        type:String
    },

    password : {
        type : String
    }

})

const userModel = mongoose.model("userData",userSchema)
module.exports = userModel