const EventEmitter = require('events');
const emitter = new EventEmitter();

const log1 = () => console.log('log1');
const log2 = () => console.log('log2');

emitter.on('event', log1);
emitter.on('event', log2);

emitter.removeListener('event', log2);
emitter.emit('event');
