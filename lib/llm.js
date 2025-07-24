import 'dotenv/config';
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

// ⚙️ SETUP: Create and configure the client once.
const llm = new ChatGoogleGenerativeAI({
    model: "gemini-1.5-flash",
});

// EXPORT: Make the client available to the rest of the app.
export { llm };