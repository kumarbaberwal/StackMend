import OpenAI from "openai";
import { ENV_VARS } from "../configs/config";

const openai = new OpenAI({
    apiKey: ENV_VARS.OPENAI_API_KEY,
});


export const generateErrorSolution = async (): Promise<string> => {
    try {
        const response = await openai.chat.completions.create({
            model: "chatgpt-4o-latest",
            messages: [
                {
                    "role": "user",
                    "content": `Generate a solution for the given error.`
                },
            ],
            max_tokens: 50,
        });

        console.log("Generate Error Solution - OpenAi Called: ");
        // Extract the content
        let content = response.choices[0]?.message?.content?.trim()!;

        // Extract only the solution using a regex pattern
        const solutionMatch = content.match(/["“](.*?)["”]/); // Match text inside quotes
        const solution = solutionMatch ? solutionMatch[1] : content;

        console.log(solution);
        return solution.trim();

    } catch (error) {
        console.error('Error generating error solution: ', error);
        return "No solution provided by the AI";
    }
}