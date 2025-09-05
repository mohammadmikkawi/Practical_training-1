const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3022 });

wss.on('connection', ws => {
    ws.on('message', message => {
        ws.send(`server: ${message}`);
    });
});
