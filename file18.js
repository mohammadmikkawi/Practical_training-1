const fs = require('fs');
const rs = fs.createReadStream('big.txt');
const ws = fs.createWriteStream('copy.txt');

rs.on('data', chunk => {
    if (!ws.write(chunk)) {
        rs.pause();
    }
});
ws.on('drain', () => rs.resume());
rs.on('end', () => ws.end());
