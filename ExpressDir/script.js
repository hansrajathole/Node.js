const express = require('express')
const app = express()

// let port = 3000 
// app.listen(port,()=>{
//     console.log("app listening on port ");
// })

// app.use((req, res) =>{
//   console.log('Hello World')
// })


app.get("/", function(req,res){
    res.send("something abut main page")
})

app.get("/about", function(req,res){
    res.send("something about About page")
})

app.get("*",function(req,res){
    res.send("if nothin word , i will")
})

app.listen(3000)