const mongoose = require('mongoose')
mongooose.connect('mongodb://localhost:27017')
.then(()=>{
    console.log('connected to db');
})
.catch((err)=>{
    console.log(err);
})

const userSchema = new mongoose.Schema({
    username : String,
    email : String,
    age : Number
})

mongoose.model("user",userSchema)