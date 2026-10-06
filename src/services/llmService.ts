import OpenAI from 'openai';
import { processedMessageSchema, type ProcessedMessage } from '../schemas/processedMessageSchema.js';
import { zodTextFormat } from 'openai/helpers/zod';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const analyzeMessage = async (message: string): Promise<ProcessedMessage> => {
  const response = await openai.responses.parse({
    model: 'gpt-5-mini',
    input: [
      {
        role: 'system',
        content:
          'You analyze customer messages for an automated customer service system. Extract structured information, determine the category, priority, intent, confidence, recommended action, and generate a suitable German customer response.',
      },
      {
        role: 'user',
        content: message,
      },
    ],
    text: { format: zodTextFormat(processedMessageSchema, 'processed_message') },
  });

  if (!response.output_parsed) throw new Error('AI response could not be parsed.');

  return response.output_parsed;
};
