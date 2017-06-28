## [Node.js tutorial](https://www.w3schools.com/nodejs/default.asp)


### How Node.js handles a file request:
> 1. Sends the task to the computer's file system.
> 2. Ready to handle the next request.
> 3. When the file system has opened and read the file, the server returns the content to the client.

**Node.js** eliminates the waiting, and simply continues with the next request.

**Node.js** runs single-threaded, non-blocking, asynchronously programming, which is very memory efficient.

### What Can Node.js Do?
>* Node.js can generate dynamic page content
>* Node.js can create, open, read, write, delete, and close files on the server
>* Node.js can collect form data
>* Node.js can add, delete, modify data in your database

### What is Node.js File?
>* Node.js files contain tasks that will be executed on certain events
>* A typical event is someone trying to access a port on the server
>* Node.js files must be initiated on the server before having any effect
>* Node.js files have extension ".js"

> Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP). To include the HTTp module, use the `require()` method
```javascript
var http = require('http');
```

The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.

> Use the `createServer()` method to create an HTTP server

```javascript
// create a server object
http.createServer(function (req, res){
    // write a response to the client
    res.write('Hello Kaley!');
    // end the response
    res.end();
    // the server object listens on port 3333
}).listen(3333); 
```

If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type:
```javascript
var http = require('http');
http.createServer(function(req, res){
    res.writeHeader(200, {'Content-Type': 'text/html'});
    res.write('Hello, Kaley!');
    res.end();
}).listen(3333);
```

> The first augument of the `res.writeHead()` method is the status code, 200 means that all is **OK**, the second argument is an object containing the response headers.

The function passed into the `http.createServer()` has a `req` argument that represents the request from the client, as an object.
> This object has a property called **"url"** which holds the part of the url that comes after the domain naem:
```javascript
// demo_http_url.js
var http = require('http');
http.createServer(fucntion (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}).listen(3333);
```

### Split the Query String
> There are built-in modules to easily split the query string into readable parts, such as the URL module.
```javascript
var http = require('http');
http.createServer(function(req, res){
    res.writeHeader(200, {'Content-type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(3333);
```

### Node.js as a File Server
> The Node.js file system module allow you to work with the file system on your computer. To include the file system module, use the `require()` method
```javascript
var fs = require('fs');
```

> Common use for the File System module

explanation | method
-- | --
Read files | fs.readFile()
Create files | fs.appendFile()
Create files | fs.open()
Create files | fs.writeFile()
Update files | fs.appendFile()
Update files | fs.writeFile()
Delete files | fs.unlink()
Rename files | fs.rename()

> **Create Files**
>> The `fs.appendFile()` method appends specified content to a file. If the file does not exit, the file will be created.

>> The `fs.open()` method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created.

>> The `fs.writeFile()` method replaces the specified file and content if it exists. If the file does not exists a new file, containing the specified content, will be created.

> **Update Files**
>> The `fs.appendFile()` method appends the specified content at the end of the specified file.

>> the `fs.writeFile()` method replaces the specified file and content