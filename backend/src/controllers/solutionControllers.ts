import { Request, Response } from "express";
import { Solution } from "../models/solution";

export const submitSolution = async (req: Request, res: Response): Promise<any> => {
    try {
        const { errorId, userId, solution } = req.body;
        if (!errorId || !userId || !solution) {
            return res.status(400).json({
                message: "Please provide all fields",
            });
        }

        const newSolution = new Solution({
            errorId,
            userId: req.user.userId,
            solution,
        })

        await newSolution.save()

        res.status(201).json(newSolution)
    } catch (error) {
        console.log("Error submitting Solution: ", error);
        res.status(500).json({
            message: "Error submitting solution",
        })
    }
}

export const getAllSolutionsByQuestionId = async (req: Request, res: Response): Promise<any> => {
    try {
        const errorId = req.params.id;


        if (!errorId) {
            return res.status(400).json({
                message: "Error not found"
            })
        }

        const page = parseInt(req.query.page as string, 10) || 1
        const limit = parseInt(req.query.limit as string, 10) || 5
        const skip = (page - 1) * limit

        const solutions = await Solution.find()
            .sort({ votes: -1 })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .populate('userId', 'username profileImage reputation role')

        const totalSolutions = await Solution.countDocuments()

        res.status(200).json({
            solutions: solutions,
            currentPage: page,
            totalSolutions: totalSolutions,
            totalPages: Math.ceil(totalSolutions / limit)
        })
    } catch (error) {
        console.log("Error in fetching all solutions for the error: ", error);
        res.status(500).json({
            message: "Error in fetching all solutions for the error",
        })
    }
}

export const deleteSolution = async (req: Request, res: Response): Promise<any> => {
    try {
        const solution = await Solution.findById(req.params.id)

        if (!solution) {
            return res.status(404).json({
                message: "Solution not found",
            })
        }

        // check if user is the submitter of the error

        if (solution.userId.toString() !== req.user.userId.toString()) {
            return res.status(401).json({
                message: "Unauthorized"
            })
        }

        await solution.deleteOne()

        res.status(200).json({
            message: "Solution deleted successfully"
        })
    } catch (error) {
        console.log("Error in deleting solution: ", error)
        res.status(500).json({
            message: "Error in deleting solution",
        })
    }
}
