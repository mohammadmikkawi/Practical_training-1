const EventEmitter = require('events');
const emitter = new EventEmitter();
let count = 0;
emitter.on('ping', () => {
    count++;
    console.log("ping", count);
});
emitter.emit('ping');
emitter.emit('ping');
