**[Using Flash Data](https://www.tutorialspoint.com/yii/yii_using_flash_data.htm)**

> Flash data is a session data which −
>> * Is set in one request.
>> * Will only be available on the next request.
>> * Will be automatically deleted afterwards.

> **Step 1 ** - Add an `actionShowFlash` method to the `SiteController`

```javascript
public function actionShowFlash() {
   $session = Yii::$app->session;
   // set a flash message named as "greeting"
   $session->setFlash('greeting', 'Hello user!');
   return $this->render('showflash');
}
```

> **Step 2 ** - Inside the views/site folder, create a View file called `showflash.php`

```javascript
<?php
   use yii\bootstrap\Alert;
   echo Alert::widget([
      'options' => ['class' => 'alert-info'],
      'body' => Yii::$app->session->getFlash('greeting'),
   ]);
?>
```

> Yii also provides the following session classes −
>> * `yii\web\CacheSession` − Stores session information in a cache.
>> * `yii\web\DbSession` − Stores session information in a database.
>> * `yii\mongodb\Session` − Stores session information in a MongoDB.
>> * `yii\redis\Session` − Stores session information using redis database.