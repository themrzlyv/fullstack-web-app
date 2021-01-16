import {valid} from "../../helpers/validation.js";
import Navbar from "../../models/Navbar.js"

export default async (req,res,next) => {
    const {id} = req.params
    const {title,adress} = req.body

    try {
        const errMsg = valid(title,adress)

        if(errMsg) return res.status(400).json({success: false, error: errMsg})

        const navbar = await Navbar.findByIdAndUpdate({_id:id} , {title,adress} , {new: true})

        res.status(200).json({navbar , message: "Navbar updated successfully"})
    } catch (error) {
        res.status(500).json({message: error || "Internal Server Error"})
    }
}