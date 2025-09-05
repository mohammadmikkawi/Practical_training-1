// challenge9.js
const fs = require('fs/promises');
(async () => {
    await fs.writeFile('result.json', JSON.stringify({ ok: true }));
})();
