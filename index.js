import 'dotenv/config';
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { TavilySearchResults } from "@langchain/community/tools/tavily_search";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { MemorySaver } from "@langchain/langgraph";

import { createReactAgent } from "@langchain/langgraph/prebuilt";

//here i defined tools
const agentTools = [new TavilySearchResults({ maxResults: 3 })];
const agentModel = new ChatGoogleGenerativeAI({ model: "gemini-2.0-flash", temperature: 0 });


// initialize memory to persist state between graph runs
const agentCheckpointer = new MemorySaver();
const agent = createReactAgent({
  llm: agentModel,
  tools: agentTools,
  checkpointSaver: agentCheckpointer,
});

// Now it's time to use!
const agentFinalState = await agent.invoke(
    { messages: [new HumanMessage("what is the current weather in sf")] },
    { configurable: { thread_id: "42" } },
  );
  
  console.log(
    agentFinalState.messages[agentFinalState.messages.length - 1].content,
  );
  
  const agentNextState = await agent.invoke(
    { messages: [new HumanMessage("what about ny")] },
    { configurable: { thread_id: "42" } },
  );
  
  console.log(
    agentNextState.messages[agentNextState.messages.length - 1].content,
  );

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




