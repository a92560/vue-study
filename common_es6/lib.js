let name = 'Darren';
module.exports = name;

setTimeout(() => {
  name = 'Darren2';
  module.exports = name;
  console.log(module.exports, 'module.exports');
}, 2000)
