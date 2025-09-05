const text = "Hello World";
const base64 = Buffer.from(text).toString('base64');
console.log('Base64:', base64);

const decoded = Buffer.from(base64, 'base64').toString('utf-8');
console.log('Decoded:', decoded);
