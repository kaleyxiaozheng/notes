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
13. | [GET & POST]()
14. | [File Inclusion]()
15. | [Files & I/O]()
16. | [Functions]()
17. | [Cookies]()
18. | [Sessions]()
19. | [Sending Emails]()
20. | [File Uploading]()
21. | [Coding Standard]()
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