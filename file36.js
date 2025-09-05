const express = require('express');
const app = express();

app.use(express.json());

app.post('/sum', (req, res) => {
    const { a, b } = req.body;
    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ message: 'Invalid input' });
    }
    res.json({ sum: a + b });
});

app.listen(3000, () => console.log('Server running on port 3000'));
