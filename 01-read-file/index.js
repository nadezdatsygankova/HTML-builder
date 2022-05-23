const fs = require("fs");
const path = require('node:path');

const pathFile = path.join('01-read-file','text.txt');
console.log(pathFile);
fs.readFile(pathFile, "utf8",
            function(error,data){
                if(error) throw error;
                console.log(data);
});