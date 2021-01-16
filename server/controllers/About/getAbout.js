import About from '../../models/About.js'

export default async (req,res,next) => {
    try {
        const about = await About.find()
        res.status(200).json(about)
    } catch (error) {
        res.status(500).json({message: error || "Internal Server Error"})
    }
}