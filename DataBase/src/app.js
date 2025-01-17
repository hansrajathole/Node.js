const express = require('express')
const indexRouter = require('./routers/index.routes')
const app = express()

app.use('/',indexRouter)
// app.use('/register',registerRouter)
module.exports = app