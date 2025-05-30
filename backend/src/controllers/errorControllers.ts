import { Request, Response } from "express";
import { Error } from "../models/error";
import { generateErrorSolution } from "../services/goggleGenerativeAiService";
import { Solution } from "../models/solution";
import { Vote } from "../models/vote";

export const submitError = async (req: Request, res: Response): Promise<any> => {
    try {
        const { title, description, language, tags } = req.body;
        if (!title || !description || !language || !tags) {
            return res.status(400).json({
                message: "Please provide all fields",
            });
        }
        const aiGeneratedSolution = await generateErrorSolution(`${title}\n\n${description}`);

        const newError = await Error.create({
            title,
            description,
            language,
            tags,
            userId: req.user.userId,
            aiGeneratedSolution,
        });

        res.status(201).json(newError)
    } catch (error) {
        console.log("Error submitting error: ", error);
        res.status(500).json({
            message: "Error submitting error",
        })
    }
}

export const getAllErrors = async (req: Request, res: Response): Promise<any> => {
    try {
        const page = parseInt(req.query.page as string, 10) || 1
        const limit = parseInt(req.query.limit as string, 10) || 5
        const skip = (page - 1) * limit

        const errors = await Error.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .populate('userId', 'username email profileImage reputation role')

        const totalErrors = await Error.countDocuments()

        res.status(200).json({
            errors,
            currentPage: page,
            totalErrors,
            totalPages: Math.ceil(totalErrors / limit)
        })
    } catch (error) {
        console.log("Error in fetching all errors: ", error);
        res.status(500).json({
            message: "Error in fetching all errors",
        })
    }
}

export const deleteError = async (req: Request, res: Response): Promise<any> => {
    try {
        const error = await Error.findById(req.params.id)

        if (!error) {
            return res.status(404).json({
                message: "Error not found",
            })
        }

        // check if user is the submitter of the error

        if (error.userId.toString() !== req.user.userId.toString()) {
            return res.status(401).json({
                message: "Unauthorized"
            })
        }

        await error.deleteOne()

        res.status(200).json({
            message: "Error deleted successfully"
        })
    } catch (error) {
        console.log("Error in deleting error: ", error)
        res.status(500).json({
            message: "Error in deleting error",
        })
    }
}


export const getAllErrorsByUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const errors = await Error.find({ userId: req.user.userId }).sort({ createdAt: -1 })
        res.status(200).json(errors)
    } catch (error) {
        console.log("Error in getting users error: ", error)
        res.status(500).json({
            message: "Server Error"
        })
    }
}

export const getDetailedErrorById = async (req: Request, res: Response): Promise<any> => {
    try {
        const errorId = req.params.id;
        const currentUserId = req.user.userId; // assuming user is attached to req

        // Step 1: Get error details with user info
        const error = await Error.findById(errorId)
            .populate('userId', 'username email profileImage reputation role')
            .lean();

        if (!error) {
            return res.status(404).json({ message: "Error not found" });
        }

        // Step 2: Update views count only if viewer is not the one who posted it
        if (currentUserId && error.userId._id.toString() !== currentUserId.toString()) {
            await Error.findByIdAndUpdate(errorId, { $inc: { views: 1 } });
        }

        // Step 3: Get all solutions for this error with user info
        const solutions = await Solution.find({ errorId })
            .populate('userId', 'username profileImage')
            .lean();

        // Step 4: Enrich solutions with vote data
        const enrichedSolutions = await Promise.all(
            solutions.map(async (solution) => {
                const [upvotes, downvotes] = await Promise.all([
                    Vote.countDocuments({ solutionId: solution._id, vote: 'upvote' }),
                    Vote.countDocuments({ solutionId: solution._id, vote: 'downvote' })
                ]);

                return {
                    ...solution,
                    upvotes,
                    downvotes,
                };
            })
        );

        return res.status(200).json({
            error,
            solutions: enrichedSolutions,
        });

    } catch (error) {
        console.error("Error in getting detailed error info:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};