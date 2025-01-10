const http = require("http")

const server = http.createServer(function(req,res){
    if(req.url === "/") res.end("home page")
    else if(req.url === "/about") res.end("about page")
    else if(req.url === "/contact") res.end("cantact page")
    else res.end("404 page not found")    
})

server.listen(3000)