const fs = require('fs').promises;

async function demo() {
    const readExisting = fs.readFile('a.txt', 'utf-8');
    const readMissing = fs.readFile('missing.txt', 'utf-8');


    try {
        const first = await Promise.race([readExisting, readMissing]);
        console.log("Race result:", first.length);
    } catch (err) {
        console.log("Race error:", err.message);
    }


    const results = await Promise.allSettled([readExisting, readMissing]);
    results.forEach((res, i) => {
        if(res.status === "fulfilled") {
            console.log(`File ${i} length:`, res.value.length);
        } else {
            console.log(`File ${i} failed:`, res.reason.message);
        }
    });
}

demo();
