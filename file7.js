const fs = require('fs');
const data = fs.readFileSync('data.txt');
console.log("Sync bytes:", data.length);

fs.readFile('data.txt', (err, buf) => {
    if (err) throw err;
    console.log("Async bytes:", buf.length);
});
