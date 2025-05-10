import { Request, Response } from "express";
import { Error } from "../models/error";

export const submitError = async (req: Request, res: Response): Promise<any> => {
    try {
        const { title, description, language, tags } = req.body;
        if (!title || !description || !language || !tags) {
            return res.status(400).json({
                message: "Please provide all fields",
            });
        }

        const newError = new Error({
            title,
            description,
            language,
            tags,
            userId: req.user.userId,
        })

        await newError.save()

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