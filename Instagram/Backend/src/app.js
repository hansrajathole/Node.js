const express = require('express');
const userRouter = require("./routes/user.routes")
const postRouter = require("./routes/post.routes")
const indexRouter = require("./routes/index.routes")
const cors = require("cors")

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use("/",indexRouter)
app.use("/user",userRouter)
app.use("/post",postRouter)



module.exports = app