const express = require('express')
const app = express()
const router = require('./routes/index.routes')
const path = require('path')
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/',router)

app.set("views", path.join(__dirname,"views"))
app.set('view engine' , "ejs")
app.use(express.static(path.join(__dirname , "public/CSS")))
module.exports = app    