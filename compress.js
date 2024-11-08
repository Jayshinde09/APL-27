var fs = require("fs");  
var zlib = require('zlib');  

fs.createReadStream('input.txt')  
  .pipe(zlib.createGzip())  
  .pipe(fs.createWriteStream('Compressed_input.txt.gz'));  
  console.log("File Compressed.");  