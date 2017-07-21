**[Extensions](https://www.tutorialspoint.com/yii/yii_extensions.htm)**

> Most extensions are distributed as **Composer packages**. Composer installs packages from Packagist – the repository for Composer packages.

> To install a third-party extension, you should -
>> * Add the extension to a `composer.json` file.
>> * Run composer intall.

> To add **Date and Time Widget**
>> 1. Add the dependency `"kartik-v/yii2-widget-datetimepicker": "*"` to the required section of `composer.json` file.
>> 2. Inside the project root, run the composer update to update all the dependencies
`sudo composer update` or `composer update` in Terminal
>> 3. To modify the view

```javascript
<?php
use kartik\datetime\DateTimePicker;

$this->registerMetaTag(['name' => 'keywords', 'content' => 'yii, developing, views,
      meta, tags']);
$this->registerMetaTag(['name' => 'description', 'content' => 'This is the description of this page!'], 'description');
?>


<?php
      echo DateTimePicker::widget([
         'name' => 'dp_1',
         'type' => DateTimePicker::TYPE_INPUT,
         'value' => '23-Feb-1982 10:10',
         'pluginOptions' => [
            'autoclose'=>true,
            'format' => 'dd-M-yyyy hh:ii'
         ]
      ]);
   ?>
```