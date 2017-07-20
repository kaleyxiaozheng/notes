**[Controllers](https://www.tutorialspoint.com/yii/yii_controllers.htm)**

> Controllers are responsible for processing requests and generating responses. After user's request, the controller will analyze request data, pass them to model, then insert the model result into a view, and generate a response.

> Controllers include actions. They are the basic units that user can request for execution. 

```javascript
public function actionContact() { 
         //load ContactForm model 
         $model = new ContactForm(); 
         //if there was a POST request, then try to load POST data into a model 
         if ($model->load(Yii::$app->request->post()) && $model>contact(Yii::$app->params
            ['adminEmail'])) { 
            Yii::$app->session->setFlash('contactFormSubmitted');  
            return $this->refresh(); 
         } 
         return $this->render('contact', [ 
            'model' => $model, 
         ]); 
```

> If there was a POST request, we assign the POST data to the model and try to send an email. If we success then we set a flash message with the text “Thank you for contacting us. We will respond to you as soon as possible.” and refresh the page.

> A route consists of the following parts−
>> * **moduleID** − If the controller belongs to a module, then this part of the route exists.
>> * **controllerID** − A unique string that identifies the controller among all controllers within the same module or application.
>> * **actionID** − A unique string that identifies the action among all actions within the same controller.

> Syntax of the route
> `controllerID/actionID`
> If the controller belongs to a module, `moduleID/controllerID/actionID`