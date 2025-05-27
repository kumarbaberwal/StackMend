import { GoogleGenerativeAI } from "@google/generative-ai";
import { ENV_VARS } from "../configs/config";

const genAI = new GoogleGenerativeAI(ENV_VARS.GEMINI_API_KEY); // Use correct var name for Gemini

export const generateErrorSolution = async (errorDescription: string): Promise<string> => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const prompt = `
                        You are a helpful programming assistant.
                        Given the following error description, provide a possible solution.

                        Error Details:
                        ${errorDescription}

                        Please suggest a possible fix or steps to resolve this error.
                        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // console.log("AI Generated Solution:", text.trim());
        return text.trim();
    } catch (error) {
        console.error("Error generating error solution:", error);
        return "No solution provided by the AI.";
    }
};
