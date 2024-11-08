const util = require('util');
const fs = require('fs');

const readFile = fs.readFile;

const readFileAsync = util.promisify(readFile);

readFileAsync('example.txt', 'utf8')
    .then((data) => {
        console.log('File content:\n',data);
    })
    .catch((err) => {
        console.error('Error reading file:', err);
    });
