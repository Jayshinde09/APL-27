const fs = require("fs");

// Asynchronous read
fs.readFile("input.txt", function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("\tAsynchronous read: " + data.toString());
});