Index | Contents
-- | --
1 | Intro
2 | Load
3 | Get/Post
---
#### 1. AJAX Introduction
> AJAX is the art of exchanging data with a server, and updating parts of a web page - without reloading the whole page.

> AJAX = Asynchronous JavaScript and XML

> With the jQuery AJAX methods, you can request text, HTML, XML, or JSON from a remote server using both HTTP Get and HTTP Post - And you can load the external data directly into the selected HTML elements of your web page

Method | Description 
-- | --
`load()` | Loads data from a server and puts the returned data into the selected element

> Syntax 
> `$(selector).load(URL, data, callback)`
>> * The required URL parameter specifies the URL you wish to load.
>> * The optional data parameter specifies a set of querystring key/value pairs to send along with the request.
>> * The optional callback parameter is the name of a function to be executed after the load() method is completed.

> The optional **callback** parameter specifies a callback function to run when the `load()` method is completed. The callback function can have different parameters:
>> * responseTxt - 
 