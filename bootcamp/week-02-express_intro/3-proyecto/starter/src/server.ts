import { createApp } from './app.js';

const PORT = process.env.PORT ?? '3000';
const app = createApp();

const server = app.listen(Number(PORT), () => {
  console.log(`[server] Running on http://localhost:${PORT}`);
  console.log(`[server] Health: http://localhost:${PORT}/health`);
  console.log(`[server] API v1: http://localhost:${PORT}/api/v1/enrollments`);
});

function shutdown(signal: string): void {
  console.log(`\n[server] ${signal} recibido, cerrando servidor...`);
  server.close(() => {
    console.log('[server] Servidor cerrado correctamente');
    process.exit(0);
  });
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));