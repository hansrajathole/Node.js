const express = require('express');
const app = express();
const userRoutes = require("./routes/user.routes")
const indexRoutes = require("./routes/index.routes");
const cookieParser = require('cookie-parser');

app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())


app.use("/",indexRoutes)
app.use("/users",userRoutes)


module.exports = app

