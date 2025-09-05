const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream('data.csv'),
    crlfDelay: Infinity
});

rl.on('line', line => {
    const [name, age] = line.split(',');
    console.log(JSON.stringify({ name, age }));
});
