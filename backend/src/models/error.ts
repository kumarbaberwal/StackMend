import mongoose from "mongoose";

const ErrorSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    tags: {
        type: [{ type: String }],
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    aiGeneratedSolution: {
        type: String,
    },
    votes: {
        type: Number,
        default: 0,
    },
    views: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });


export const Error = mongoose.model('Error', ErrorSchema);