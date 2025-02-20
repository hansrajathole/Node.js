require('dotenv').config();
const _config = {
    PORT: process.env.PORT || 3000,
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/instagramDB',
    JWT_SECRET: process.env.JWT_SECRET
};

const config = Object.freeze(_config);
module.exports = config;