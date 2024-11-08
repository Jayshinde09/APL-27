const fs = require('fs');
const filePath = './Hello.txt';

fs.writeFile(filePath, 'Hello. I am Soham.', (err) => {
    if (err) {
        console.log('Error writing to file:', err);
    } else {
        console.log('File written successfully.');
    }
});
