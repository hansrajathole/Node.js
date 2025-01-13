const { name } = require("ejs")
const express = require("express")
const path = require("path")
const app = express()

app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({ extended : true}))

app.use(express.static(path.join(__dirname,"public")))

app.get("/",function(req,res){
    const data = [{
        name : "Hansraj",
        email : "hansraj@gmail.com"
    },{
        name : "athole",
        email : "athole@gmail.com"
    }]

    res.render("home",{data : data})
})
app.get("/form",function(req,res){
    res.render("index")
})

app.get("/profile",function(req,res){
    res.render("profile")
})

app.post("/create",function(req,res){
    console.log(req.body); 
    res.send("working")
})

app.get("*",function(req,res){
    res.render('not-found')
})

app.listen(3000)