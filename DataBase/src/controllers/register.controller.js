const userModel = require('../models/user.model')
module.exports.registerController = async function(req,res){
    const {name , email ,password, age } = req.query

    const newUser = new userModel({
        name : name,
        email : email,
        password : password,
        age: age
    })

    await newUser.save()

    res.send(newUser)
}