const express = require("express")
const path = require("path")
const app = express()

app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({ extended : true}))

app.use(express.static(path.join(__dirname,"public")))

app.get("/",function(req,res){
    res.render("index")
})

app.get("/profile",function(req,res){
    res.render("profile")
})

app.post("/create",function(req,res){
    console.log(req.body); 
    res.send("working")
})

app.listen(3000)