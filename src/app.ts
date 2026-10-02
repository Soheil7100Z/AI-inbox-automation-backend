import express from 'express';
import cors from 'cors';

import messageRoutes from './routes/messageRoutes.js';

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'DELETE'],
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.send('AI Inbox Automation backend is running!');
});

app.use('/api', messageRoutes);

export default app;
