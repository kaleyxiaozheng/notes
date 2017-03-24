### [Post JSON to Spring REST webservice](https://www.leveluplunch.com/java/tutorials/014-post-json-to-spring-rest-webservice/)

> To POST information back to the server - POST JSON to Spring controller and how it automatically convert JSON to arraylist, object or multiple objects.

#### 1. Understanding @RequestBody

> The first thing to understand is how json binds to a java object. The **@RequestBody** method parameter annotation should bind the json value in the HTTP request body to the java object by using a HttpMessageConverter. To recap HttpMessageConverter is responsible for converting the HTTP request message to an assoicated java object. In our case want to **convert JSON to a java object** when a request is made. Spring will look specifically for a HttpMessageConverter assoicated to the mime type to perform the conversion. Since spring boot configures it automatically if jackson is on our class path MappingJackson2MessageConverter is used. Alternatively you can configure GsonHttpMessageConverter based on google gson library which was offically release in spring version 4.1.

```java
    // In code we annotate the method parameter with spring **@RequestBody** which looks like:
    @RequestMapping(value = "/", method = RequestMethod.POST)
    public ResponseEntity<Car> update(@RequestBody Car car){
        // ...
    }
```

#### 2. Project set up

> To Create a **new project with spring boot** and create a POJO object Car which will post to a spring controller.

```java
    public class Car{
        private String VIN;
        private String color;
        private Integer miles;
        
        // ...
    }
```

#### 3. Get Request

> Before we post JSON, lets create a method to return a Car and make a request to http://localhost:8080/. You will notice that we are using **ResponseEntity** as the method return type. ResponseEntity is a class that allows you to modify request and response headers. An important design aspect of REST services is also to return the proper HTTP status code and in this case a 200.

```java
    @ReuqestMapping(value = "/")
    public ResponseEntity<Car> get(){
        Car car = new Car();
        car.setColor("Blue");
        car.setMiles(100);
        car.setVIN("1234");

        return new ResponseEntity<Car>(car, HttpStatus.OK);
    }

    // Which should return a json response:
    {
        color : "Blue"
        miles : 100
        vin: "1234"
    }
```

#### 4. JSON to java object

> You might want to update the Car object by posting json to a URL. A more detailed user story would be, as a user I want to be able update attributes of my car. We will create **@RequestMapping** and specify **method = RequestMethod.POST** which will tell spring to use this method when a post occurs. When the post is made lets increment the miles by 100.

```java
    @RequestMapping(value = "/", method = ReuqestMathod.POST)
    public ResponseEntity<Car> update(@RequestBody Car car){
        if (car != null){
            car.setMiles(car.getMiles() + 100);
        }

        // TODO: call persistence layer to update
        return new ResponseEntity<Car>(car, HttpStatus.OK);
    }

    / Which should return a json response:
    {
        color : "Blue"
        miles : 200
        vin: "1234"
    }
```

#### 5. JSON to ArrayList

> we have a series of cars we want to update the mileage. Lets create a new request mapping to http://localhost:8080/cars which accepts a json array as a parameter. Again, we will increment mileage by 100 using a java 8 foreach loop.

```java
    @RequestMapping(value = "/cars", method = RequestMethod.POST)
    public ResponseEntity<List<Car>> update(@RequestBody List<Car> cars){
        cars.stream().forEach( c -> c.setMiles(c.getMiles() + 100) );

        // TODO: call persistence layer to update
        return new ResponseEntity<List<Car>>(cars, HttpStatus.OK);
    }

    / Which should return a json response:
    {
        color : "Blue"
        miles : 200
        vin: "1234"
    },
    {
        color : "Red"
        miles : 500
        vin: "1235"
    }
```

#### 6. Passing multiple json objects

> If you want to send multiple json objects to a controller, you will need to create a wrapper object that represents your request due to the request containing the entire JSON content. We will create **a Truck object**, **a RequestWrapper object** and **a new @RequestMapping**.

> 1. Truck object

```java
    public class Truck{
        private String VIN;
        private String color:
        private Integer miles;

        // ...
    }
```

> 2. RequestWrapper object

> The RequestWrapper will contain a List of Cars and a single truck object.

```java
    public class RequestWrapper{
        List<Car> cars;
        Truck truck;

        // ...
    }
```

> 3. New @RequestMapping

```java
    @RequestMapping(value = "/carandtrucks", method = RequestMethod.POST)
    public ResponseEntity<RequestWrapper> updateWithMultipleObjects(@RequestBody RequestWrapper requestWrapper){
        requestWrapper.getCars().stream().forEach(c -> c.setMiles(c.getMiles() + 100));

        // TODO: call persistence layer to update

        return new ResponseEntity<RequestWrapper>(requestWrapper, HttpStatus.OK);
    }
```

> 4. Making the request

> we will use advanced rest client to http://localhost:8080/carsandtrucks with the following JSON.

```java
    {
        "cars":[
            {
                "color":"Blue",
                "miles":"100",
                "vin":"1234"
            },
            {
                "color":"Red",
                "miles":""400,
                "vin":"1235"
            }
        ],
        "truck":{
           "color":"Red",
           "miles":"400",
           "vin":"1235"
        }
    }
```
