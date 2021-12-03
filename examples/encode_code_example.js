const decodeScript = require('./decodeScript.js');
const code = `
  const hello_hi = 'hello hi'; 
  console.log(hello_hi);
`;
console.log("encode to "+decodeScript.encode(code));