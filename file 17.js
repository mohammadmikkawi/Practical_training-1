const fs = require('fs');
const zlib = require('zlib');
fs.createReadStream('big.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('big.txt.gz'));
