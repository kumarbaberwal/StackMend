import express from "express"
import { veryfyToken } from "../middlewares/authMiddleware";
import { deleteError, getAllErrors, getAllErrorsByUser, getDetailedErrorById, submitError } from "../controllers/errorControllers";

const router = express.Router()
router.post('/', veryfyToken, submitError)
router.get('/', veryfyToken, getAllErrors)
router.delete('/:id', veryfyToken, deleteError)
router.get('/user', veryfyToken, getAllErrorsByUser)
router.get('/detailed/:id', veryfyToken, getDetailedErrorById);

export default router;