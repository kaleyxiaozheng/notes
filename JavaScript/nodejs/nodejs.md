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

>> the `fs.writeFile()` method replaces the specified file and content.

### The Build-in URL Module
> The URL module splits up a web address into readable parts.
 
> `var url = require('url');` to include the URL module.

> Parse an address with the `url.parse()` method, and it will return a URL object with each part of the address as properties.  

### Node.js NPM
> **What is NPM?**
>> * NPM - Node.js package manager 
>> * [NPM download](http://www.npmjs.com)
>> * The NPM program is installed on your computer when you install Node.js

> **What is a Package?**
>> * A package in Node.js contains all the files you need for a module.
>> * Modules are JavaScript libraries you can include in your project.

> **Download the Package**
>> Open the terminal and tell NPM to download the package you want.
>> Like downloading the package called "upper-caes": `npm install upper-case`
>> After downlaoding and intalling, a folder named "node_modules" is created, where the package will be placed. 

> **Using a Package**
>> `var uc = require('upper-case');`

```javascript
var http = require('http');
var uc = require('upper-case');
http.createServer(function(req, res){
    res.writeHeader(200, {'Content-Type': 'text/html'});
    res.write(uc("Hello World!"));
    res.end();
}).listen(3333);

node demo_uppercase.js
```
> display: HELLO WORLD!

### Node.js Events
> Node.js have a built-in module, called "**Events**", where you can create-, fire-, and listen for- your own events.

> To include the built-in Events module use the `require()` method. In addition, all event properties and methods are an instance of an EventEmitter object. To be able to access these properties and methods, create an EventEmitter object;
```javascript
var events = require('events');
var eventEmitter = new events.EventEmitter();
```

> You can assign event handlers to your own events with the EventEmitter object.

> To fire an event, use the `emit()` method

```javascript
var events = require('events');
var eventEmitter = new events.EventEmitter();

// Create an event handler
var myEventHandler = function(){
    console.log('I hear a scream!');
}

// Assign the event handler to an event
eventEmitter.on('scream', myEventHandler);

// Fire the 'scream' event
eventEmitter.emit('sream');
```

### Node.js Upload Files
> A very good module for working with file uploads, called "**Formidable**"

> The Formidable module can be downloaded and installed using NPM
```javascript
NPM formidable
NPM install formidable

var formidable = require('formidable');
```

#### Upload file
> After installing the Formidable module, you are ready to make a web page in Node.js that lets the user upload files to your computer.

> 1. Create an Upload Form
>> Create a Node.js file that writes an HTML form, with an upload field

```javascript
// This code will produce an HTML form

var http = require('http');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type=""submit>');
    res.write('</form>');
    return res.end();
}).listen(3333);
```

> 2. Parse the Uploaded File
>> Include the Formidable module to be able to parse the uploaded file once it reaches the server.

>> When the file is uploaded and parsed, it gets placed on a temporary folder on your computer

```javascript
// The file will be uploaded, and placed on a temporary folder

var http = require('http');
var formidable = require('formidable');

http.createServer(function(req, res){
    if(req.url == '/fileupload'){
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files){
            res.write('File uploaded');
            res.end();
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type=""submit>');
        res.write('</form>');
        return res.end();
    }
}).listen(3333);
```

> 3. Save the File
>> When a file is successfully uploaded to the server, it is placed on a temporary folder.

>> The path to this directory can be found in the "files" object, passed as the second argument in the `parse()` method's callback function.

>> To move the file to the folder of your choice, use the File System module, and rename the file

```javascript
// Include the fs module, and move the file to the current folder
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function(req, res){
    if(req.url == '/fileupload'){
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files){
            var oldpath = files.filetoupload.path;
            var newpath = 'c:/users/your name' + files.filetoupload.name;
            fs.rename(oldpath, newpath, function(err){
                if(err) throw err;
                res.write('File uploaded and moved');
                res.end();
            }
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type=""submit>');
        res.write('</form>');
        return res.end();
    }
}).listen(3333);
```

### Node.js Send an Email
> The **Nodemailer** module makes it easy to send emails from your computer
```javascript
npm install nodemailer

var nodemailer = require('nodemailer');
```

> To send HTML formatted text in your email, use the "html" proerty instead of the "text" property
```javascript
var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'myfriend@gmail.com',
    subject: 'Sending Email using Node.js',
    html: '<h1>Welcome</h1><p>That was easy</p>'
}
```