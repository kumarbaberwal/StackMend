import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    profileImage: {
        type: String,
        default: '',
    },
    reputation: {
        type: Number,
        default: 0,
    },
    role: {
        type: String,
        enum: ['user', 'moderator', 'admin'],
        default: 'user',
    },
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);

// User => users by mongoose in mongodb