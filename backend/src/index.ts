import cors from 'cors';
import express, { Request, Response } from 'express';
import { ENV_VARS } from './configs/config';
import { connectDB } from './databases/db';
import authRouter from './routes/authRoutes';
import errorRouter from './routes/errorRoutes';
import solutionRouter from './routes/solutionRoutes';
// import { cronJob } from './utils/cron';

const app = express();
// cronJob.start();
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: "Hi.. Kumar"
    })
})

app.use('/auth', authRouter);
app.use('/error', errorRouter);
app.use('/solution', solutionRouter);

const PORT = ENV_VARS.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
    connectDB();
})