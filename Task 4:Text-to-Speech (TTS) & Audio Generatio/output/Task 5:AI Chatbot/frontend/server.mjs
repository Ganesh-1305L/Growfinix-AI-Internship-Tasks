import 'dotenv/config';
import express from 'express';
import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

const app = express();

app.use(express.json());

app.post('/api/chat', async (req, res) => {
  if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    return res.status(500).json({
      error: 'Google API key is missing. Check your .env file.',
    });
  }

  try {
    const messages = req.body.messages;

    if (!Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid messages format.' });
    }

    const result = streamText({
      model: google('gemini-3.8-flash'),
      messages: messages.map((message) => ({
        role: message.role,
        content: message.content,
      })),
    });

    result.pipeTextStreamToResponse(res);
  } catch (error) {
    console.error('Chat error:', error);

    if (!res.headersSent) {
      res.status(500).json({
        error: 'Unable to generate a response. Please try again.',
      });
    }
  }
});

const port = Number(process.env.PORT) || 3001;

app.listen(port, () => {
  console.log(`AI chat backend running at http://localhost:${port}`);
});
