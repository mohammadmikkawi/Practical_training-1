const { spawn } = require('child_process');
const child = spawn('node', ['-v']);

child.stdout.on('data', data => console.log(data.toString()));
