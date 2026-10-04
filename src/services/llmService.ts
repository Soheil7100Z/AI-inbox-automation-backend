import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const analyzeMessage = async (message: string): Promise<string> => {
  const response = await openai.responses.create({
    model: 'gpt-6-luna',
    input: message,
  });

  return response.output_text;
}
