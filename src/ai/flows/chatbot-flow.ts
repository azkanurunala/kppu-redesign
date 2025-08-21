
'use server';

/**
 * @fileOverview A chatbot flow for answering questions about KPPU.
 *
 * - chat - A function that handles the chatbot interaction.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const ChatInputSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.array(z.object({
        text: z.string()
    }))
  })).describe("The conversation history."),
  message: z.string().describe("The user's latest message."),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

export type ChatOutput = string;

export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatbotPrompt',
  input: { schema: ChatInputSchema },
  prompt: `You are a helpful AI assistant for the Komisi Pengawas Persaingan Usaha (KPPU) of Indonesia.
Your role is to provide clear, concise, and accurate information to users regarding business competition, Indonesian law (specifically UU No. 5/1999 and UU No. 20/2008), and the functions of KPPU.
Be professional, helpful, and answer only in Bahasa Indonesia.
Do not answer questions outside of this scope. If a user asks something unrelated, politely decline and steer the conversation back to KPPU-related topics.

Here is the conversation history:
{{#each history}}
  {{#if (eq this.role 'user')}}
    User: {{this.content.[0].text}}
  {{/if}}
  {{#if (eq this.role 'model')}}
    Assistant: {{this.content.[0].text}}
  {{/if}}
{{/each}}

User's new message: {{{message}}}

Assistant:`,
  config: {
    custom: {
      helpers: {
        eq: (a:any, b:any) => a === b,
      }
    }
  }
});

const chatbotFlow = ai.defineFlow(
  {
    name: 'chatbotFlow',
    inputSchema: ChatInputSchema,
    outputSchema: z.string(),
  },
  async (input) => {
    const { output } = await prompt(input);
    return output ?? "Maaf, saya tidak dapat memproses permintaan Anda saat ini.";
  }
);
