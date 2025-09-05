const fs = require('fs').promises;

async function main() {
    try {
        const [aData, bData] = await Promise.all([
            fs.readFile('a.txt', 'utf-8'),
            fs.readFile('b.txt', 'utf-8')
        ]);
        const totalBytes = Buffer.byteLength(aData) + Buffer.byteLength(bData);
        console.log(`Total bytes of both files: ${totalBytes}`);
    } catch (err) {
        console.error("Error reading files:", err);
    }
}

main();
