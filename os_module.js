const os = require('os');

console.log('Hostname:', os.hostname());

console.log('Total Memory:', os.totalmem());

console.log('Operating System type : ' + os.type());

console.log('platform : ' + os.platform());

console.log('Available memory : ' + os.freemem() + " bytes.");