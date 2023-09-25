const C = require('./test-module');
//module.export
const calculator = new C();

console.log(calculator.add(1,2));
//export
// const calc2 = require('./test-module-1');
const {add,multiply} = require('./test-module-1')
console.log(multiply(1,2));

require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();