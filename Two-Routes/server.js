const app = require("./src/app")
const connect = require("./src/db/db")
require("dotenv").config()
const port = process.env.PORT

app.listen(port,function(){
    console.log("server is running on 3000 port");
    connect()
})