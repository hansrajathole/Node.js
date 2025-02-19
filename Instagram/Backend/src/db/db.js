const mongoose = require('mongoose');

// Connect to MongoDB
const Connect = ()=>{
    mongoose.connect('mongodb://0.0.0.0/instagramDB')
   .then(() => console.log('MongoDB Connected...'))
   .catch(err => console.log(err));
}

module.exports = Connect;