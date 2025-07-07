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
    solution: {
        type: String,
        required: true,
    },
    votes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
}, { timestamps: true });

export const Solution = mongoose.model('Solution', SolutionSchema);