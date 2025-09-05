const express = require('express');
const app = express();

const rateLimit = {};
const MAX = 60;

app.use((req, res, next) => {
    const ip = req.ip;
    const now = Date.now();
    if (!rateLimit[ip]) rateLimit[ip] = [];
    rateLimit[ip] = rateLimit[ip].filter(t => now - t < 60000);
    if (rateLimit[ip].length >= MAX) return res.status(429).send('Too many requests');
    rateLimit[ip].push(now);
    next();
});

app.get('/', (req, res) => res.send('Hello'));
app.listen(3011, () => console.log('Server running on port 3011'));
