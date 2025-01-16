const app = require('./src/app')
require("./src/db/db")
const port = 3000

app.listen(port,function(){
    console.log("server is listening on port number 3000");
})