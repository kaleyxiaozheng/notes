Index | Contents
-- | --
1 | [Traversing](https://www.w3schools.com/jquery/jquery_ref_traversing.asp)
2 | Ancestors
3 | Descendants
4 | Siblings
5 | Filtering
---
#### 2. Traversing Ancestors
Traversing up the DOM tree | Description | Differnece
-- | -- | --
`parent()` | Returns the **direct** parent element of the selected element | This method only traverse a single level up the DOM tree
`parents()` | Returns all ancestor elements of the selected element | All the way up to the document's root element (<html>)
`parentsUntil()` | Returns all ancestor elements between two given arguments |

#### 3. Traversing Descendants
Traversing down the DOM tree | Description | Difference
-- | -- | --
`children()` | Returns all direct children of the selected element | This method only traverse a single level down the DOM tree
`find()` | Returns descendant elements of the selected element | All the way down to the last descendant

#### 4. Traversing Siblings
Traversing sideways in the DOM tree | Description  
-- | -- 
`siblings()` | Returns all sibling elements of the selected element. You can also use an optional parameter to filter the search for siblings
`next()` | Returns the next sibling element of the selected element
`nextAll()` | Returns all next sibling elements of the selected element
`NextUntil()` | Returns all next sibling elements between two given arguments
`prev()` | Returns the previous sibling element of the selected element
`prevAll()` | Returns all previous sibling elements of the selected element
`prevUntil()` | Returns all previous sibling elements between two given arguments

#### 5. Traversing Filtering
The most basic filtering methods | Description
-- | --
`first()` | Returns the first element of the specified elements
`last()` | Returns the last element of the specified elements
`eq()` | Returns an element with a specific index number of the selected elements. The index numbers start at 0
`filter()` | Lets you specify a criteria. Elements that do not match the criteria are removed from the selection, and those that match will be returned
`not()` | Returns all elements that do not match the criteria

> **Tip:** the `not()` is the opposite of filter()

```javascript
// Add a yellow background color to the last <p> element inside the last <div> element
<body>
<div style="border: 1px solid black;">
  <p>This is the first paragraph in a div.</p>
  <p>This is the last paragraph in a div.</p>
</div><br>

<div style="border: 1px solid black;">
  <p>This is the first paragraph in another div.</p>
  <p>This is the last paragraph in another div.</p>
</div>
</body>
// ---------------------------------------------
<script>
$("div p").last().css("background-color", "yellow");
</script>
```