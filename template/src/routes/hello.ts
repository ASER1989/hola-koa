import Router from '@koa/router';
import type { Context } from 'koa';

export default (prefix: string) => {
  const router = new Router({ prefix });

  router.get('/', async (ctx: Context) => {
    return 'Hello World!';
  });

  router.get('/hello', async (ctx: Context) => {
    return 'hello world';
  });

  return router.routes();
};
