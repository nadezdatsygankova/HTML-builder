
const fs = require("fs");
const path = require('node:path');
const pathFile = path.join('03-files-in-folder', 'secret-folder');



fs.readdir(pathFile,
  { withFileTypes: true },
  (err, files) => {
    console.log("\nCurrent directory files:");
    if (err)
      console.log(err);
    else {
      files.forEach(file => {
        let current = file.name.split('.');
        if (!file.isDirectory()) {
          const pathsToCheck = path.join(pathFile, file.name);
          fs.stat(pathsToCheck, (error, stats) => {
            if (error) {
              console.log(error);
            }
            else {
              console.log(`${current[0]} -  ${path.extname(file.name).slice(1)} - ${stats.size / 1000} kb`)
            }
          });

        }
      }
      )
    }
  })
