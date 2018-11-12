const Koa = require('koa');
const json = require('koa-json');
const router = require('./src/app/index');
require('dotenv').config();

const PORT = process.env.PORT;
const app = new Koa();


app.use(json());
app.use(router);


app.listen(PORT, () => console.log(`server start on ${PORT}`));
