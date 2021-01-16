import About from "../../models/About.js";


export default async (req,res,next) => {
    const {id} = req.params;
    try {
        const about = await About.findById({_id: id})
        res.status(200).json(about)
    } catch (error) {
        res.status(500).json({message: error || "Internal Server Error"})
    }
}