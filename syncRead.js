const fs = require("fs");

// Synchronous read
const data = fs.readFileSync('input.txt');
console.log("\tSynchronous read: " + data.toString());