require("dotenv").config()
const app = require("./src/app")
const connect = require("./src/database/db")
const bcrypt = require("bcrypt")
connect()
const port = 3000

app.listen(port, async function(){
    console.log("server started");
    
    const salt = await bcrypt.genSalt(12);
    console.log(salt);
    const hashedPassword = await bcrypt.hash("password", 10)
    const hashedPassword2 = await bcrypt.hash("password", salt) 
    console.log(hashedPassword);    
    console.log(hashedPassword2);

})