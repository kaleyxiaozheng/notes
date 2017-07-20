**[Entry Scripts](https://www.tutorialspoint.com/yii/yii_entry_scripts.htm)**

> Web application (as well as console application) has a single entry script. The End user makes request to the entry script. Then the entry script instantiates application instances and forwards requests to them.

> 1. Entry script for a **console application** is usually stored in a project base path and named as `yii.php`.

> 2. Entry script for a **web application** must be stored under a web accessible directory. It is often called `index.php`.

> The Entry scripts do the following −
>> * Define constants.
>> * Register Composer autoloader.
>> * Include Yii files.
>> * Load configuration.
>> * Create and configure an application instance.
>> * Process the incoming request.

> The best place for defining global constants is entry scripts. There are three supported by Yii constants −
>> * YII_DEBUG − Defines whether you are in debug mode or not. If set to true, then we will see more log data and detail error call stack.
>> * YII_ENV − Defines the environment mode. The default value is prod. Available values are prod, dev, and test. They are used in configuration files to define, for example, a different DB connection (local and remote) or other values.
>> * YII_ENABLE_ERROR_HANDLER − Specifies whether to enable the default Yii error handler.

> **Note** - The global constants should be defined at the beginning of an entry script in order to take effect when other PHP files are included.

```javascript
//defining global constants 
defined('YII_DEBUG') or define('YII_DEBUG', true); 
which is equivalent to: 
if(!defined('YII_DEBUG')) { 
   define('YII_DEBUG', true); 
} 
```