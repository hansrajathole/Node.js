import { GoogleGenerativeAI } from "@google/generative-ai"
import config from "../config/config.js";

const genAI = new GoogleGenerativeAI(config.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-lite" });

async function generateContent(prompt) {
    try {
        const result = await model.generateContent(prompt);
        console.log(result);
    
        return result.response.text();
    
    } catch (error) {
        console.log(error);
        return error
        
    }
}

export default generateContent