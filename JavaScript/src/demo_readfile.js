var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
    fs.readFile('demofile1.html', function(err, data) {
        console.log('Read File');
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write(data);
        res.end();
    });
    console.log('after read file');
}).listen(3333);