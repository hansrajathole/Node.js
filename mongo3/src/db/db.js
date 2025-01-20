const mongoose = require('mongoose')

const connect = function(){
    mongoose.connect('mongodb://0.0.0.0/WhatsApp')
    .then(()=>{
        console.log("connected to database")
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = connect