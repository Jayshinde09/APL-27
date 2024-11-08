const fs = require('fs');
var buffer = Buffer.alloc(1024);

fs.open('input.txt', 'r', function(err, fd) {
    if (err) {
        console.log(err);
        return;
    }
    fs.read(fd, buffer, 0, buffer.length, 0, function(err, bytesRead) {
        if (err) {
            throw err;
        } else {
            console.log("\t"+buffer.toString('utf-8', 0, bytesRead));
        }
    });
});