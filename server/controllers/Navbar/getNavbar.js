import Navbar from "../../models/Navbar.js"

export default async (req,res,next) => {
    
    try {
        const navbar = await Navbar.find()
        res.status(200).json(navbar)
    } catch (error) {
        res.status(500).json({message: error || "Internal Server Error"})
    }
}