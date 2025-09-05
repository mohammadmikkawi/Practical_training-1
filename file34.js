async function safe(asyncFn) {
    try {
        const data = await asyncFn();
        return [null, data];
    } catch (err) {
        return [err, null];
    }
}

const fs = require('fs').promises;

async function test() {
    const [err, data] = await safe(() => fs.readFile('a.txt', 'utf-8'));
    if(err) console.error("Error:", err.message);
    else console.log("Data length:", data.length);
}

test();
