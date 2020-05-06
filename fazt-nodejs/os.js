const os = require('os');

console.log(os.platform());//
console.log(os.release());
console.log('free memory', `${os.freemem()} bytes`);
console.log('total mem', os.totalmem());