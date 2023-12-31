const PORT = process.env.PORT || 5000;

import build from './src/app.js';

const envToLogger = {
  development: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
  production: true,
  test: false,
};

const server = build({
  logger: envToLogger.development ?? true,
});

const start = async () => {
  try {
    await server.listen({ port: PORT, host: '127.0.0.1' });
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

start();
