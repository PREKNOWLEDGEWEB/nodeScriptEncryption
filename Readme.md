# NodeJS Script Encoding Protect your codes
### Usage
```js
const nodeScriptenc = require('nodescriptencryption');
```
### Encoding scripts
```js
const nodeScriptenc = require('nodescriptencryption');
const code =  `
  console.log('hi');
`
console.log(nodeScriptenc.encode(code)); <-- encoded output
```

### Decoding scripts
```js
const nodeScriptenc = require('nodescriptencryption');
nodeScriptenc.decode("code here");
```