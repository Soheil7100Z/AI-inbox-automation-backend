import type { ProcessedMessage } from '../schemas/processedMessageSchema.js';
import { analyzeMessage } from "./llmService.js";

export const messageService = async (message: string): Promise<ProcessedMessage> => {
  console.log('Nachricht ist: ', message);

  return await analyzeMessage(message);
};
