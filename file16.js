const fs = require('fs');
const rl = require('readline').createInterface({
    input: fs.createReadStream('input.txt')
});
let lines = 0;
rl.on('line', () => lines++);
rl.on('close', () => console.log("Lines:", lines));
