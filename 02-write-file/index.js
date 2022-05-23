const fs = require("fs");
const path = require('node:path');
const pathFile = path.join('02-write-file','text.txt');

const process = require('process');
const ac = new AbortController();
const signal = ac.signal;

fs.open(pathFile, 'w', (err) => {
  if(err) throw err;

  console.log('File created');
  rl.question('What is your favorite food? ', { signal }, (answer) => {
    
  });
});

// let readableStream = fs.createReadStream("hello.txt", "utf8");

// readableStream.on("data", function(chunk){
//     console.log(chunk);
// });