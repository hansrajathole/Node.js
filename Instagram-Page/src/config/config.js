const _config = {
    PORT: process.env.PORT || 3000,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/instagram-page',
    JWT_SECRET: process.env.JWT_SECRET
};

const config = Object.freeze(_config);
module.exports = config;