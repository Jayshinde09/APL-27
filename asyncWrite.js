const fs = require("fs");

console.log("writing into existing file");
fs.writeFile("input.txt", "Hello, Soham Here!!", function (err) {
    if (err) {
        return console.error(err);
    }

    console.log("\tData written successfully!");
    console.log("\tLet's read newly written data");

    fs.readFile("input.txt", function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("\tAsynchronous read: " + data.toString());
    });
});
