const router = require('koa-router')();
const user = require('../controllers/users');


router.get('/getUser', user.getUser);



module.exports = router.routes();
