**[JSX](https://www.tutorialspoint.com/reactjs/reactjs_jsx.htm)**

> Pros that comes with JSX
>> * JSX is faster because it performs optimization while compiling code to JavaScript.
>> * It is also type-safe and most of the errors can be caught during compilation.
>> * JSX makes it easier and faster to write templates if you are familiar with HTML.

> **A couple of things need to keep in mind when working with JSX**
>> 1. `Nested Elements` - Wrap all elements with one container element when returning more elements.

```javascript
import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
                <h2>Content</h2>
                <p>This is the content!!!</p>
            </div>
        );
    }
}
```

>> 2. `Attributes` - You can use your own custom attributes in addition to regular HTML properties and attributes. When you want to add custom attribute, you need to use `data-` prefix.

```javascript
import React from 'react';

class App extends React.Component {
    render {
        return (
            <div>
                <h1>Header</h1>
                <h2>Content</h2>
                <p data-myattribute = "somevalue">This is the content!!!</p>
            </div>
        );
    }
}

export default App;
```

> JavaScript Expressions can be used inside of JSX, just need to wrap it with curly brackets `{}`

```javascript
import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>{1+1}</h1>
         </div>
      );
   }
}

export default App;

// it will display 2
```

> You **can not** use `if else` statements inside JSX but you can use conditional (`ternary`) expressions instead.

```javascript
import React from 'react';

class App extends React.Component {
   render() {

      var i = 1;

      return (
         <div>
            <h1>{i == 1 ? 'True!' : 'False'}</h1>
         </div>
      );
   }
}

export default App;
```

> **Styling**

>> React recommends using inline styles. When you want to set inline styles, you need to use camelCase syntax. React will also automatically append px after the number value on specific elements.

```javascript
import React from 'react';

class App extends React.Component {
    render() {
        var myStyle = {
            fontSize: 100,
            color: '#FF0000'
        }
        return (
            <div>
                <h1 style = {myStyle}>Header</h1>
            </div>
        );
    }
}

export default App;
```

> **Comments**
`{// End of the line Comment...}`
`{/* Multi line comment... */}`