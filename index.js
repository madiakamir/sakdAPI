const Koa = require('koa');
const router = require('./src/users/routes');
const app = new Koa();

app.use(router);


app.listen(5000);
