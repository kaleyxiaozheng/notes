# Part one - Spring Boot 精要
> Spring Boot 不是一门新技术。从本质上说，Spring Boot就是Spring, 它做了那些没有它你也会去做的Spring Bean配置。它使用“习惯优于配置”的理念让你的项目快速运行起来。使用Spring Boot很容易创建一个独立运行（运行jar, 内嵌Servlet容器）、准生产级别的基于Spring框架的项目，使用Spring Boot你可以不用或者只需要很少的Spring配置。

> Spring Boot精要
>> 1. 自动配置：针对很多Spring应用程序常见的应用功能，Spring Bootn能自动提供相关配置。
>> 2. 起步依赖：告诉Spring Boot需要什么功能，它就能引入需要的库。
>> 3. 命令行界面：这是Spring Boot的可选特性，借此你只需写代码就能完成完整的应用程序，无需传统项目构建。
>> 4. Actuator： 让你能够深入运行中的Spring Boot应用程序，一套究竟。

> 应用入口类 - Application
>> Application是一个很关键的启动类，程序的入口就是这里
```java
    import org.springframework.boot.SpringApplication;
    import org.springframework.boot.autoconfigure.SpringBootApplication;
    import org.springframework.web.bind.annotation.RequestMapping;
    import org.springframework.web.bind.annotation.RestController;

    @RestController
    @SpringBootApplication
    public class Chapter1Application {

	@RequestMapping("/")
	public String index(){
		return "Hello Spring Boot";
	}
	public static void main(String[] args) {
		SpringApplication.run(Chapter1Application.class, args);
	}
}
```
>> 1. @SpringBootApplication是Spring Boot项目的核心注解，主要目的是开启自动配置。
>> 2. main方法是作为项目启动的入口
>> 3. @RestController注解等价于@Controller + @ResponseBody的结合，使用这个注解的类里面的方法都以json格式输出。

> 启动项目的三种方式：
>> 1. main方法
>> 2. 在命令行使用命令mvn spring-boot:run
>> 3. 使用mvn package运行打包时，会打包成一个可以直接运行的JAR文件，使用java -jar命令就可以直接运行

# Part two - 配置文件
> Spring Boot使用了一个全局的配置文件application.properties, 放在src/main/resources目录下或者类路径的/config下。Spring Boot的全局配置文件的作用是对一些默认配置的配置值进行修改。

> application.properties提供自定义属性的支持，这样我们就可以把一些常量配置在这里:
```javascript
    com.dudu.name = "Kaley"
    com.dudu.want = "learning English"
```
> 然后直接在要使用的地方通过注解@Value(value="$(config.name)")就可以绑定到你想要的属性上面
```java
    @RestController
    public class UserController {

    @Value("${com.dudu.name}")
    private  String name;
    @Value("${com.dudu.want}")
    private  String want;

    @RequestMapping("/")
    public String hexo(){
        return name+","+want;
    }
}
```

> 有时候属性太多了，一个个绑定到属性字段上太累，官方提倡绑定一个对象的bean, 这里我们建一个ConfigBean.java类，顶部需要使用注解@ConfigurationProperties(prefix = "com.dudu") 来指明使用拿个
```java
    @ConfigurationProperties(prefix = "com.dudu")
    public class ConfigBean {
    private String name;
    private String want;

    // 省略getter和setter
}
```

> 这个配置完还需要在Spring Boot入口类上加上@EnableConfigurationProperties并指明要加载哪个bean，如果不写ConfigBean.class, 在bean类那边添加
```java
    @SpringBootApplication
    @EnableConfigurationProperties({ConfigBean.class})
    public class Chapter2Application {

    public static void main(String[] args) {
        SpringApplication.run(Chapter2Application.class, args);
    }
}
```

> 最后在Controller中引入ConfigBean使用即可
```java
    @RestController
    public class UserController {
    @Autowired
    ConfigBean configBean;

    @RequestMapping("/")
    public String hexo(){
        return configBean.getName()+configBean.getWant();
    }
}
```

> 参数间引用 - 在application.properties中的各个参数之间也可以直接引用使用，如
```java
    com.dudu.name="嘟嘟MD"
    com.dudu.want="祝大家鸡年大吉吧"
    com.dudu.yearhope=${com.dudu.name}在此${com.dudu.want}
```
> 这样就可以只使用yearhope这个属性了

> 使用自定义配置文件 - 有时候我们不希望把所有配置都放在application.properties里面，这时候我们可以另外定义一个，这里我明取名为test.properties,路径跟也放在src/main/resources下面。
```java
    com.md.name="哟西~"
    com.md.want="祝大家鸡年,大吉吧"
```
新建一个bean类
```java
    @Configuration
    @ConfigurationProperties(prefix = "com.md") 
    @PropertySource("classpath:test.properties")
    public class ConfigTestBean {
        private String name;
        private String want;
        // 省略getter和setter
}
```
> 随机值配置 - 配置文件中${random} 可以用来生成各种不同类型的随机值，从而简化了代码生成的麻烦，例如 生成 int 值、long 值或者 string 字符串。
```java
    dudu.secret=${random.value}
    dudu.number=${random.int}
    dudu.bignumber=${random.long}
    dudu.uuid=${random.uuid}
    dudu.number.less.than.ten=${random.int(10)}
    dudu.number.in.range=${random.int[1024,65536]}
```

> 外部配置 - 命令行参数配置
>> Spring Boot是基于jar包运行的，打成jar包的程序可以直接通过下面命令运行：
```java
    java -jar xx.jar
```

>> 可以在命令修改tomcat端口号：
```java
    java -jar xx.jar --server.port=9090
```

> 可以看出，命令行中连续的两个减号--就是对application.properties中的属性值进行赋值的标识。

> 所以java -jar xx.jar --server.port=9090 等价于在 application.properties 中添加属性 server.port=9090。

> 如果你怕命令行有风险，可以使用SpringApplication.setAddCommandLineProperties(false)禁用它。

> 实际上，Spring Boot应用程序有多种设置途径，Spring Boot能从多重属性源获得属性，包括如下几种：
* 根目录下的开发工具全局设置属性(当开发工具激活时为~/.spring-boot-devtools.properties)。
* 测试中的@TestPropertySource注解。
* 测试中的@SpringBootTest#properties注解特性。
* 命令行参数
* SPRING_APPLICATION_JSON中的属性(环境变量或系统属性中的内联JSON嵌入)。
* ServletConfig初始化参数。
* ServletContext初始化参数。
* java:comp/env里的JNDI属性
* JVM系统属性
* 操作系统环境变量
* 随机生成的带random.* 前缀的属性（在设置其他属性时，可以应用他们，比如${random.long}）
* 应用程序以外的application.properties或者appliaction.yml文件
* 打包在应用程序内的application.properties或者appliaction.yml文件
* 通过@PropertySource标注的属性源
* 
> 默认属性(通过SpringApplication.setDefaultProperties指定).
  这里列表按组优先级排序，也就是说，任何在高优先级属性源里设置的属性都会覆盖低优先级的相同属性，列如我们上面提到的命令行属性就覆盖了application.properties的属性。

# 启动原理
```java
    @Configuration
    @EnableAutoConfiguration
    @ComponentScan
    public class Application {
        public static void main(String[] args) {
            SpringApplication.run(Application.class, args);
        }
    }
```
> 每次写这3个比较累，所以写一个@SpringBootApplication方便点。接下来分别介绍这3个Annotation。
> 1. @Configuration
>> 任何一个标注了@Configuration的Java类定义都是一个JavaConfig配置类。
>> * 注册bean定义层面，基于XML的配置形式是：
```java
    <bean id="mockService" class="..MockServiceImpl">
    ...
    </bean>
```
>> * 基于JavaConfig的配置形式是：
```java
    @Configuration
    public class MockConfiguration{
        @Bean
        public MockService mockService(){
            return new MockServiceImpl();
        }
    }
```
>> 任何一个标注了@Bean的方法，其返回值将作为一个bean定义注册到Spring的IoC容器，方法名将默认成该bean定义的id。
>> * 表达依赖注入关系层面, 为了表达bean与bean之间的依赖关系，在XML形式中一般是这样：
```java
    <bean id="mockService" class="..MockServiceImpl">
    <propery name ="dependencyService" ref="dependencyService" />
    </bean>

    <bean id="dependencyService" class="DependencyServiceImpl"></bean>

```
>> * 基于JavaConfig的配置形式是这样的：
```java
    @Configuration
    public class MockConfiguration{
        @Bean
        public MockService mockService(){
            return new MockServiceImpl(dependencyService());
        }
    
        @Bean
        public DependencyService dependencyService(){
            return new DependencyServiceImpl();
        }
    }
```

> 2. @EnableAutoConfiguration
>> @EnableAutoConfiguration也是借助@Import的帮助，将所有符合自动配置条件的bean定义加载到IoC容器




> 3. @ComponentScan 
>> * @ComponentScan这个注解在Spring中很重要，它对应XML配置中的元素
>> * @ComponentScan的功能其实就是自动扫描并加载符合条件的组件（比如@Component和@Repository等）或者bean定义，最终将这些bean定义加载到IoC容器中。
>> * 我们可以通过basePackages等属性来细粒度的定制@ComponentScan自动扫描的范围，如果不指定，则默认Spring框架实现会从声明@ComponentScan所在类的package进行扫描。
>> * **注**: 所以SpringBoot的启动类最好是放在root package下，因为默认不指定basePackages。

### 深入探索SpringApplication执行流程
SpringApplication的run方法的实现流程大体可以归纳如下：

> 1. 如果我们使用的是SpringApplication的静态run方法，那么，这个方法里面首先要创建一个SpringApplication对象实例，然后调用这个创建好的SpringApplication的实例方法。在SpringApplication实例初始化的时候，它会提前做几件事情：

>> * 根据classpath里面是否存在某个特征类（org.springframework.web.context.ConfigurableWebApplicationContext）来决定是否应该创建一个为Web应用使用的ApplicationContext类型。

>> * 使用SpringFactoriesLoader在应用的classpath中查找并加载所有可用的ApplicationContextInitializer。

>> * 使用SpringFactoriesLoader在应用的classpath中查找并加载所有可用的ApplicationListener。

>> * 推断并设置main方法的定义类。

> 2. SpringApplication实例初始化完成并且完成设置后，就开始执行run方法的逻辑了，方法执行伊始，首先遍历执行所有通过SpringFactoriesLoader可以查找到并加载的SpringApplicationRunListener。调用它们的started()方法，告诉这些SpringApplicationRunListener，“嘿，SpringBoot应用要开始执行咯！”。

> 3. 创建并配置当前Spring Boot应用将要使用的Environment（包括配置要使用的PropertySource以及Profile）。

> 4. 遍历调用所有SpringApplicationRunListener的environmentPrepared()的方法，告诉他们：“当前SpringBoot应用使用的Environment准备好了咯！”。

> 5. 如果SpringApplication的showBanner属性被设置为true，则打印banner。

> 6. 根据用户是否明确设置了applicationContextClass类型以及初始化阶段的推断结果，决定该为当前SpringBoot应用创建什么类型的ApplicationContext并创建完成，然后根据条件决定是否添加ShutdownHook，决定是否使用自定义的BeanNameGenerator，决定是否使用自定义的ResourceLoader，当然，最重要的，将之前准备好的Environment设置给创建好的ApplicationContext使用。

> 7. ApplicationContext创建好之后，SpringApplication会再次借助Spring-FactoriesLoader，查找并加载classpath中所有可用的ApplicationContext-Initializer，然后遍历调用这些ApplicationContextInitializer的initialize（applicationContext）方法来对已经创建好的ApplicationContext进行进一步的处理。

> 8. 遍历调用所有SpringApplicationRunListener的contextPrepared()方法。

> 9. 最核心的一步，将之前通过@EnableAutoConfiguration获取的所有配置以及其他形式的IoC容器配置加载到已经准备完毕的ApplicationContext。
 
> 10. 遍历调用所有SpringApplicationRunListener的contextLoaded()方法。

> 11. 调用ApplicationContext的refresh()方法，完成IoC容器可用的最后一道工序。

> 12. 查找当前ApplicationContext中是否注册有CommandLineRunner，如果有，则遍历执行它们。

> 13. 正常情况下，遍历执行SpringApplicationRunListener的finished()方法、（如果整个过程出现异常，则依然调用所有SpringApplicationRunListener的finished()方法，只不过这种情况下会将异常信息一并传入处理）去除事件通知点后

![整个流程](/Users/zhengxiao/Projects/notes/Spring/Spring_boot_info)
