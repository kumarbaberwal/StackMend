import { Router } from "express";
import { login, register } from "../controllers/authControllers";
import { veryfyToken } from "../middlewares/authMiddleware";

const router = Router();

router.post('/register', register);
router.post('/login', login);


export default router;