var fs = require('fs');
fs.open('openfile.txt', 'w', function(err, file) {
    if (err) throw err;
    console.log("openfile saved");
});