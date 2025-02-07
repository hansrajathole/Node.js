require("dotenv").config()
const app = require("./src/app")
const connect = require("./src/database/db")

const PORT = process.env.PORT

app.listen(PORT,function(){
    console.log("server is running on 3000 port");
    connect()
})

