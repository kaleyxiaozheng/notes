**[Sessions](https://www.tutorialspoint.com/yii/yii_sessions.htm)**

> Sessions make data accessible acroo various pages. A session creates a file on the server in a temporary directory where all session variables are stored. This data is avaliable to all the pages of your web site during the visit of that particular user.

> When a session starts, the following happens -
>> * PHP creates a `unique ID` for that particular session.
>> * A cookie called `PHPSESSID` is sent on the client side (to the browser).
>> * The server creates a file in the temporary folder where all session variables are saved.
>> * When a server wants to retrieve the value from a session variable, PHP automatially gets the unique session ID from the PHPSESSID cookie. Then, it looks in its temporary directory for the needed file.

> To **start a session**, you should call the `session_start()` function. All session variables are stored in the `$_SESSION` global variable. You can also use the `isset()` function to check whether the session variable is set

```javascript
<?php
    session_start();
    if( isset($_SESSION['number']) ) {
        $_SESSION['number'] += 1;
    } else {
        $_SESSION['number'] += 1;
    }
    $msg = "This page was visited " . $_SESSION['number'];
    $msg .= "in this session";
    echo $msg;
?>
```

> To **destroy a session**, you should call the `session_destroy()` function. Th destroy a single session variable, call the `unset()` function

```javascript
<?php
    unset( $_SESSION['number'] );
    session_destroy();
?>
```

> **Using Sessions in Yii**
>> Sessions allow data to be persisted across user requests. In PHP, you may access them through the `$_SESSION` variable. In Yii, you can get access to sessions via the session application component.

>> **create a session** - Add the `actionOpenAndCloseSession` method to the SiteController.

>> To access session variables, you may use `set()` and `get()` methods.

```javascript
public function actionAccessSession() {

   $session = Yii::$app->session;
	
   // set a session variable
   $session->set('language', 'ru-RU');
	
   // get a session variable
   $language = $session->get('language');
   var_dump($language);
		  
   // remove a session variable
   $session->remove('language');
		  
   // check if a session variable exists
   if (!$session->has('language')) echo "language is not set";
		  
   $session['captcha'] = [
      'value' => 'aSBS23',
      'lifetime' => 7200,
   ];
   var_dump($session['captcha']);
}
```