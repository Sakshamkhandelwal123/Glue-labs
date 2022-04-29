const validator = require('validator')

const writeAndappend = require('./server.js');
writeAndappend();

console.log(validator.isEmail('sakshamkhandelwal2001@gmail.com'));
console.log(validator.isEmail('saksham@gmail'));

console.log(process.argv);