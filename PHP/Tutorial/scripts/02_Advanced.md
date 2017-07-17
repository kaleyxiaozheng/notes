Index | Contents
-- | --
1. | [Predefined Variables](https://www.tutorialspoint.com/php/php_predefined_variables.htm)
2. | [Regular Expressions](https://www.tutorialspoint.com/php/php_regular_expression.htm)
3. | [Error & Exception Handling](https://www.tutorialspoint.com/php/php_error_handling.htm)
4. | [Bugs Debugging](https://www.tutorialspoint.com/php/php_bugs_debugging.htm)
5. | [Date & Time](https://www.tutorialspoint.com/php/php_date_and_time.htm)
6. | [MySQL](https://www.tutorialspoint.com/php/create_mysql_database_using_php.htm)
7. | [AJAX](https://www.tutorialspoint.com/php/php_and_ajax.htm)
8. | [XML](https://www.tutorialspoint.com/php/php_and_xml.htm)
9. | [Object Oriented](https://www.tutorialspoint.com/php/php_object_oriented.htm) 
---
#### 3 Error & Exception Handling
> `die()`

> **Defining custom error handling function**
`error_function(error_level, error_message, error_file, error_line, error_context);`

**Sr.No** | **Parameter & Description**
-- | --
**1** | **error_level** <br /> Required - Specifies the error report level for the user-defined error. Must be a value number.
**2** | **error_message** <br /> Required - Specifies the error message for the user-defined error.
**3** | **error_file** <br /> Optional - Specifies the file name in which the error occurred.
**4** | **error_line** <br /> Optional - Specifies the line number in which the error occurred.
**5** | **error_context** <br /> Optional - Specifies an array containing every variable and their values in use when the error occurred.

> Error level can be set using PHP built-in library function. Once you define your custome error handler you need to set it using PHP built-in library **`set_error_handler`** function.

> **Exception Model**
>> * **Try** - A function using an exception should be in a "try" block. If the exception does not trigger, the code will continue as normal. However if the exception triggers, an exception is "thrown".
>> * **Throw** - This is how you trigger an exception. Each "throw" must have at least one "catch". 
>> * **Catch** - A "catch" block retrieves an exception and creates an object containing the exception information.

Functions can be used from **Exception** class | Description
-- | --
**getMessage()** | message of exception
**getCode()** | code of exception
**getFile()** | source filename
**getLine()** | source line
**getTrace()** | n array of the backtrace()
**getTraceAsString()** | formated string of trace

---
#### 4 Bugs Debugging
> To make error messages display in the browser, set the `display_errors` configuration directive to **`On`**. To send errors to the web server error log, set `log_errors` to **`On`**. You can set them both to **`On`** if you want error messages in both places.

---
#### 5 Date & Time
> `getdate()` return an associative array containing information about the date.

> `date()` returns a formatted string representing a date.

Sr.No | Formated $ Description | Example
-- | -- | --
1 | **`a`** <br /> 'am' or 'pm' lowercase| pm
2 | **`A`** <br /> 'Am' or 'Pm' uppercase | PM
3 | **`d`** <br /> Day of month, a number with leading zeroes | 20
4 | **`D`** <br /> Day of week (three letters) | Thu
5 | **`f`** <br /> Month name | January
6 | **`h`** <br /> Hour (12-hour format - leading zeroes) | 12
7 | **`H`** <br /> Hour (24-hour format - leading zeroes) | 22
8 | **`g`** <br /> Hour (12-hour format - no leading zeroes) | 12
9 | **`G`** <br /> Hour (24-hour format - no leading zeroes) | 22 
10 | **`i`** <br /> Minutes (0-59) | 23
11 | **`j`** <br /> Day of the month (no leading zeroes) | 20
12 | **`l`** <br /> Day of the week | Thursday
13 | **`L`** <br /> Leap year ('1' for yes, '0' for no) | 1
14 | **`m`** <br /> Month of year (number - leading zeroes) | 1
15 | **`M`** <br /> Month of year (three letters) | Jan
16 | **`r`** <br /> The RFC 2822 formatted date | Thu, 21 Dec 2000 16:01:07 +0200
17 | **`n`** <br /> Month of year (number - no leading zeores) | 2
18 | **`s`** <br /> Seconds of hour | 20
19 | **`U`** <br /> Time stamp | 948372444
20 | **`y`** <br /> Year (two digits) | 06
21 | **`Y`** <br /> Year (four digits) | 2006
22 | **`z`** <br /> Day of year (0-365) | 206
23 | **`Z`** <br /> Offset in seconds from GMT | +5 
---

```javascript
<?php 
    print date("/m/d/y G.i:s<br>", time());
    print "Today is ";
    print date("j of F Y, \a\\t g.i a", time());
?>
```