const fs = require('fs');
fs.writeFileSync('out.txt', 'Hello\n');
fs.appendFileSync('out.txt', 'World\n');
