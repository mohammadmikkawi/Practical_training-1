const express = require('express');
const app = express();

const server = app.listen(3024, () => console.log('Server running'));

process.on('SIGINT', () => {
    console.log('SIGINT received, shutting down...');
    server.close(() => {
        console.log('HTTP server closed');
        process.exit(0);
    });
});
