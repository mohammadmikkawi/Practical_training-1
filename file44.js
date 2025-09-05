const express = require('express');
const app = express();

app.use('/static', express.static('public'));

app.listen(3007, () => console.log('Server running on port 3007'));
