import express from 'express'
import aboutRouter from './about.js';
import navbar from './navbar.js';



const routers = express.Router();


// http://localhost:3050/api/    in this location now

routers.get("/", (req,res) => {
    res.send("Suprise Madafaka")
})

routers.use("/navbar" , navbar)
routers.use("/about" , aboutRouter)

export default routers;