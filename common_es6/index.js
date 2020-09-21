let name = require('./lib');
// const lib1 = require('./lib');

console.log(name, 'name');
name = 'Darren3';

setTimeout(() => {
  name = require('./lib');
  console.log(name, 'name');
}, 3000)


