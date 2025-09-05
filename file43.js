const express = require('express');
const app = express();

app.use(express.json());

app.post('/users', (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: 'Email is required' });
    res.json({ message: `User ${email} created` });
});

app.listen(3006, () => console.log('Server running on port 3006'));
