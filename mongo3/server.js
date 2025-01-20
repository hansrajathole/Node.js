const app = require('./src/app')
const connect = require('./src/db/db')
connect()
const port = 3000

app.listen(port,function(){
    console.log("server is running on port number 3000");
})