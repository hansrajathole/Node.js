const express = require("express")
const path = require("path")
const app = express()
const fs = require("fs")

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static(path.join(__dirname,"public")))

app.get("/",function(req,res){
    res.send("heyy")
})
app.get("/create",function(req,res){
    const currentDate = new Date()
    const day = String(currentDate.getDate()).padStart(2, '0')
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = String(currentDate.getFullYear()).slice(-2); 
    console.log(`${day}-${month}-${year}`);

    const fn = (`${day}-${month}-${year}.txt`)

    fs.writeFile(`./files/${fn}`,"aaj ka data",function(err){
        if(err)console.log(err);
        else console.log("done");
    })



    res.send("done")
})

app.get("/read",function(req,res){
    fs.readdir("./files",function(err,files){
        res.render("home",{files})
        console.log("read file done");
    })
})

app.listen(3000,function(){
    console.log("server is running on 3000 port");
})