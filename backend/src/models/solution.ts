import mongoose from "mongoose";

const SolutionSchema = new mongoose.Schema({
    errorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Error',
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    soulution: {
        type: String,
        required: true,
    },
    votes: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });

export const Solution = mongoose.model('Solution', SolutionSchema);