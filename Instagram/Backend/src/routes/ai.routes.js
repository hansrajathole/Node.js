import { Router } from "express";
import generateContent from "../services/ai.service.js"
const router = Router()

router.get("/", async function(req,res){
    const prompt = req.query.prompt
    
    const response = await generateContent(prompt)
    console.log(response);
    
    res.json({message : response})
})


export default router