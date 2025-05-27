import dotenv from 'dotenv';
dotenv.config();

export const ENV_VARS = {
    PORT: process.env.PORT!,
    MONGO_URI: process.env.MONGO_URI!,
    JWT_SECRET: process.env.JWT_SECRET!,
    GEMINI_API_KEY: process.env.GEMINI_API_KEY!,
}