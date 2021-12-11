# NodeJS Script Encoding Protect your codes
### What's new
** The default seceret key can now be changed
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
console.log(nodeScriptenc.encode(code,"custom seceret key (optional)")); <-- encoded output
```

### Decoding scripts
```js
const nodeScriptenc = require('nodescriptencryption');
nodeScriptenc.decode("code here","custom seceret key (optional)");
```
