const userModel = require("../model/userModel")
const postModel = require("../model/postModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports.userRegisterController = async function(req, res){
   try {

        res.cookie("token","") 
        const {username, profileImage, email,password} = req.body
        console.log(password);
        
        const hashedpassword = await bcrypt.hash(password,10)

        const user = await userModel.create({
            username,
            profileImage,
            email,
            password : hashedpassword
        })
        
        res.redirect("/users/login")

   } catch (error) {
        res.status(500).send("sarver side error")
        console.log(error);
   }
}
module.exports.loginGetController = function(req, res){
    res.cookie("token","")
    res.render("login")
}
module.exports.loginController = async function(req,res){
    try {

        const {email, password} = req.body
        const user = await userModel.findOne({email : email})

        if(!user){
            return res.status(400).json("username or password invalid")
        }
        const decode = await bcrypt.compare(password,user.password)

        if(!decode){
            return res.status(400).json("username or password invalid")
        }

        let token = jwt.sign({email :email,password : password},process.env.JWT_SECRET)

        res.cookie("token",token)
        res.redirect("/users/feed")


    } catch (error) {
        res.status(500).send("sarver side error")
        console.log(error);
    }
}

module.exports.createController = function(req,res){
    res.render("post")
}

module.exports.createPostController = async function(req,res){

    await  postModel.create(req.body)
    res.redirect("/users/feed")
    
}
module.exports.feedController = async function(req,res){
    try {
        
        // const token = req.cookies.token
        // const {email,password} =  jwt.verify(token,process.env.JWT_SECRET)
        // const user  = await userModel.findOne({email : email})

        // if(!user){
        //     return res.status(400).send("invalid username or password")
        // }

        // const match = bcrypt.compare(password,user.password)
        // if(!match){
        //     return res.status(400).send("invalid username or password")
        // }

        const posts = await postModel.find()        
        res.render("feed",{posts})

    } catch (error) {
        res.status(500).send("sarver side error")
        console.log(error);
    }
}

module.exports.deleteController = async function(req,res){
    
    await postModel.findByIdAndDelete(req.params.id)

    res.redirect("/users/feed")
}

module.exports.logoutController = function(req,res){

    res.cookie("token","")
    res.redirect("/users/login")

}