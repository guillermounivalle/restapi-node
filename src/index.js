const app =require ('./app');
const config = require('./config');

async function main(){
  await app.listen(config.port);
  console.log('server is running port ===>'+ config.port)
}

main();