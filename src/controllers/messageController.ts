import type { Request, Response } from 'express';
import { messageService } from '../services/messageService.js';
import { processMessageSchema } from '../schemas/messageSchema.js';

export const messageController = async (req: Request, res: Response): Promise<void> => {
  const result = processMessageSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({ error: 'Ungültige Anfrage!', details: result.error.issues });
    return;
  }

  const { message } = req.body;

  try {
    const processedMessage = await messageService(message);
    console.log('Beispiel für eine KI-Antwort ist: ', processedMessage);

    res.status(200).json(processedMessage);
  } catch (error) {
    console.error('Fehler bei der Verarbeitung der Nachricht:', error);

    res.status(500).json({
      error: 'Die Nachricht konnte nicht verarbeitet werden!',
    });
  }
};
