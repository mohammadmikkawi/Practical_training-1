require('dotenv').config();
const NODE_ENV = process.env.NODE_ENV;

if (!['dev','test','prod'].includes(NODE_ENV)) throw new Error('Invalid NODE_ENV');

console.log('Environment:', NODE_ENV);
