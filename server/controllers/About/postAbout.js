import { aboutvalid } from '../../helpers/validation.js';
import About from '../../models/About.js'

export default async (req,res,next) => {
    const {name,job,description} = req.body;

    try {
        const errMsg = aboutvalid(name,job,description)

        if(errMsg) return res.status(400).json({message: errMsg})

        const about = await new About({
            name,
            job,
            description
        }).save()
        res.status(200).json({message: "Information is accepted"})
    } catch (error) {
        res.status(500).json({message: error || "Internal Server Error"})
    }
}