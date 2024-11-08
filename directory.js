const fs = require('fs');

// Directory path
const dirPath = './newDirectory';

// Create the directory
fs.mkdir(dirPath, (err) => {
    if (err) {
        console.log('Error creating directory:', err);
    } else {
        console.log('Directory created successfully.');
    }
});
