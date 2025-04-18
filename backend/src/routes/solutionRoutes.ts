import express from "express"
import { veryfyToken } from "../middlewares/authMiddleware";
import { deleteSolution, getAllSolutionsByErrorId, submitSolution } from "../controllers/solutionControllers";

const router = express.Router()
router.post('/', veryfyToken, submitSolution)
router.get('/:id', veryfyToken, getAllSolutionsByErrorId)
router.delete('/:id', veryfyToken, deleteSolution)

export default router;