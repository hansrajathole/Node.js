const mongoose = require('mongoose')

const driverSchema = new mongoose.Schema({
    username : String,
    password : String,
    email : String
})

const driverModule = mongoose.model("driver",driverSchema)
module.exports = driverModule