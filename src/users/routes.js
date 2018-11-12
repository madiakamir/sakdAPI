const router = require('koa-router')();

router.get('/users', async ctx => {
  ctx.body = "Hello World Router";
  ctx.end;
})



module.exports = router.routes();
