const fs = require("fs");
const dirPath = "./Directory";

fs.readdir(dirPath, (err, files) => {
  if (err) {
    console.log("Error reading Directory:", err);
  } else {
    console.log("Files in directory:");
    files.forEach((file) => {
      console.log("\t" + file);
    });
  }
});
