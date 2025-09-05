const express = require('express');
const app = express();

app.get('/', (req, res) => {
    throw new Error('Something went wrong!');
});

// Centralized error handler
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({ message: err.message });
});

app.listen(3005, () => console.log('Server running on port 3005'));
