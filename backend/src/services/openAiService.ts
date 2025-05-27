import OpenAI from "openai";
import { ENV_VARS } from "../configs/config";

const openai = new OpenAI({
    apiKey: ENV_VARS.OPENAI_API_KEY,
});

export const generateErrorSolution = async (errorDescription: string): Promise<string> => {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o",  // Simplified model name
            messages: [
                {
                    role: "system",
                    content: "You are a helpful programming assistant. Given an error description, provide a possible solution."
                },
                {
                    role: "user",
                    content: `Error Details:\n${errorDescription}\n\nPlease suggest a possible solution to fix this error.`
                },
            ],
            max_tokens: 200,
        });

        console.log("Generate Error Solution - OpenAI Called");

        let content = response.choices[0]?.message?.content?.trim() || "No solution found.";

        console.log("AI Generated Solution:", content);
        return content;
    } catch (error) {
        console.error('Error generating error solution: ', error);
        return "No solution provided by the AI";
    }
};
