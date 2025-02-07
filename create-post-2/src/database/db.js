const mongoose = require("mongoose")

const connect = function(){
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("database was connnected");
        
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = connect