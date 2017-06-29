var fs = require('fs');
fs.unlink('writefile.txt', function(err) {
    if (err) throw err;
    console.log('file deleted');
});