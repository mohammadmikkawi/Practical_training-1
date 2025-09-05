
const fs = require('fs');
fs.readFile(__filename, () => {
    setImmediate(() => console.log('after-read'));
});
