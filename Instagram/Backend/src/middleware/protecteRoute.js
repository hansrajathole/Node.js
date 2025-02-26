import jwt from "jsonwebtoken";
import User from "../model/user.model.js";
import config from "../config/config.js";
import redis from '../services/redis.service.js';

export const protecteRoute = async (req, res, next) => {
    try {

        const token = req.headers.authorization?.split(" ")[1] || req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }
        const decoded = jwt.verify(token, config.JWT_SECRET);
        
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).json({ message: "Unauthorized: User not found" });
        }

        req.user = user;
        next();

    } catch (error) {
        console.error("JWT Verification Error:", error.message);

        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({ message: "Unauthorized: Invalid token" });
        }
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Unauthorized: Token expired" });
        }

        res.status(500).json({ message: "Server Error" });
    }
};


