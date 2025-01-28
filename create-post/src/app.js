const express = require("express")
const app = express()
const router = require("./routes/index.routes")

/* xk6VJRDFAMobQlV9 */
/*mongodb+srv://hasnrajathole:xk6VJRDFAMobQlV9@cluster1.hmdw4.mongodb.net/ */
//target to mongodb server 
// use username
// use password
// cluster is a server 

app.set("view engine","ejs")
app.set("views","./src/views")    
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use("/",router)

module.exports = app
