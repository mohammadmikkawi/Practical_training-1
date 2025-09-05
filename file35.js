async function retry(fn, times) {
    let lastError;
    for(let i=0; i<times; i++){
        try {
            return await fn();
        } catch (err) {
            lastError = err;
            console.log(`Attempt ${i+1} failed`);
        }
    }
    throw lastError;
}


const fs = require('fs').promises;

async function test() {
    try {
        const content = await retry(() => fs.readFile('a.txt', 'utf-8'), 3);
        console.log("File read successfully, length:", content.length);
    } catch(err) {
        console.log("All attempts failed:", err.message);
    }
}

test();
