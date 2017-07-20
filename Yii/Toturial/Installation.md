**[Installation](https://www.tutorialspoint.com/yii/yii_installation.htm)**

Step | Explanation | Command
-- | -- | --
1 | Find a suitable directory in your hard drive and download the Composer PHAR (PHP archive) | `curl -sS https://getcomposer.org/installer | php`
2 | move this archive to the bin directory | `mv composer.phar /usr/local/bin/composer`
3 | With the Composer installed, you can install Yii2 basic application template| `composer global require "fxp/composer-asset-plugin:~1.4.1"` <br /> <br />`composer create-project --prefer-dist yiisoft/yii2-app-basic helloworld`
4 | Open the **helloworld** directory and launch the web server built into PHP| `php -S localhost:8080 -t web`
5 | Open **http://localhost:8080** in your browser | 