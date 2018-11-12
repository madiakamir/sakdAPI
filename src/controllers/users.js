const user = require('../users/user');

async function getUser(ctx){
  ctx.body = user;
  ctx.end;
}

async function addUser(ctx){

}

module.exports = {getUser}
