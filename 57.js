const express = require('express');
const app = express();
const xss = require('xss');

app.get('/hello', (req, res) => {
    const name = xss(req.query.name || 'Guest');
    res.send(`Hello, ${name}`);
});

app.listen(3010, () => console.log('Server running on port 3010'));
