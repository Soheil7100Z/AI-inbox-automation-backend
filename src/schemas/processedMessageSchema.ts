import { z } from 'zod';

export const processedMessageSchema = z.object({
  category: z.enum(['delivery', 'billing', 'technical', 'general']),

  priority: z.enum(['low', 'medium', 'high']),

  intent: z.string(),

  confidence: z.number().min(0).max(1),

  extractedData: z.object({
    orderNumber: z.string().nullable(),
    product: z.string().nullable(),
  }),

  recommendedAction: z.string(),

  response: z.string(),
});

export type ProcessedMessage = z.infer<typeof processedMessageSchema>;
