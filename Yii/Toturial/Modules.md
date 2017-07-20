**[Modules](https://www.tutorialspoint.com/yii/yii_modules.htm)**

> A module is an entity that has its own models, views, controllers, and possibly other modules. It is practically an application inside the application.

> When creating a module, a convention is to put the controller classes into the controller’s directory of the module's base path

> Views in the module should be put in the views folder of the module's base path. If views are rendered by a controller, they should be located in the folder corresponding to the controllerID. Add custom folder to the views folder.

```javascript
// module - hello
// add block of codes before code of 'params' => $params,
'modules' => [
         'hello' => [
            'class' => 'app\modules\hello\Hello', 
         ],
      ],
```

> **Important Points** Modules should −
>> * Be used in large applications. You should divide its features into several groups. Each feature group can be developed as a module.

>> * Be reusable. Some commonly used features, as SEO management or blog management, can be developed as modules, so that you can easily reuse them in future projects.