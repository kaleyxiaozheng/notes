# [@RequestMapping - the annotation is used to map web requests to Spring Conroller methods](http://www.baeldung.com/spring-requestmapping)

### 1. @RequestMapping Basics

> 1.1 @RequestMapping - by Path

```java
    // "method = RequestMethod.GET" is not needed
    @RequestMapping(value = "/ex/foos", method = RequestMethod.GET)
    @ResponseBody
    public String getFoosBySimplePath(){
        return "Get some Foos";
    }

    // To test out this mapping with a simple curl command, run:
    curl -i http://localhost:8080/spring-rest/ex/foos
```

> 2.1 @ReuqestMapping - the HTTP Method 

```java
    @RequestMapping(value = "/ex/foos", method = POST)
    @ResponseBody
    public String postFoos(){
        return "Post some Foos";
    }

    // To test the POST via a curl command:
    curl -i -X POST http://localhost:8080/spring-rest/ex/foos
```

### 2. @RequestMapping and HTTP Headers

> 2.1 @RequestMapping with the headers Attribute

>> The mapping can be narrowed even further by specifying a header for the request

```java
    // single header
    @RequestMapping(value = "/ex/foos", headers = "key-val", method = GET)
    @ResponseBody
    public String getFoosWithHeader(){
        return "Get some Foos with Header";
    }

    // multiple headers
    @RequestMapping(value = "/ex/foos", headers = {"key1 = val1", "key2 = val2"}, method = GET)
    @ResponseBody
    public String getFoosWithHeaders(){
        return "Get some Foos with Header";
    }

    // To test the operation via curl
    curl -i -H "key:val" http://localhost:8080/spring-rest/ex/foos
```

#### Note that for the curl syntax for separating the header key and the header value is a colon, same as in the HTTP spec.

> 2.2 @RequestMapping Consumes and Produces

>> Mapping **media types produced by a controller** method is worth special attention - we can map a request based on its Accept header via the @RequestMapping headers attributed introduced above.

```java
    @RequestMapping(value = "/ex/foos", method = GET, headers = "Accept = application/json")
    @ResponseBody
    public String getFoosAsJsonFromBrowser(){
        return "Get some Foos with Header Old";
    }

    // The matching for this way of defining the Accept header is flexible - it uses contains instead of equals, so a request such as the following would still map correctly:
    curl -H "Accept:application/json, text/html" http:localhost8080/spring-rest/ex/foos
```

>> Starting with Spring 3.1, the **@RequestMapping** annotation now has the **produces** and the **consumes** attributes, specifically for this purpose:

```java
    @RequestMapping(value = "/ex/foos", method = RequestMethod.GET, produces = "application/json")
    @RsponseBody
    public String getFoosAsJsonFromREST(){
        return "Get some Foos with Header New";
    }

    // Also, the old type of mapping with the headers attribute will automatically be converted to the new produces mechanism starting with Spring 3.1, so the results will be identical.

    // This is consumed via curl in the same way:
    curl -H "Accept:application/json" http://localhost8080/spring-rest/ex/foos

    // Additionally, produces support multiple values as well:
    @RequestMapping(value = "/ex/foos", method = GET, produces = {"application/json", "application/xml"}
```

#### Keep in mind that these – the old way and the new way of specifying the accept header – are basically the same mapping, so Spring won’t accept them together – having both these methods active would result in: 

```java
    Caused by: java.lang.IllegalStateException: Ambiguous mapping found. 
    Cannot map 'fooController' bean method 
    java.lang.String 
    org.baeldung.spring.web.controller.FooController.getFoosAsJsonFromREST() to 
    { [/ex/foos],
  methods=[GET],params=[],headers=[],
  consumes=[],produces=[application/json],custom=[]
    }: 
    There is already 'fooController' bean method
    java.lang.String 
    org.baeldung.spring.web.controller.FooController.getFoosAsJsonFromBrowser() mapped.
```

### 3. @RequestMapping with Path Variables

> Parts of the mapping URI can be bound to variables via the **@PathVariable** annotation.

> 3.1 Single @PathVariable

```java
    @RequestMapping(value = "/ex/foos/{id}", method = GET)
    @ResponseBody
    public String getFoosBySimplePathWithPathVariable(@PathVariable("id") long id){
        return "Get a specific Foo with id = " + id;
    }

    // To test with curl
    curl http://localhost:8080/spring-rest/ex/foos/1

    // If the name of the method argument matches the name of the path variable exactly, then this can be simplified by using @PathVariable with no value:
    @RequestMapping(value = "/ex/foos/{id}", method = GET)
    @ResponseBody
    public String getFoosBySimplePathWithPathVariable(@PathVariable String id) {
        return "Get a specific Foo with id=" + id;
    }   

    // Note that **@PathVariable** benefits from automatic type conversion, so we could have also declared the id as:
    @PathVariable long id
```

> 3.2 Multiple @PathVariable

```java
    @RequestMapping(value = "/ex/foos/{fooid}/bar/{barid}", method = GET)
    @ReponseBody
    public String getFoosBySimplePathWithPathVariables(@PathVariable long fooid, @PathVariable long barid){
        return "Get a specific Bar with id = " + barid + "from a Foo with id = " + fooid;
    }

    // To test via curl
    curl http://localhost:8080/spring-rest/foos/1/bar/2
```

> 3.3 @PathVariable with RegEx

>> Regualr expressions can also be used when mapping the **@PathVariable**, for example, we we will restrict the mapping to only accept numerical values for the id:

```java
    @RequestMapping(value = "/ex/bars/{numericId:[\\d]}", method = GET)
    @ResponseBody
    public String getBarsBySimplePathWithPathVariable(@PathVariable long numericId){
        return "Get a specific Bar with id = " + numericId;
    }

    // This means that the following URIs will match:
    http://localhost:8080/spring-rest/ex/bars/1

    // but this will not:
    http://localhost:8080/spring-rest/ex/bars/abc
```

### 4. @RequestMapping with Request Parameters

> @RequestMapping allows easy mapping of URL parameters with the @RequestParam annotation. 

```java
    // We are now mapping a request to a URI such as:
    http://localhost:8080/spring-rest/ex/bars?id=100

    @RequestMapping(value = "/ex/bars", method = GET)
    @ResponseBody
    public String getBarBySimplePathWithRequestParam(@RequestParam("id") long id){
        return "Get a specific Bar with id = " + id
    }

    // To test with curl
    curl -i -d id=100 http://localhost:8080/spring-rest/ex/bars
```

> For more advanced scenarios, **@RequestMapping** can optionally define the parameters - as yet another way of narrowing the request mapping:

```java
    @RequestMapping(value = "/ex/bars", params= "id", method = GET)
    @ResponseBody
    public String getBarBySImplePathWithExplicitRequestParam(@RequestParam("id") long id){
        return "Get a specific Bar with id = " + id;
    }
```

> Multiple params values can be defined, and not all of them have to be used:

```java
    @RequestMapping(value = "/ex/bars", params = {"id", "second"}, method = GET)
    @ResponseBody
    public String getBarBySimplePathWithExplicitRequestParams(@RequestParam("id") long id){
        return "Narrow Get a specific Bar with id = " + id;
    }

    // A request to an URI such as:
    http://localhost:8080/spring-rest/ex/bars?id=100@second=something
```

### 5. @RequestMapping Corner Cases

> 5.1 @RequestMapping - multiple paths mapped to the same controller method

```java
    // The value attribute of @RequestMapping does accept multiple mappings
    @RequestMapping(value = {"/ex/advanced/bars", "/ex/advanced/foos"}, method = GET)
    @ResponseBody
    public String getFoosOrBarsByPath(){
        return "Advanced - Get some Foos or Bars"; 
    }

    // Both of these curl commands should hit the same method:
    curl -i http://localhost:8080/spring-rest/ex/advanced/foos
    curl -i http://localhost:8080/spring-rest/ex/advanced/bars
```

> 5.2 @RequestMapping - multiple HTTP request methods to the same controller method

>> Multiple requests using different HTTP verbs can be mapped to the same controller method:

```java
    @RequestMapping(value = "/ex/foos/multiple", method = {RequestMethod.PUT, RequestMethod.POST})
    @ResponseBody
    public String putAndPostFoos(){
        return "Advacned - PUT and POST within single method";
    }

    // With curl, both of these will now hit the same method:
    curl -i -X POST http://localhost:8080/spring-rest/ex/foos/multiple
    curl -i -X PUT http://localhost:8080/spring-rest/ex/foos/multiple
```

> 5.3 @RequestMapping - a fallback for all requests

>> All other URIs which do not be stored in the List will lead to specific page, say Error page.

>> To implement a simple fallback for all request using a specific HTTP method - for example, for a GET:

```java
    @RequestMapping(value = "*", method = RequestMethod.GET)
    @ResponseBody
    public String getFallback(){
        return "Fallback for Get Requests";
    }

    // Or even for all requests:
    @RequestMapping(value = "*", method = {RequestMethod.GET, RequestMethod.POST ...})
    @ResponseBody
    public String allFallback(){
        return "Fallback for All requests";
    }
```
