import Koa from 'koa';
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';
import { useResponseFormatter } from './middlewares/responseFormatter';
import helloRouters from './routes/hello';

const app = new Koa();
const router = new Router();

router.get('/', (ctx) => {
  ctx.body = 'Hello Koa TypeScript Scaffold!';
});

app
  .use(
    bodyParser({
      formLimit: '30mb',
      jsonLimit: '30mb',
    })
  )
  .use(useResponseFormatter())
  .use(helloRouters('/api'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
