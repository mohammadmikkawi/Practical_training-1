// challenge23.js
const os = require('os');
console.log("Platform:", os.platform());
console.log("CPUs:", os.cpus().length);
console.log("Total memory MB:", os.totalmem() / (1024*1024));
