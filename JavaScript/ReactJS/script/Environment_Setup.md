**[Environment Setup](https://www.tutorialspoint.com/reactjs/reactjs_environment_setup.htm)**

> **Step 1** - Install Global Packages.
`C:\Users\username>npm install -g babel`
`C:\Users\username>npm install -g babel-cli`

> **Step 2** - Create Root Folder
>> The root folder will be named `reactApp`. After the folder is created we need to open it and create _empty_ `package.json` file inside by running `npm init` from the terminal.
`C:\Users\username\MyProject>mkdir reactApp`
`C:\Users\username\MyProject>cd reactApp`
`C:\Users\username\MyProject\reactApp>npm init`

> **Step 3** - Add Dependencies and plugins
>> Using `webpack` bundler. So install `webpack` and `webpack-dev-server` first
`C:\Users\username>npm install webpack --save`
`C:\Users\username>npm install webpack-dev-server --save`
>> Since we want to use React, we need to install it first. The `--save` command will add these packages to `package.json` file
`C:\Users\username\MyProject\reactApp>npm install react --save`
`C:\Users\username\MyProject\reactApp>npm install react-dom --save`
>> Installing some `babel` plugins
`C:\Users\username\MyProject\reactApp>npm install babel-core`
`C:\Users\username\MyProject\reactApp>npm install babel-loader`
`C:\Users\username\MyProject\reactApp>npm install babel-preset-react`
`C:\Users\username\MyProject\reactApp>npm install babel-preset-es2015`

> **Step 4** - Create files
`C:\Users\username\MyProject\reactApp>touch index.html`
`C:\Users\username\MyProject\reactApp>touch App.jsx`
`C:\Users\username\MyProject\reactApp>touch main.js`
`C:\Users\username\MyProject\reactApp>touch webpack.config.js`

> **Step 5** - Set Compiler, Server and Loaders
>> Open `webpack-config.js` file and add the code below. We are setting webpack entry point to be `main.js`. Output path is the place where bundled app will be served. We are also setting development server to `8080` port. You can choose any port you want. And lastly, we are setting babel loaders to search for `js` files and use `es2015` and `react` presets that we installed before.

```javascript
// webpack.config.js
var config = {
   entry: './main.js',
	
   output: {
      path:'./',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;
```

>> Open the `package.json` and delete **"test" "echo \"Error: no test specified\" && exit 1"** inside `"scripts"` object. We are deleting this line since we will not do any testing. Let's add the start command instead.
`"start": "webpack-dev-server --hot"`

>> Now we can use npm start command to start the server. `--hot` command will add live reload after something is changed inside our files so we don't need to refresh the browser every time we change our code.

> **Step 6** - index.html
> This is just regular HTML. We are setting `div id = "app"` as a root element for our app and adding `index.js` script which is our bundled app file.

```javascript
<!DOCTYPE html>
<html lang = "en">

   <head>
      <meta charset = "UTF-8">
      <title>React App</title>
   </head>

   <body>
      <div id = "app"></div>
      <script src = "index.js"></script>
   </body>

</html>
```


> **Step 7** - App.jsx and main.js
>> This is the first react component

```javascript
// App.jsx
import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            Hello World!!!
         </div>
      );
   }
}

export default App;

// main.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(<App />, document.getElementById('app'));
```
>> We need to import this component and render it to our root `App` element so we can see it in browser.

>> **Note** - Whenever you want to use something, you need to `import` it first. If you want to make component usable in other parts of the app, you need to `export` it after creation and `import` it in the file where you want to use it.

> **Step 8** - Running the Server
`C:\Users\username\MyProject\reactApp>npm start`
>> input: "http://localhost:8080"