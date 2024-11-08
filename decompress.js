var fs = require("fs");  
var zlib = require('zlib');  

fs.createReadStream('input.txt.gz')  
  .pipe(zlib.createGunzip())  
  .pipe(fs.createWriteStream('Decompressed_input.txt'));  
  console.log("File Decompressed.");  