import {valid} from "../../helpers/validation.js";
import Navbar from "../../models/Navbar.js"


export default async (req,res,next) => {
    const {title ,adress} = req.body;

    try {
        const errMsg = valid(title,adress)

        if(errMsg) return res.status(400).json({success: false, error: errMsg})

        const navbar = await new Navbar({
            title,
            adress
        }).save()
        res.status(200).json({success: true})
    } catch (error) {
        res.status(500).json({message: error || "Internal Server Error"})
    }
}