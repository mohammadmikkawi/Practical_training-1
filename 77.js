const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
    const worker = new Worker(__filename);
    worker.on('message', msg => console.log('Fib result:', msg));
} else {
    function fib(n) { return n<2 ? n : fib(n-1)+fib(n-2); }
    parentPort.postMessage(fib(20));
}
