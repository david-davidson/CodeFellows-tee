var fs = require('fs');
var outputFile = fs.createWriteStream(process.argv[2]);
console.log('\nEnter something: we\'ll print it back, and also save it to ' + process.argv[2]);
process.stdin.pipe(process.stdout);
process.stdin.pipe(outputFile);