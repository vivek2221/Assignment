import mongoose from "mongoose";
import 'dotenv/config'
await mongoose.connect(process.env.mongooseConnectionString)
const registrationSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Full name is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    role: {
        type: String,
        enum: ['User', 'Admin', 'Manager'],
        default: 'User'
    }
});

const ModelRegister = mongoose.model('register', registrationSchema);

export { ModelRegister };