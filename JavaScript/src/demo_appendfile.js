var fs = require('fs');
fs.appendFile('appendfile.txt', ' Hello Kaley 5', function(err) {
    if (err) throw err;
    console.log('appendfile saved');
});