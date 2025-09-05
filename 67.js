const io = require('socket.io')(3023);

io.on('connection', socket => {
    socket.join('room1');
    socket.on('message', msg => {
        io.to('room1').emit('message', msg);
    });
});
