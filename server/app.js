const Koa = require('koa');
const koaBodyParser = require('koa-bodyparser')
const json  = require('koa-json')
// const path = require('path')
const router = require('./router')

const app = new Koa();

app.use(koaBodyParser());
app.use(json());
app.use(async (ctx, next) => {
    ctx.body = { msg: "Hello World", path: ctx.path, method: ctx.method };
    await next();
});
app.use(router.routes());
app.listen(3003);