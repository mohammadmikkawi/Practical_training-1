const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

function verifyJWT(req, res, next) {
    const auth = req.headers['authorization'];
    if (!auth) return res.status(401).send('No token');
    const token = auth.split(' ')[1];
    jwt.verify(token, 'secret123', (err, decoded) => {
        if (err) return res.status(403).send('Invalid token');
        req.user = decoded;
        next();
    });
}

app.get('/protected', verifyJWT, (req, res) => {
    res.send(`Hello user ${req.user.userId}`);
});

app.listen(3014, () => console.log('Server running on port 3014'));
