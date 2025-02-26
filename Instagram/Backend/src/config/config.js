import dotenv from 'dotenv';
dotenv.config();
const _config = {
    PORT: process.env.PORT || 3000,
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/instagramDB',
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPAIRE_IN : process.env.JWT_EXPAIRE_IN || '1d',
    REDIS_HOST: process.env.REDIS_HOST, 
    REDIS_PORT: process.env.REDIS_PORT,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD

};

const config = Object.freeze(_config);
export default config;