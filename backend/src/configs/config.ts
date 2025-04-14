import dotenv from 'dotenv';
dotenv.config();

export const ENV_VARS = {
    PORT: process.env.PORT!,
    MONGO_URI: process.env.MONGO_URI!,
    JWT_SECRET: process.env.JWT_SECRET!,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY!,
}