No | Name
-- | --
1 | [Components](http://www.yiiframework.com/doc-2.0/guide-concept-components.html)
2 | [Properties](http://www.yiiframework.com/doc-2.0/guide-concept-properties.html)
3 | [Events](http://www.yiiframework.com/doc-2.0/guide-concept-events.html)
4 | [Behaviors]()
5 | [Aliases]()
6 | [Class Autoloading]()
7 | [Service Locator]()
8 | [Dependency Injection Container]()
---
#### 1. Components
> Components are the main building blocks of Yii applications.

> The three main features that components provide to other classes are:
>> * Properties
>> * Events
>> * Behaviors

> A user interface component is easily writable because the class extends `yii\base\Component`.

> While **components** are very powerful, they are a bit heavier than normal objects, due to the fact that it takes extra memory and CPU time to support **event** and **behavior** functionality in particular. 

> If your components do not need these two features, you may consider extending your component class from `yii\base\Object` instead of `yii\base\Component`. Doing so will make your components as efficient as normal PHP objects, but with added support for properties.

> When extending your class from yii\base\Component or yii\base\Object, it is recommended that you follow these conventions:
>> * If you override the constructor, specify a `$config` parameter as the constructor's last parameter, and then pass this parameter to the parent constructor.
>> * Always call the parent constructor at the end of your overriding constructor.
>> * If you override the `yii\base\Object::init()` method, make sure you call the parent implementation of `init()` at the beginning of your `init()` method.

```javascript
<?php
namespace yii\components\MyClass;
use yii\base\Object;

class MyClass extends Object
{
    public $prop1;
    public $prop2;

    public function __construct($param1, $param2, $config = []) // $config as the last parameter
    {
        // ... initialization before configuration is applied
        parent::__construct($config);
    }

    public function init()
    {
        parent::init();
        // ... initialization after configuration is applied
    }
}
```

#### 2. Properties
> In PHP, class member variables are also called **_properties_**. These variables are part of the class definition.

> Yii introduces a base class classed `yii\base\Object` that supports defining properties based on _getter_ and _setter_ class methods.

```javascript
namespace app\components
use yii\base\Object

class Foo extends Object
{
    private $_label;

    public function getLabel()
    {
        return $this->_label;
    }

    public function setLabel($value)
    {
        $this->_label = trim($value);
    }
}
--------------------------------------------------
// equivalent to $label = $object->getlabel();
$label = $object->label;
// equivalent to $object->setlabel('abc');
$object->label = 'abc';
```
> A normal call to `property_exists()` does not work to determine magic properties. You should call `canGetProperty()` or `canSetProperty()` respectively.

#### 3. Events
> Yii introduces a base class called `yii\base\Component` to support events. If a class needs to trigger events, it should extend from `yii\base\Component`, or from a child class.

> An event handler is a PHP callback that gets executed when the event it is attached to is triggered. You can use any of the following callbacks:
>> * a global PHP function specified as a string (without parenthese). e.g., `'trim'`;
>> * an object method specified as an array of an object and a method name as a string (without parentheses), e.g., `[$object, 'methodName']`;
>> * a static class method specified as an array of a class name and a method name as a string (without parentheses), e.g., `['ClassName', 'methodName']`;
>> * an anonymous function, e.g., `function ($event) { ... }`.

> The signature of an event handler is:
```javascript
function ($event){
    // $event is an object of yii\base\Event or a child class
}
```
> Through the `$event` parameter, an event handler may get the following information about the event that occured:
>> * event name;
>> * event sender: the object whose `trigger()` method was called;
>> * custom data: the data that is provided when attaching the event handler (to be explained next).

> **Attaching Event Handlers**
>> Attaching a handler to an event by calling the `yii\base\Component::on()` method
```javascript
$foo = new Foo;

// this handler is a global function
$foo->on(Foo::EVENT_HELLO, 'function_name');
// this handler is an object method
$foo->on(Foo::EVENT_HELLO, [$object, 'function_name']);
// this handler is a static class method
$foo->on(Foo::EVENT_HELLO, ['app\components\Bar', 'function_name']);
// this handler is an anonymous function
$foo->on(Foo::EVENT_HELLO, function($event){
    // event handling logic
});
```
> When attaching an event handler, you may provide additional data as the third parameter to yii\base\Component::on(). The data will be made available to the handler when the event is triggered and the handler is called.
```javascript
// The following code will display "abc" when the event is triggered
// because $event->data contains the data passed as the 3rd argument to "on"
$foo->on(Foo:EVENT_HELLO, 'function_name', 'abc');

function function_name($event){
    echo $event->data;
}
```

> **Triggering Events**
>> Events are triggered by calling the `yii\base\Component::trigger()` method. The method requires an _event name_, and optionally an event object that describes the parameters to be passed to the event handlers.

```javascript
namespace app\components;

use yii\base\Component;
use yii\base\Event;

class Foo extends Component
{
    const EVENT_HELLO = 'hello';

    public function bar()
    {
        $this->trigger(self::EVENT_HELLO);
    }
}

// Any calls to `bar()` will trigger an event named hello;
```
**Tip:** It is recommended to use class constants to represent event names. The constant "EVENT_HELLO" represents the hello event.

> Sometimes when triggering an event you may want to pass along additional information to the event handlers. For example, a mailer may want to pass the message information to the handlers of the messageSent event so that the handlers can know the particulars of the sent messages. To do so, you can provide an event object as the second parameter to the `yii\base\Component::trigger()` method. The event object must be an instance of the `yii\base\Event` class or a child class. 
```javascript
namesapce app\components;

use yii\base\Component;
use yii\base\Event;

class MessageEvent extends Event
{
    public $message;
}

class Miler extends Component
{
    const EVENT_MESSAGE_SENT = 'messageSent';

    public function send($message)
    {
        // ...sending $message...

        $event = new MessageEvent;
        $event->message = $message;
        $this->trigger(self::EVENT_MESSAGE_SENT, $event);
    }
}
```

**Detaching Event Handlers**
> To detach a handler from an event, call the `yii\base\Component::off()` method
```javascript
// the handler is a global function
$foo->off(FOO::EVENT_HELLO, 'function_name');
// the handler is an object method
$foo->off(FOO::EVENT_HELLO, [$object, 'function_name']);
// the handler is a static class method
$foo->off(FOO::EVENT_HELLO, ['app\components\Bar', 'function_name']);
// the handler is an anonymous function
$foo->off(FOO::EVENT_HELLO, $anonymousFunction);
```

**Note:** In general you should not try to detach an anonymous function unless you store it somewhere when it is attached to the event. In the above example, it is assumed that the anonyous function is stored as a variable `$anonyousFunction`.

> To detach _all_ handlers from an event, simply call `yii\base\Component::off()` withoud the second parameter:
```javascript
$foo->off(FOO:EVENT_HELLO);
```
**Class-Level Event Handlers**
> To attach the handlers on the _class level_ by calling the static method `yii\base\Event::on()`.

> For example, an Active Record object will trigger an EVENT_AFTER_INSERT event whenever it inserts a new record into the database. In order to track insertions done by every Active Record object, you may use the following code:
```javascript
use yii;
use yii\base\Event;
use yii\bd\ActiveRecord;

Event::on(ActiveRecord::className(), ActiveRecord::EVENT_AFTER_INSERT, function($event){
    Yii::trace(get_class($event->sender) . ' is inserted');
});
```

**Detach a class-level handler**
```javascript
// detach $handler
Event::off(Foo::className(), Foo::EVENT_HELLO, $handler);

// detach all handlers of Foo::EVENT_HELLO
Event::off(Foo::className(), Foo::EVENT_HELLO);
```

#### 4. 
#### 5. 
#### 6. Class Autoloading
> The autoloader is installed when you include the `Yii.php` file.



#### 7. 
#### 8. 
