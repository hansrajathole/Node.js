const mongoose = require('mongoose')
const connect = ()=>{
    mongoose.connect("mongodb://0.0.0.0/sales")
    .then(()=>{
        console.log("database connnect successfully");
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = connect