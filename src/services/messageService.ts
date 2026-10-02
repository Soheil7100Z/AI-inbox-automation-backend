import type { ProcessedMessage } from '../types/messageType.js';

export const messageService = async (message: string): Promise<ProcessedMessage> => {
  console.log('Nachricht ist: ',message);

  const testResult: ProcessedMessage = {
    category: 'delivery',
    priority: 'medium',
    intent: 'Track shipment',
    confidence: 0.94,
    extractedData: {
      orderNumber: '48392',
      product: 'headphones',
    },
    recommendedAction: 'Sendungsstatus prüfen und den Kunden informieren.',
    response:
      'Guten Tag, vielen Dank für Ihre Nachricht. Wir prüfen gerne den Status Ihrer Bestellung und informieren Sie anschließend über den aktuellen Stand.',
  };

  return testResult;
};
