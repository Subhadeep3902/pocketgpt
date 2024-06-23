import { createOpenAI } from "@ai-sdk/openai";
import { type CoreMessage, streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const groq = createOpenAI({
    baseURL: "https://api.groq.com/openai/v1",
    apiKey: process.env.GROQ_API_KEY
  });

  const { messages }: { messages: CoreMessage[] } = await req.json();

  const result = await streamText({
    model: groq("llama3-8b-8192"),
    system: "You are a helpful assistant.",
    messages,
  });

  return result.toAIStreamResponse();
}
