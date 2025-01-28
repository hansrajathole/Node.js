const mongoose = require("mongoose")

const connect = ()=>{

    // console.log(process.env.MONGO_URL);
    
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Connected to the database");
        
    }).catch((err)=>{
        console.log(err);
        
    })
}

module.exports = connect