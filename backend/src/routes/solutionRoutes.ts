import express from "express"
import { veryfyToken } from "../middlewares/authMiddleware";
import { deleteSolution, getAllSolutionsByQuestionId, submitSolution } from "../controllers/solutionControllers";

const router = express.Router()
router.post('/', veryfyToken, submitSolution)
router.get('/:id', veryfyToken, getAllSolutionsByQuestionId)
router.delete('/:id', veryfyToken, deleteSolution)

export default router;