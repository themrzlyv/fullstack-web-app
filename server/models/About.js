import mongoose from 'mongoose'

const AboutSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: [30, 'Name must be min 3 character']
    },
    job: {
        type: String,
        required: true,
        maxlength: [30, 'Job must be min 3 character']
    },
    description: {
        type: String,
        required: true,
        maxlength: [200, 'Name must be max 200 character']
    }
})

export default mongoose.models.About || mongoose.model("About" , AboutSchema);