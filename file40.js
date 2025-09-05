const express = require('express');
const app = express();

app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    res.json({ id });
});

app.listen(3003, () => console.log('Server running on port 3003'));
