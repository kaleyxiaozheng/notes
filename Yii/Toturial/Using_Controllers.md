**[Using controllers](https://www.tutorialspoint.com/yii/yii_using_controllers.htm)**

> **Changing the default controller to your own controller**
>> 1. open file `web.php`
>> 2. add code of 
```javascript
'defaultRoute' => 'your_own_controller_name',
//like 'defaultRoute' => 'example',
```
 To convert the controller ID to the controller class name |
 -- |
 page becomes `app\controllers\PageController` |
 post-article becomes `app\controllers\PostArticleController` | 
 user/post-article becomes `app\controllers\user/PostArticleController` |
 userBlogs/post-article becomes `app\controllers\userBlogs\PostArticleController`
