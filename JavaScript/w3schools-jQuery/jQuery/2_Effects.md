Index | Contents
-- | --
1 | Hide/Show
2 | Fade
3 | Slide
4 | Animate
5 | stop()
6 | Callback
7 | Chaining
---
[jQuery Effects Reference](https://www.w3schools.com/jquery/jquery_ref_effects.asp)

#### 1. Hide/Show
> Syntax:
```javascript
$(selector).hide(speed, callback);
$(selector).show(speed, callback);
$(selector).toggle(speed, callback);
// The optional speed parameter specifies the speed of the hiding/showing, and can take the following values: "slow", "fast", or milliseconds.
//The optional callback parameter is a function to be executed after the hide() or show() method completes
```

#### 2. Fade
Method | Syntax
-- | --
fadeIn() | $(selector).fadeIn(speed, callback);
fadeOut() | $(selector).fadeOut(speed, callback);
fadeToggle() | $(selector).fadeToggle(speed, callback);
fadeTo() | $(selector).fadeTo(speed,opacity, callback);

> `fadeTo()` allows fading to a given opacity (value between 0 and 1)

#### 3. Slide
Method | Syntax
-- | --
slideDown() | $(selector).slideDown(speed, callback);
slideUp() | $(selector).slideUp(speed, callback);
slideToggle() | $(selector).slideToggle(speed, callback);

#### 4. Animate
> `animate()` method lets you create custom animations.

```javascript
$(selector).animate({params}, speed, callback);
```
> * The required **params** parameter defines the CSS properties to be animated.
> * The optional speed parameter specifies the duration of the effct. It can take the following values: "slow", "fast", or milliseconds.
> * The optional callback parameter is a function to be executed after the animation completes.

> All property names must be camel-cased when used with the `animate()` method: you will need to write **paddingLeft** instead of **padding-left**, **marginRight** instead of **margin-right**, and so on. Color animation is not included in the core jQuery library.

#### 5. Stop()
> `stop()` method is used to stop animations or effects before it is finished.

```javascript
$(selector).stop(stopAll, goToEnd);
```
> * The optional **stopAll** parameter specifies whether also the animation queue should be cleared or not. Default is false, which means that only the active animation will be stopped, allowing any queued animations to be performed afterwards.

> * The optional **goToEnd** parameter specifies whether or not to complete the current animation immediately. **Default is false**.

> * So, by default, the `stop()` method kills the current animation being performed on the selected element.

#### 6. Callback
> A callback function is executed after the current effect is 100% finished.

```javascript
$(selector).hide(speed, callback);
// callback is a function
```
```javascript
// The example below has a callback parameter that is a function that will be executed after the hide effect is completed
$("button").click(function(){
    $("p").hide("slow", function(){
        alert("The paragraph is now hidden");
    });
});

// The example below has no callback parameter, and the alert box will be displayed before the hide effect is completed
$("button").click(function(){
    $("p").hide(1000);
    alert("The paragraph is now hidden");
});
```

#### 7. Chaining
> Chaining allows us to run multiple jQuery methods ( on the same element) within a single statement.

