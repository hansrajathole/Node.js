const express = require('express')
const path = require("path")
const app = express()

// let port = 3000 
// app.listen(port,()=>{
//     console.log("app listening on port ");
// })

// app.use((req, res) =>{
//   console.log('Hello World')
// })

app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"public")))

app.get("/", function(req,res){
    res.render("index")
})

app.get("/about", function(req,res){
    res.send("something about About page")
})

app.get("*",function(req,res){
    res.send("if nothin word , i will")
})

app.listen(3000)