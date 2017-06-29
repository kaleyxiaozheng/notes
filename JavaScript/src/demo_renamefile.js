var fs = require('fs');
fs.rename('appendfile.txt', 'myfile.txt', function(err) {
    if (err) throw err;
    console.log('File renamed');
});