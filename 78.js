const { Worker, MessageChannel } = require('worker_threads');

const { port1, port2 } = new MessageChannel();
port1.on('message', msg => console.log('Main got:', msg));

const worker = new Worker(`
const { parentPort, workerData } = require('worker_threads');
workerData.postMessage('Hello from worker');
`, { eval: true, workerData: port2, transferList: [port2] });
