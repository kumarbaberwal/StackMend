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
    votes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // stores users who liked the error
    }],
    views: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // stores users who viewed the error
    }],
}, { timestamps: true });

export const Error = mongoose.model('Error', ErrorSchema);