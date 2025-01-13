const express = require("express")
const path = require('path')
let app = express()

let port = 3000

app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"views")))


app.get("/",function(req,res){
    res.send("this is home page")
})
app.get("/ig/:username",function(req,res){
    let instaData = require('./data.json')
    const {username} = req.params
    const data = instaData[username]
    console.log(data);
    
    res.render("instagram",{ data:data })


})

app.listen(port,function(){
    console.log("chal rha hai");
    
})

