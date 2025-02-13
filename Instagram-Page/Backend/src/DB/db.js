const mongoose = require('mongoose');
const config = require('../config/config');

const connect = () => {
    mongoose.connect(config.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    }) .catch((error)=> {
        console.error('Error connecting to MongoDB:', error.message);
    })
};  

module.exports = connect;