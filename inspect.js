const util = require('util');

const obj = {
    name: 'Soham',
    age: 21,
    skills: ['JavaScript', 'Node.js', 'React']
};

const inspected = util.inspect(obj, { showHidden: false, depth: null, colors: true });
console.log(inspected); 
