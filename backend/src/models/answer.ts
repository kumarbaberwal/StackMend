import mongoose from "mongoose";

const AnswerSchema = new mongoose.Schema({
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    votes: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });