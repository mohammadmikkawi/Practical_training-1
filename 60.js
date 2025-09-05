const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'user' && password === 'pass') {
        const token = jwt.sign({ userId: 1 }, 'secret123', { expiresIn: '1h' });
        res.json({ token });
    } else res.status(401).send('Invalid credentials');
});

app.listen(3013, () => console.log('Server running on port 3013'));
