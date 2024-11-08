const util = require('util');

const name = 'Soham';
const age = 21;
const formattedString = util.format('Name: %s, Age: %d', name, age);

console.log(formattedString);
