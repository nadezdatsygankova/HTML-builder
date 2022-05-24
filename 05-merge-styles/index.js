let fs = require('fs');
const path = require('node:path');

const pathFile = path.join('05-merge-styles', 'styles');
// const destDir = path.join('04-copy-directory', 'files-copy');


const dataResult = [];
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
              if (path.extname(file.name) === '.css') {
                console.log('yes');
                fs.readFile(pathsToCheck, "utf8",
                  function (error, data) {
                    if (error) throw error;
                    let pathBundle = path.join('05-merge-styles','project-dist','bundle.css')
                    fs.appendFile(pathBundle,  data,function (error, data) {
                      if (error) throw error;
                      console.log('Save')
                    })
                  });

              }

            }
          });

        }
      }
      )
    }
  })
