const express = require('express');
const app = express();

app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`${req.method} ${req.url} - ${duration}ms`);
    });
    next();
});

app.get('/', (req, res) => res.send('Hello World'));

app.listen(3004, () => console.log('Server running on port 3004'));
