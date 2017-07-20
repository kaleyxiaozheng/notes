**[Using Actions](https://www.tutorialspoint.com/yii/yii_using_actions.htm)**

> If you plan to resuse the same action in different places, you should define it as a standalone action.

> **Create a Standalone Action Class**
>> 1. Extend `yii\base\Action` or a child class, and implement a `run()` method
>> 2. Step 1 - Create a components folder inside your project root. Inside the folder create a file called `GreetingAction.php`

```javascript
<?php 
   namespace app\components;
   use yii\base\Action;
   class GreetingAction extends Action {
      public function run() {
         return "Greeting";
      }
   }
?>
```

>> 3. Inorder to resuse this action, we need to declare our action in the action map by overriding the `actions()` method in `ExampleController`

```javascript
<?php
   namespace app\controllers;
   use yii\web\Controller;
   class ExampleController extends Controller {
      public function actions() {
         return [
            'greeting' => 'app\components\GreetingAction',
         ];
      }
      public function actionIndex() {
         $message = "index action of the ExampleController";
         
         return $this->render("example",[
            'message' => $message
         ]);
      }
      public function actionHelloWorld() {
         return "Hello world!";
      }
   }
?>
```

> The `actions()` method returns an array whose values are class names and keys are action IDs.

>> 4. You can also use actions to redirect users to other URLs.

```javascript
public function actionOpenGoogle() {
    return $this->redirect('http://google.com.au');
}
```

> The action methods can take parameters, called `action parameters`. Their values are retrieved from `$_GET` using the parameter name as the key.

```javascript
public function actionTestParams($first, $second) {
   return "$first $second";
}

// then type
http://localhost:8080/index.php?r=example/testparams&first=hello&second=world
```

> **Set default action in controller**

```javascript
<?php
   namespace app\controllers;
   use yii\web\Controller;
   class ExampleController extends Controller {
      public $defaultAction = "hello-world";
      /* other actions */
   }
?>
```

> To fulfill the request, the controller will undergo the following lifecycle −
>> * The `yii\base\Controller:init()` method is called.
>> * The controller creates an action based on the action ID.
>> * The controller sequentially calls the `beforeAction()` method of the web application, module, and the controller.
>> * The controller runs the action.
>> * The controller sequentially calls the `afterAction()` method of the web application, module, and the controller.
>> * The application assigns action result to the response.

> **Important Points** The Controllers should −
>> * Be very thin. Each action should contain only a few lines of code.
>> * Use Views for responses.
>> * Not embed HTML.
>> * Access the request data.
>> * Call methods of models.
>> * Not process the request data. These should be processed in the model.