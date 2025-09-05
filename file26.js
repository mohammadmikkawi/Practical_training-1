const b1 = Buffer.from("Hello");
const b2 = Buffer.from("World");
console.log(Buffer.concat([b1, b2]).toString());
