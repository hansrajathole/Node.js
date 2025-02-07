const express = require("express")
const indexRouter = require("./routes/index.routes")
const userRouter = require("./routes/user.routes")
const cookieParser = require("cookie-parser")


const app = express()

app.use(cookieParser())
app.set("view engine","ejs")
app.set("views","./src/views")    
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

app.use("/",indexRouter)
app.use("/users",userRouter)
module.exports = app