import { z } from "zod";

export const processMessageSchema = z.object({
  message: z.string().min(1, "Die Nachricht darf nicht leer sein"),
});

export type ProcessMessageInput = z.infer<typeof processMessageSchema>;
