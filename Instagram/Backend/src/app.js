import express from "express"
import userRouter from "./routes/user.routes.js"
import postRouter from "./routes/post.routes.js"
import indexRouter from "./routes/index.routes.js"
import aiRouter from "./routes/ai.routes.js"
import cookieParser from "cookie-parser"
import morgan from "morgan"
import cors from "cors"


const app = express();

app.use(cookieParser())
app.use(morgan("dev"))
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use("/",indexRouter)
app.use("/user",userRouter)
app.use("/post",postRouter)
app.use("/ai",aiRouter)


export default app