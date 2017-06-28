var http = require('http');
var url = require('url');
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-type': 'text/html' });
    console.log(req.url);
    var q = url.parse(req.url, true).query;
    console.log(q);
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(3333);