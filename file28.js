const { setTimeout } = require('timers/promises');
const ac = new AbortController();

setTimeout(5000, null, { signal: ac.signal })
    .then(() => console.log("done"))
    .catch(() => console.log("aborted"));

setTimeout(1000).then(() => ac.abort());
