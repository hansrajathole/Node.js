const config = require('../config/config')
const mongoose = require('mongoose');

// Connect to MongoDB
const Connect = ()=>{
    mongoose.connect(config.MONGO_URI)
   .then(() => console.log('MongoDB Connected...'))
   .catch(err => console.log(err));
}

module.exports = Connect;