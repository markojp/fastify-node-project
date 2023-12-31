import Fastify from 'fastify';

const responseSchema = {
  response: {
    200: {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
      required: ['message'],
    },
  },
};

const build = (opts = {}) => {
  const fastify = Fastify(opts);

  fastify.get('/', { schema: responseSchema }, async (req, reply) => {
    return { message: 'hello world' };
    //reply.code(200).send({ message: 'hello world' });
  });

  return fastify;
};

export default build;
