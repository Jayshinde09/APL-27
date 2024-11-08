const fs = require('fs');
const dirPath = './Directory';

fs.mkdir(dirPath, (err) => {
    if (err) {
        console.log('Error creating directory:', err);
    } else {
        console.log('Directory created successfully.');
    }
});