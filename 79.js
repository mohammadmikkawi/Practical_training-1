const { performance, PerformanceObserver } = require('perf_hooks');

performance.mark('start');
setTimeout(() => {
    performance.mark('end');
    performance.measure('Timeout', 'start', 'end');
}, 100);

const obs = new PerformanceObserver(list => console.log(list.getEntries()));
obs.observe({ entryTypes: ['measure'] });
