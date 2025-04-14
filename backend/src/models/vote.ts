import mongoose from "mongoose";

const VoteSchema = new mongoose.Schema({
    solutionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Solution',
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    vote: {
        type: String,
        enum: ['upvote', 'downvote'],
        required: true,
    },
}, { timestamps: true });

export const Vote = mongoose.model('Vote', VoteSchema);