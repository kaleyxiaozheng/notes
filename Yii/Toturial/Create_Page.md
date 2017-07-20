**[Create Page](https://www.tutorialspoint.com/yii/yii_create_page.htm)**

> To create a page, we **must** create an `action` and a `view`

> **Actions** are declared in controllers. The end user will receive the execution result of an action.

> **View** is a script that generates a response's content. 

Step | Explanation 
1 | Declare the speak action in the existing `SiteController` 
2 | Create a view file called `speak.php` 
3 | Type `http://localhost:8080/basic1/web/index.php?r=site/speak&message=hello%20world%20I%20am%20Kaley.`

```javascript
// Step 1
public function actionSpeak($message = "default message") {
    return $this->render("speak", ['message' => $message]);
}

// Step 2
<?php
    use yii\helpers\Html;
?>
<?php echo Html::encode($message); ?>
```

> **Note** we `HTML-encode` the message parameter before printing to avoid `XSS` attack.

> The **`R`** parameter in the URL stands for route. The route's default format is `controllerID/actionID`




