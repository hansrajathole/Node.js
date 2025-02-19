const express = require('express');
const userRouter = require("./routes/user.routes")
const cors = require("cors")

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use("/user",userRouter)



module.exports = app