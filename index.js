import { llm } from './lib/llm.js';
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

const model = new ChatGoogleGenerativeAI({
    model: "gemini-2.0-flash",
    temperature: 0
});

const messages = [
    new SystemMessage("Translate the following from English into hindi"),
    new HumanMessage("hi! this is me Arpit Solanki"),
];
const result2 = await model.invoke(messages);
console.log(result2);




