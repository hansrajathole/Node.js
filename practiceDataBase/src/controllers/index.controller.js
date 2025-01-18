
const driverModule = require('../models/driver.model')

module.exports.indexController = function(req, res){
    res.send("index page")
}

module.exports.registerController = async function(req,res){
    const {username , password , email} = req.query
      
    const newDriver = new driverModule({
        username : username,
        email : email,
        password : password
    })
    console.log(newDriver);
    
    await newDriver.save()
    res.send(newDriver)
}

module.exports.userFind = async function(req,res){
    const user = await driverModule.find({
        password : "gokul"
    })
  
    res.send(user)
}

module.exports.userUpdate = async function(req,res){
    const update = await driverModule.updateOne({
        username : "tarzan"
    },{
        username : "pankaj"
    })
    console.log(update);
    
    res.send(update)
}

module.exports.userDelete = async function(req, res ){
    const deleted = await driverModule.findOneAndDelete({
        password : "hemant"
    })

    res.send("deleted")
}