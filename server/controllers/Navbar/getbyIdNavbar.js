import Navbar from "../../models/Navbar.js";

export default async (req,res,next) => {
    const {id} = req.params;
    try {
        const navbar = await Navbar.findById({_id: id});
        res.status(200).json(navbar)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error || "Internal Server Error"})
    }
}