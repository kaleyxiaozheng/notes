### * Steps to create Gradle project
> Create Gradle project
* add dependencies into build.gradle file
* create directories: src -> main -> java and test
* run programme
* type "http://localhost:8080/" in chrome

---

### * Benefits from Spring Boot 
The Spring Boot gradle plugin provides many convenient features:
1. It collects all the jars on the classpath and builds a single, runnable "über-jar", which makes it more convenient to execute and transport your service.
2. It searches for the **public static void main()** method to flag as a runnable class.
3. It provides a built-in dependency resolver that sets the version number to match Spring Boot dependencies. You can override any version you wish, but it will default to Boot’s chosen set of versions.

---
### * Simple Web Application

>> The class is flagged as a **@RestController**, meaning it’s ready for use by Spring MVC to handle web requests. **@RequestMapping** maps **/** to the **index()** method. When invoked from a browser or using curl on the command line, the method returns pure text. That’s because **@RestController** combines **@Controller** and **@ResponseBody**, two annotations that results in web requests returning data rather than a view.
```java
package webApplication.hello;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
 
@RestController
public class HelloController {

	@RequestMapping("/")
	public String index(){
		return "Greetings from Spring Boot!";
	}
}
```


>> **@SpringBootApplication** is a convenience annotation that adds all of the following:

>> *  **@Configuration** tags the class as a source of bean definitions for the application context.
>> * **@EnableAutoConfiguration** tells Spring Boot to start adding beans based on classpath settings, other beans, and various property settings.
>> * Normally you would add **@EnableWebMvc** for a Spring MVC app, but Spring Boot adds it automatically when it sees spring-webmvc on the classpath. This flags the application as a web application and activates key behaviors such as setting up a **DispatcherServlet**.
>> * **@ComponentScan** tells Spring to look for other components, configurations, and services in the the **hello** package, allowing it to find the controllers.

>> The **main()** method uses Spring Boot’s **SpringApplication.run()** method to launch an application. Did you notice that there wasn’t a single line of XML? No web.xml file either. This web application is 100% pure Java and you didn’t have to deal with configuring any plumbing or infrastructure.

>> There is also a **CommandLineRunner()** method marked as a **@Bean** and this runs on start up. It retrieves all the beans that were created either by your app or were automatically added thanks to Spring Boot. It sorts them and prints them out.

```java
package webApplication.hello;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;

@SpringBootApplication
public class HelloApplication {
	public static void main(String[] args){
		SpringApplication.run(HelloApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(ApplicationContext ctx){
		return args -> {
			System.out.println("Let's inspect the beans provide by Spring Boot:");

			String[] beanNames = ctx.getBeanDefinitionNames();
			Arrays.sort(beanNames);
			for(String beanName : beanNames){
				System.out.println(beanName);
			}
		};
	}
}

```
---
### * Create a RESTful Web Service

> Begin the process by thinking about service interactions.
	>> * The service will handle **GET** requests for **/greeting**, optionally with a **name** parameter in the query string. 
	>> * The **GET** request should return a **200 OK** response with JSON in the body that represents a greeting. It should look something like this:
	
```javascript
	{
		"id" : 1,	
		"content" : "Hello, World!"
	}	
```

> Step1. create a resource representation class. provide a plain old java object with fields, constructors, and accessors for the **id** and **content** data.

```javascript
public class HelloRESTfulGreeting {

	private long id;
	private String content;

	public HelloRESTfulGreeting(long id, String content) {
		this.id = id;
		this.content = content;
	}

	public long getId() {
		return id;
	}

	public String getContent() {
		return content;
	}
}
```
> Step 2: Create a resource controller. In Spring's approach to build RESTful web service, HTTP requests are handled by a controller. These components are easily identified by the **#RestController** annotation, and the **HelloRESTfulController** below handles **GET** requests for **/greeting** by returning a new instance of the **HelloRESTfulGreeting** class

```javascript
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.atomic.AtomicLong;
 
@RestController
public class HelloRESTfulController {

	private static final String template = "Hello, %s!";
	private final AtomicLong counter = new AtomicLong();

	@RequestMapping("/greeting")
	public HelloRESTfulGreeting helloRESTfulGreeting(@RequestParam(value = "name", defaultValue = "World") String name){
		return new HelloRESTfulGreeting(counter.incrementAndGet(), String.format(template, name));
	}
}
````
> Step3: Make the application executable - create application with **main()** method

```javascript
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
 
@SpringBootApplication
public class HelloRESTfulApplication {

	public static void main(String[] args){
		SpringApplication.run(HelloRESTfulApplication.class, args);
	}
}
```
// input: localhost:8080/greeting?name=kaley
// input: http://localhost:8080/login?id=1&name=kaley

---
### * Difference between MVC and RESTful
The key difference between a traditional MVC controller and the RESTful web service controller is the way that the HTTP reponse body is created.

> * In traditioanl MVC, server creates a view, formated in HTML, and sends this veiw to browser. 
> * In RESTful web service, server creates a text file, say JSON and sends JSON to the browser. And how to display the JSON depends on how the frontend developed

---
### * The Spring's new
> 1. **@RestController** annotation, which marks the class as a controller where every method returns a domain object instead of a view. It's shorthand for **@Controller** and **@ResponseBody** rolled together.
> 2. The **HelloRESTfulGreeting** object must be converted to JSON. Thanks to Spring's HTTP message converter support, you don't need to do this conversion manually. Because Jackson 2 is on the classpath, Spring's **MappingJackson2HttpMessageConverter** is automatically chosen to convert the **HelloRESTfulGreeting** instance to JSON

---
