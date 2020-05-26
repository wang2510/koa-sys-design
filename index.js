import Koa from 'koa';
import KoaRouter from 'koa-router';
import bodyParser from 'koa-bodyparser';
import query from './database/util/query';

// New dependencies
const app = new Koa();
const router = new KoaRouter();

// / Register bodyParser in middleware
app.use(bodyParser());

// An example of get text
// from http://localhost:3000/
router.get('/', (ctx, next) => {
  ctx.body = 'Welcome! -xiaowangzi';
  next();
});

// An example of throw 500 error
// from http://localhost:3000/error-example
router.get('/error-example', (ctx, next) => {
  ctx.throw(500, 'Error Message');
  next();
});

// An example of parse request body
// from posting http://localhost:3000/users
router.post('/users', (ctx, next) => {
  ctx.body = ctx.request.body;
  next();
});

// An example of request with Path param
// for example http://localhost:3000/users/1
router.put('/users/:id', (ctx, next) => {
  ctx.body = ctx.params;
  next();
});

// An example of request with query param
// for example http://localhost:3000/users-with-param?id=1&name=Jay
router.put('/users-with-param', (ctx, next) => {
  ctx.body = ctx.request.query;
  next();
});

// An example of db query request handler
// http://localhost:3000/db-test
router.get('/db-test', async (ctx, next) => {
  try {
    const res = await query('SELECT * FROM course');
    ctx.body = res;
    next();
  } catch (e) {
    ctx.throw(500, `Error running db query:${e}`);
  }
});

// Register routes in middleware
app.use(router.routes())
  .use(router.allowedMethods());

// Start monitoring @ 3000 port
app.listen(3000);
