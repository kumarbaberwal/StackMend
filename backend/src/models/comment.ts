import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
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
    comment: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export const Comment = mongoose.model('Comment', CommentSchema);