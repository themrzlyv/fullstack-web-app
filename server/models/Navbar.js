import mongoose from 'mongoose';

const NavSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: [15,'Title must be max 15 character']
    },
    adress: {
        type: String,
        required: true,
        minlength: [1,'Title must be min 1 character']
    }
})

export default mongoose.models.Navbar || mongoose.model('Navbar' , NavSchema);