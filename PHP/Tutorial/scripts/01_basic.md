Index | Contents
-- | --
1. | [Home](https://www.tutorialspoint.com/php/)
2. | [Introduction](https://www.tutorialspoint.com/php/php_introduction.htm)
3. | [Environment Setup](https://www.tutorialspoint.com/php/php_environment.htm)
4. | [Syntax Overview](https://www.tutorialspoint.com/php/php_syntax_overview.htm)
5. | [Variable Types](https://www.tutorialspoint.com/php/php_variable_types.htm)
6. | [Constants](https://www.tutorialspoint.com/php/php_constants.htm)
7. | [Operator Types](https://www.tutorialspoint.com/php/php_operator_types.htm)
8. | [Decision Making](https://www.tutorialspoint.com/php/php_decision_making.htm)
9. | [Loop Types](https://www.tutorialspoint.com/php/php_loop_types.htm)
10. | [Arrays](https://www.tutorialspoint.com/php/php_arrays.htm)
11. | [Strings](https://www.tutorialspoint.com/php/php_strings.htm)
12. | [Web Concepts](https://www.tutorialspoint.com/php/php_web_concepts.htm)
13. | [GET & POST](https://www.tutorialspoint.com/php/php_get_post.htm)
14. | [File Inclusion](https://www.tutorialspoint.com/php/php_file_inclusion.htm)
15. | [Files & I/O](https://www.tutorialspoint.com/php/php_files.htm)
16. | [Functions](https://www.tutorialspoint.com/php/php_functions.htm)
17. | [Cookies](https://www.tutorialspoint.com/php/php_cookies.htm)
18. | [Sessions](https://www.tutorialspoint.com/php/php_sessions.htm)
19. | [Sending Emails](https://www.tutorialspoint.com/php/php_sending_emails.htm)
20. | [File Uploading](https://www.tutorialspoint.com/php/php_file_uploading.htm)
21. | [Coding Standard](https://www.tutorialspoint.com/php/php_coding_standard.htm)
---
#### 4 Syntax Overview
> Syntax
```javascript
<?php PHP code goes here?>
<? PHP code goes here?>
<script language="php"> PHP code goes here </script>
```
> Canonical PHP tags `<?php ... ?>`
>> The most universally effective PHP tag.

> Short-open tags `<? ... ?>`
>> Short tags are the shortest option you must do one of two things to enable PHP to recognize the tages -
>>> * Choose the --enable-short-tags configuration option when you're building PHP.
>>> * Set the short_open_tag setting in your php.ini file to on.

> ASP-style tags `<% ... %>`
>> To use ASP-style tags, you will need to set the configuration option in your php.ini file.

> HTML script tags `<script language="PHP"> ... </script>`

> **Commenting PHP Code**
>> * Single-line comments "**#**" or "**//**"
>> * Multi-line comments "**/*...*/**"

---
#### 5 Variable Types
No | Important Info about variables in PHP
-- | --
1 | All variables are denoted with sign of **$**
2 | PHP does a good job of automatically coverting types from one to another when necessary 

Data type | Description
-- | -- 
**Integers** | 4195
**Doubles** | 49.1
**Booleans** | true/false; 
**NULL** | NULL
**Strings** | 'PHP supports string operations'
**Arrays** | are named and indexed collections of other values
**Objects** | are instances of programmer-defined classes
**Resources** | those who hold references to resources external to PHP (such as database connections)

```javascript
<?php
    $many_1 = 2.88;
    $many_2 = 2.11;
    $few = $many_1 + $many_2;

    print("$many_1 + $many_2 = $few <br>");
?>
```

Data type | Interpreting as Booleans
-- | --
**Integers** | 0 = false; other number = true; 
**Strings** | empty (has zero characters) = false or is the string "0"; otherwise is true
**NULL** | NULL = false
**Arrays** | contains no other values = false; otherwise is true
**Objects** | contains no other values = false; otherwise is true
**Resources** | valid resources = true

---
#### 6 Constants
> To define a constant you have to use `define()` function and to retrieve the value of a constant, you have to simply specifying its name. Unlike with variables, you do not need to have a constant with a `$`. You can also use the function `constant()` to read a constant's value if you wish to obtain the constant's name dynamically.

```javascript
<?php
    define("MINSIZE", 50);

    echo MINSIZE;
    echo constant("MINSIZE"); // same thing as the previous line
?>
```
---
#### 8 Decision Making
> **If...Else** statement
```javascript
<html>
    <body>
        <?php
            $d = date("D");

            if ($d == "Fri")
                echo "Have a nice weekend!";
            else
                echo "Have a nice day!";
        ?>
    </body>
</html>
```

> **ElseIF** statement
```javascript
<html>
    <body>
        <?php
            $d = date("D");

            if ($d == "Fri")
                echo "Have a nice weekend!";
            elseif ($d == "Sun)
                echo "Have a nice Sunday!";
            else
                echo "Have a nice day!";
        ?>
    </body>
</html>
```

> **Switch** statement
```javascript
<html>
    <body>
        <?php
            $d = date("D");

            switch ($d){
                case "Mon":
                    echo "Today is Monday";
                    break;
                case "Tue":
                    echo "Today is Tuesday";
                    break;    
                case "Wed":
                    echo "Today is Wednesday";
                    break;
                case "Thu":
                    echo "Today is Thursday";
                    break;
                case "Fri":
                    echo "Today is Friday";
                    break;
                case "Sat":
                    echo "Today is Saturday";
                    break;
                case "Sun":
                    echo "Today is Sunday";
                    break;        
                default:
                    echo "Wonder which day is this ?";            
            }
        ?>
    </body>
</html>
```

---
#### 9 Loop Types
> **For Loop** statement
```javascript
<html>
    <body>
        <?php
            $a = 0;
            $b = 0;

            for($i = 0; $i < 5; $i++>) {
                $a += 10;
                $b += 5;
            }

            echo ("At the end of the loop a = $a and b = $b");
        ?>
    </body>
</html>
```

> **While Loop** statement
```javascript
<html>
    <body>
        <?php
            $i = 0; 
            $sum = 50;

            while ($i < 10) {
                $num--;
                $i++;
            }

            echo ("Loop stopped at i = $i and num = $num");
        ?>
    </body>
</html>
```

> **Do...While Loop** statement
```javascript
<html>
    <body>
        <?php
            do {
                $i++;
            }

            while ($i < 10);
            echo ("Loop stopped at i = $i");
        ?>
    </body>
</html>
```

> **Foreach Loop** statement
```javascript
<html>
    <body>
        <?php 
            $array = array(1, 2, 3, 4, 5);

            foreach( $array as $value) {
                echo "Value is $value <br />";
            }
        ?>
    </body>
</html>
```

> **Break** statement
```javascript
<html>
    <body>
        <?php
            $i = 0;

            while( $i < 10){
                $i++;
                if($i == 3)
                    break;
            }
            echo ("Loop stopped at i = $i");
        ?>
    </body>
</html>
```

> **Continue** statement
```javascript
<html>
    <body>
        <?php
            $array = array(1, 2, 3, 4, 5);

            foreach( $array as $value) {
                if ( $value == 3)
                    continue;
                echo "Value is $value <br />";
            }
        ?>
    </body>
</html>

/* output:
    Value is 1
    Value is 2
    Value is 4
    Value is 5
*/
```

---
#### 10 Arrays
> [Array functions](https://www.tutorialspoint.com/php/php_array_functions.htm)

Three different kind of arrays | Description
-- | --
**Numeric array** | An array with a **_numeric_** index. Values are stored and accessed in linear fashion
**Associative array** | An array with **_strings_** as index. This stores element values in association with key values rather than in a strict linear index order
**Multidimensional array** | An array containing one or more arrays and values are accessed using **_multiple_** indices
---

> **Associative Arrays** will have their index as String so that you can establish a strong association between key and values

> **Note:** Don't keep associative array inside double quote while printing 

```javascript
<html>
    <body>
        <?php
            /* First method to associate create array */
            $salaries = array("mohammad" => 2000, "qadir" => 1000, "zara" => 500);

            echo "Salary of Mohammad is " . $alaries['mohammad'] . "<br />";
            echo "Salary of Qadir is " . $alaries['qadir'] . "<br />";
            echo "Salary of Zara is " . $alaries['zara'] . "<br />";

            /* Second method to associate create array */
            $salaries['mohammad'] = "high";
            $salaries['qadir'] = "medium";
            $salaries['zara'] = "low";

            echo "Salary of Mohammad is " . $alaries['mohammad'] . "<br />";
            echo "Salary of Qadir is " . $alaries['qadir'] . "<br />";
            echo "Salary of Zara is " . $alaries['zara'] . "<br />";
        ?>
    </body>
</html>
```

```javascript
$salaries = array("joey" => "high", "kaley" => "medium", "Tony" => "low");
    
       $names = array_keys($salaries);
       /*print_r($name . "<br />");*/
    
       for($i = 0; $i < count($salaries); $i++){
         /*  $name = $names[$i];
             echo($name." salary is ". $salaries[$name]."<br />"); 
         */
        echo($names[$i]." salary is ".$salaries[$names[$i]]."<br />");
       }
    //    print_r($salaries);
```

> **Multidimensional Arrays** each element in the main array can alos be an array. And each element in the sub-array can be an arry, and so on.

---
#### 12 Web Concepts
> PHP provides a function `getenv()` to access the value of all the environment variables. The information contained in the **HTTP_USER_AGENT** environment variable can be used to create dynamic content appropriate to the browser.

> There are two methods of posting data to the server script which are PHP GET & POST.

> **Browser Redirection**

Function | Description
-- | --
`header()` | Supplies raw HTTP headers to the browser and can be used to redirect it to another location

---
#### 13 GET & POST
>Two ways the browser client can send information to the web server
>> * GET Method
>> * POST Method

> Before the browser sends the information, it encodes it using a scheme called **URL encoding**. In this scheme, name/value pairs are joined with **equal signs (=)** and different pairs are separated by the **ampersand (&)**.
`name1=value1&name2=value2&name3=value3`

> Spaces are removed and replaced with the + character and any other nonalphanumeric characters are replaced with a hexadecimal values. After the information is encoded it is sent to the server.

> **The GET Method**
>> The GET method sends the encoded user information appended to the page request. The page and the encoded information are separated by the ? character.
`http://www.test.com/index.htm?name1=value&name2=value2`

> 1. The GET method produces a long string that appears in your server logs, in the browser's Location: box.
> 2. The GET method is restricted to send upto 1024 characters only.
> 3. **Never** use GET method if you have password or other sensitive information to be sent to the server.
> 4. GET can't be used to send binary data, like images or word documents, to the server.
> 5. The data sent by GET method can be accessed using `QUERY_STRING` environment variable.
> 6. The PHP provides `$_GET` associative array to access all the sent information using GET method.

> **The POST Method**
>> The POST method transfers information via **HTTP headers**. The information is encoded as described in case of GET method and put into a header called `QUERY_STRING`.

> 1. The POST method does not have any restriction on data size to be sent.
> 2. The POST method can be used to sent ASCII as well as binary data.
> 3. The data sent by POST method goes through HTTP header se security depends on HTTP protocol. By using Secure HTTP you can make sure that your information is secure.
> 4. The PHP provides `$_POST` associative array to access all the sent information using POST method.

**Methods** | **Big Difference**
-- | --
`GET` | After submitting, the user information will be displayed in the URL.
`POST` | After submitting, the user information will not be displayed in the URL, the URL does not get changed.
---

> **The `$_REQUEST` variable**
>> The PHP `$_REQUEST` variable contains the contents of both `$_GET`, `$_POST`, and `$_COOKIE`.

> The PHP `$_REQUEST` variable can be used to get the result from form data sent with both the `GET` and `POST` methods

---
#### 14 File Inclusion
> There are two PHP functions which can be used to included one PHP file into another PHP file before the server executes it.
>> 1. The `include()` Function
>> 2. The `require()` Function

> **`include()` Function** The `include()` function takes all the text in a specified file and copies it into the file that uses the include function. If there is any problem in loading a file then the `include()` function generates a warning but the script will continue execution. 

> **`require()` Function** The `require()` function takes all the text in a specified file and copies it into the file that uses the `include()` function. If there is any problem in loading a file then the `require()` function generates a fatal error and halt the execution of the script.

> So there is no difference in `require()` and `include()` **except** they handle error conditions. It is recommended to use the `require()` function instead of `include()`, because scripts should not continue executing if files are missing or misnamed.

> **Note** You may get plain warning messages or fatal error messages or nothing at all. This depends on your PHP Server configuration.

---
#### 15 Files & I/O
> **Opening and Closing files**
>> `fopen()` - open file. It requires two arguments stating first the file name and then mode in which to operate.

**Mode** | **Purpose**
-- | --
`r` | Opens the file for reading only<br />Places the file pointer at the **beginning** of the file
`r+` | Opens the file for reading and writing<br />Places the file pointer at the **beginning** of the file 
`w` | Opens the file for writing only<br />Places the file pointer at the **beginning** of the file and truncates the file to **zero** length<br />If file does not exist then it attemps to create a file
`w+` | Opens the file for reading and writing<br />Places the file pointer at the **beginning** of the file and truncates the file to **zero** length<br />If file does not exist then it attemps to create a file
`a` | Opens the file for writing only<br />Places the file pointer at the **end** of the file<br />If file does not exist then it attemps to create a file
`a+` | Opens the file for reading and writing<br />Places the file pointer at the **end** of the file<br />If file does not exist then it attemps to create a file.
---
> If an attempt to open a file fails then `fopen()` returns a value of **false** otherwise it returns **a file pointer** which is used for further reading or writing to that file.

> After making a changes to the opened file it is important to close it with the `fclose()` function. The `fclose()` function requires a file pointer as its argument and then returns true when the closure succeeds or false if it fails.

> **Reading a file**
>> Once a file is opened using `fopen()` function it can be read with a function called `fread()`. This function requires two arguments. These must be the file pointer and the length of the file expressed in bytes.

>> The files length can be found using the `filesize()` function which takes the file name as its argument and returns the size of the file expressed in bytes.

>> **The steps required to read a file with PHP**
>>> 1. Open a file using `fopen()` function
>>> 2. Get the file's length using `filesize()` function
>>> 3. Read the file's content using `fread()` function
>>> 4. Close the file with `fclose()` function

> **Writing a file**
>> A new file can be written or text can be appended to an existing file using the PHP `fwrite()` function. This function requires **two arguments** specifying a file pointer and the string of data that is to be written. Optionally a third integer argument can be included to specify the length of the data to write. If the third argument is included, writing would will stop after the specified length has been reached.

---
#### 16 Functions
> Setting default values for function parameters if the function's cassler does not pass it.
```javascript
function printMe($param = NULL) {
    print $param;
}

// Function prints NULL in case use does not pass any value to this function
```
> **Dynamic function calls**
>> It is possible to assign function names as strings to variables and then treat these variables exactly as you would the function name itself.

```javascript
function sayHello(){
    print("Hello");
}

$var = "sayHello";
$var();
```

---
#### 17 Cookies
> Cookies are text files stored on the client computer and they are kept of use tracking purpose.

> There are three steps involved in identifying returing users -
>> 1. Server script sends a set of cookies to the browser. For example name, age, or identification number etc.
>> 2. Browser stores this information on local machine for future use.
>> 3. When next time browser sends any request to web serverthen it sends those cookies information to the server and server uses that information to identify the user.

> **Setting Cookies with PHP**
> PHP provided `setcookie()` function to set a cookie. This function requires upto **six arguments** and should be called before **\<html\>** tag. For each cookie this function has to be called separately.
`setCookie(name, expire, path, domain, security);`
>> * **Name** - This sets the name of the cookie and is stored in an environment variable called `HTTP_COOKIE_VARS`. This variable is used while accessing cookies.
>> * **Value** - This sets the value of the named variable and is the content that you actually want to store.
>> * **Expiry** - This specify a future time in seconds since 00:00:00 GMT on 1st Jan 1970. After this time cookie will become inaccessible. If this parameter is not set then cookie will automatically expire when the Web Browser is closed.
>> * **Path** - This specifies the directories for which the cookie is valid. A single forward slash character permits the cookie to be valid for all directories.
>> * **Domain** - This can be used to specify the domain name in very large domains and must contain at least two periods to be valid. All cookies are only valid for the host and domain which created them.
>> * **Security** - This can be set to **1** to specify that the cookie should only be sent by secure transmission using **HTTPS** otherwise set to **0** which mean cookie can be sent by regular **HTTP**.

```javascript
// Following example will create two cookies name and age these cookies will be expired after one hour.

<?php
   setcookie("name", "John Watkin", time()+3600, "/","", 0);
   setcookie("age", "36", time()+3600, "/", "",  0);
?>
<html>
   <head>
      <title>Setting Cookies with PHP</title>
   </head>
   
   <body>
      <?php echo "Set Cookies"?>
   </body>
</html>
```

> **Accessing Cookies with PHP**
>> Simplest way to access cookies using `$_COOKIE` or `$HTTP_COOKIE_VARS` variables.

```javascript
<html>
   <head>
      <title>Accessing Cookies with PHP</title>
   </head>
   
   <body>
      
      <?php
         echo $_COOKIE["name"]. "<br />";
         
         /* is equivalent to */
         echo $HTTP_COOKIE_VARS["name"]. "<br />";
         
         echo $_COOKIE["age"] . "<br />";
         
         /* is equivalent to */
         echo $HTTP_COOKIE_VARS["age"] . "<br />";
      ?>
      
   </body>
</html>
```

> `isset()` function - check if a cookie is set or not

> **Deletin Cookie with PHP**
>> The safest way to delete cookie is to set the cookie with a date that has already expired

```javascript
<?php
   setcookie( "name", "", time()- 60, "/","", 0);
   setcookie( "age", "", time()- 60, "/","", 0);
?>
<html>
   <head>
      <title>Deleting Cookies with PHP</title>
   </head>
   
   <body>
      <?php echo "Deleted Cookies" ?>
   </body>
</html>
```

---
#### 18 Sessions
> A session creates a file in a temporary directory on the server where registered session variables and their values are stored. This data will be available to all pages on the site during that visit.

> The location of the temporary file is determined by a setting in the _php.ini_ file called `session.save_path`. Before using any session variable make sure you have setup this path.

> Starting a PHP Session by making a call to the `session_start()` function. This function first checks if a session is already started and if none is started then it starts one. It is recommended to put the call to `session_start()` at the beginning of the page.

> Session variables are stored in associative array called `$_SESSION[]`. These variables can be accessed during lifetime of a session.

> **Destroying a PHP Session**
>> A PHP session can be destroyed by `session_destroy()` function. This function does not need any argument and a single call can destroy **all** the session variables. If you want to destroy a single session variable then you can use `unset()` function to unset a session variable.
```javascript
<?php
    unset($_SESSION['counter']);
?>
```

> **Turning on Auto Session**
>> You don't need to call `start_session()` function to start a session when a user visits your site if can set `session.auto_start` variable to **1** in `php.ini` file.

> **Sessions without cookies**
>> There may be a case when a user does not allow to store cookies on their machine. So there is another method to send session ID to the browser.

>> Alternatively, you can use the constant SID which is defined if the session started. If the client did not send an appropriate session cookie, it has the form `session_name=session_id`. Otherwise, it expands to an empty string. Thus, you can embed it unconditionally into URLs.

>> The following example demonstrates how to register a variable, and how to link correctly to another page using SID.

```javascript
<?php
   session_start();
   
   if (isset($_SESSION['counter'])) {
      $_SESSION['counter'] = 1;
   }else {
      $_SESSION['counter']++;
   }
   
   $msg = "You have visited this page ".  $_SESSION['counter'];
   $msg .= "in this session.";
   
   echo ( $msg );
?>

<p>
   To continue  click following link <br />
   
   <a  href = "nextpage.php?<?php echo htmlspecialchars(SID); ?>">
</p>
```

> The `htmlspecialchars()` may be used when printing the SID in order to prevent XSS related attacks.

#### 19 Sending Emails
`mail(to, subject, message, headers, parameters);`
Sr.No | Parameter & Description
-- | --
**1** | **to** <br /> Required. Specifies the receiver / receivers of the email
**2** | **subject** <br /> Required. Specifies the subject of the email. This parameter cannot contain any newline charaters
**3** | **message** <br /> Required. Defines the message to be sent. Each line should be separated with a LF (\n). Lines should not exceed 70 characters
**4** | **headers** <br /> Optional. Specifies additional headers, like From, Cc, and Bcc. The additional headers should be separated with a CRLF (\r\n)
**5** | **parameters** <br /> Optional. Specifies an additional parameter to the send mail program