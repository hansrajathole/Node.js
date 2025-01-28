require("dotenv").config()
const app = require("./src/app")
const connect = require("./src/database/db")
connect()
const port = 3000

app.listen(port,function(){
    console.log("server started");
})