Index | Contents
-- | --
1 | Intro
2 | Get Started
3 | Syntax
4 | [Selectors](https://www.w3schools.com/jquery/jquery_ref_selectors.asp)
5 | [Events](https://www.w3schools.com/jquery/jquery_ref_events.asp)
---
#### 1. Intro
> The jQuery library contains the following features:
>> * HTML/DOM manipulation 
>> * CSS manipulation
>> * HTML event methods
>> * Effects and animations
>> * AJAX
>> * Utilites

#### 2. Get Started
```javascript
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
```

#### 3. Syntax
> Basic syntax is : `$(selector).action()`
> * A **$** sign to define/access jQuery
> * A **(selector)** to "query(or find)" HTML elements
> * A jQuery **action()** to be performed on the element(s)

> Examples

code | explanation
-- | --
`#(this).hide()` | hides the current element
`#("p").hide()` | hides all \<p\> elements
`#(.test).hide()` | hides all elements with class = "test"
`#(#test).hide()` | hides all elements with id = "test"

#### 4. [Selectors](https://www.w3schools.com/jquery/jquery_ref_selectors.asp)
Syntax | Description
-- | --
`$("*")` | Selects all elements
`$(this)` | Selects the current HTML element
`$("p.intro")` | Selects all \<p\> elements with class = "intro"
`$("p:first")` | Selects the first \<p\> element
`$(ul li:first)` | Selects the first \<li\> element of the first \<ul\>
`$("ul li:first-child")` | Selects the first \<li\> element of every \<ul\>
`$("[href]")` | Selects all elements with an href attribute
`$("a[target='_blank']")` | Selects all \<a\> elements with a target attribute value equal to "_blank"
`$("a[target!='_blank']")` | Selects all \<a\> elements with a target attribute value **NOT** equal to "_blank"
`$(":button")` | Selects all \<button\> elements and \<input\> elements of type="button"
`$("tr:even")` | Selects all even \<tr\> elements
`$("tr:odd")` | Selects all odd \<tr\> elements

#### 5. [Events](https://www.w3schools.com/jquery/jquery_ref_events.asp)

**Mouse Events** | **Keyboard Events** | **Form Events** | **Document/Window Events**
-- | -- | -- | --
click | keypress | submit | load
dblclick | keydown | change | resize
mouseenter | keyup | focus | scroll
mouseleave | | blur| unload

> the `$(document).ready()` method allows us to execute a function when the document is fully loaded

> `blur()` method means lose focus


