import express from 'express';
import type { Application } from 'express';
import { itemsRouter } from './routes/items.routes.js';

export function createApp(): Application {
  const app = express();

  // Middleware para parsear JSON (siempre primero)
  app.use(express.json());

  // Health check — siempre útil para verificar que el servidor corre
  app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
  });

  app.use('/api/v1/items', itemsRouter);

  return app;
}