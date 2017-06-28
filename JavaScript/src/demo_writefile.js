var fs = require('fs');
fs.writeFile('writefile.txt', 'Hello Kaley 2', function(err) {
    if (err) throw err;
    console.log('writefile saved');
});