const fs = require('fs').promises;

async function main() {
    try {
        const data = await fs.readFile('a.txt', 'utf-8');
        console.log(`Length of file: ${data.length}`);
    } catch (err) {
        console.error("Error reading file:", err);
    }
}

main();
