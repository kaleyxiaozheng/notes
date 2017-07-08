Index | Contents
-- | --
1 | Get Content and Attributes
2 | Set
3 | Add
4 | Remove
5 | Css Classes
6 | css()
7 | Dimensions
---
[HTML Reference](https://www.w3schools.com/jquery/jquery_ref_html.asp)

#### 1. Get Content and Attributes

jQuery methods for DOM manipulation | description
-- | --
`text()` | Sets or returns the text content of selected elements
`html()` | Sets or returns the content of selected elements (including HTML markup)
`val()` | Sets or returns the value of form fileds
`attr()` | Get attribute value

#### 2. Set

jQuery methods for DOM manipulation | description
-- | --
`text()` | Sets or returns the text content of selected elements
`html()` | Sets or returns the content of selected elements (including HTML markup)
`val()` | Sets or returns the value of form fileds
`attr()` | Get attribute value

> All of the three jQuery methods above: `text()`, `html()`, and `val()`, also come with a callback function. The callback function has two parameters: the index of the current element in the list of elements selected and the original (old) value. You then return the string you wish to use as the new value from the function

#### 3. Add

Methods | Description
-- | --
`append()` | Inserts content at the end of the selected elements
`prepend()` | Inserts content at the beginning of the selected elements
`after()` | Inserts content after the selected elements
`before()` | Inserts content before the selected elements

> We create several new elements. The elements are created with **text/HTML**, **jQuery**, and **JavaScript/DOM**. Then we append the new elements to the text with the `append()` method (this would have worked for `prepend()` too)
```javascript
    function appendText() {
    var txt1 = "<p>Text.</p>";              // Create text with HTML
    var txt2 = $("<p></p>").text("Text.");  // Create text with jQuery
    var txt3 = document.createElement("p");
    txt3.innerHTML = "Text.";               // Create text with DOM
    $("body").append(txt1, txt2, txt3);     // Append new elements
}
//------------------------------------------------------------------------------
<body>
<p>This is a paragraph.</p>
<button onclick="appendText()">Append text</button>
</body>
```

#### 4. Remove

Two methods | Description
-- | --
`remove()` | Removes the selected element (and its child elements)
`empty()` | Removes the child elements from the selected element

> The jQuery remove() method also accepts one parameter, which allows you to filter the elements to be removed.

The parameter can be any of the jQuery selector syntaxes

#### 5. Css Classes


#### 6. css()


#### 7. Dimensions