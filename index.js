module.exports.execute = function(codeParsed){
  try{
    eval(module.exports.fromBase64(codeParsed));
  }catch(e){
    throw new Error(e);
  }  
};
module.exports.encode = function(code){
  try{
    const jwt = require('jsonwebtoken');
    const compiledCode = module.exports.toBase64(module.exports.toBase64(code));
    var token = jwt.sign({ base64: compiledCode }, 'decodscript1245gdf');
    return token;
  }catch(e){
    throw new Error(e);
  }  
};
module.exports.decode = function(code){
  try{
    const jwt = require('jsonwebtoken');
    var CodeDe = jwt.verify(code, 'decodscript1245gdf');
    if(CodeDe.base64 !== undefined){
      return module.exports.execute(module.exports.fromBase64(CodeDe.base64));
    }else{
      throw new Error('Error Encoded Code invalid');
    }
  }catch(e){
    throw new Error(e);
  }  
};
module.exports.fromBase64 = function(base64){
  try{
    var buf = Buffer.from(base64, 'base64');
    return buf.toString('ascii');
  }catch(e){
    throw new Error(e);
  }  
};
module.exports.toBase64 = function(base64){
  try{
    let buff = new Buffer(base64);
    return buff.toString('base64');;
  }catch(e){
    throw new Error(e);
  }  
};