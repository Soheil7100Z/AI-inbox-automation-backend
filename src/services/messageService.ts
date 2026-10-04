import type { ProcessedMessage } from '../types/messageType.js';
import { analyzeMessage } from "./llmService.js";

export const messageService = async (message: string): Promise<string> => {
  console.log('Nachricht ist: ', message);

  return await analyzeMessage(message);
};
