import 'dotenv/config';
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";


//this i made for logging into langsmith
// sETUP: Create and configure the client once.
const llm = new ChatGoogleGenerativeAI({
    model: "gemini-1.5-flash",
});


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




