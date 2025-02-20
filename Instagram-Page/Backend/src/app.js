const express = require('express');
const app = express();
const userRoutes = require("./routes/users.routes")
const postRoutes = require("./routes/post.routes")
const indexRoutes = require("./routes/index.routes")
const cors = require("cors")
app.use(express.json())
app.use(express.urlencoded( {extended : true }))
app.use(cors())

app.use('/', indexRoutes)
app.use('/users', userRoutes)
app.use('/post', postRoutes)

module.exports = app;