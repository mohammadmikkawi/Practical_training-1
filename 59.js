const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser('secret123'));

app.get('/set', (req, res) => {
    res.cookie('sid', '12345', { signed: true });
    res.send('Signed cookie set');
});

app.get('/read', (req, res) => {
    res.send(`Cookie value: ${req.signedCookies.sid}`);
});

app.listen(3012, () => console.log('Server running on port 3012'));
