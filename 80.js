const express = require('express');
const app = express();
let cache = { data: null, ts: 0 };

app.get('/data', (req,res) => {
    if (Date.now() - cache.ts < 5000) return res.send(cache.data);
    cache.data = { value: Math.random() };
    cache.ts = Date.now();
    res.send(cache.data);
});

app.listen(3050);
