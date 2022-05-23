
let fs = require('fs');
const path = require('node:path');
const fsPromises = fs.promises;
const pathFileDir = path.join('04-copy-directory', 'files');

const destDir = path.join('04-copy-directory', 'files-copy');

fsPromises.mkdir(destDir).then(function () {
  console.log('Directory created successfully');
}).catch(function () {
  console.log('failed to create directory');
});

fs.readdir(pathFileDir, (err, files) => {
  if (err) throw err;
  console.log(files);
  files.forEach((file, index) => {
    fs.copyFile(`${pathFileDir}/${file}`, `${destDir}/${file}`, err => {
      if (err) {
        console.error(err);
      }
    })
  })
});






