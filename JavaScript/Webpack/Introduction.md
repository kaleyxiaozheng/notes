[Andrewray's blog](http://blog.andrewray.me/webpack-when-to-use-and-why/)

[webpack.js](https://webpack.js.org/concepts/)

[Beginner's guide to Webpack](https://medium.com/javascript-training/beginner-s-guide-to-webpack-b1f1a3638460)

[Webpack module bundler](https://webpack.github.io/docs/what-is-webpack.html)

> Webpack is a build tool that puts all of your assets, including Javascript, images, fonts, and CSS, in a dependency graph.

> Webpack lets you use `require()` in your source code to point to local files, like images, and decide how they're processed in your final Javascript bundle, like replacing the path with a URL pointting to a CDN.

> Webpack gives us a dependency graph.

### What does Webpack Actually do?
> Webpack lets you use `require()` on **local "static assets"**, meaning non-code files.
```javascript
<img src={ require('../../assets/logo.png') } />
```
> When you run Webpack, it searches through all of your code for `require()` calls. It compares the path string `../../assets/logo.png` to the **"loader" configuration** you specify.
```javascript
loaders: [
    { test: /.pbg$/, loader: "file" }
]
``` 
In this example, when you `require()` file paths ending in `.png`, Webpack sends that file to the **file loader**.

> The file loader does two things.
>> 1. In the bundled Javascript code, it replaces the `require()` call with a URL string, making it valid javascript. The string depends on how you configure Webpack. Maybe it becomes a CDN URL, like `cdn.mysite.com/logo.png`.
>> 2. The file loader alos spits out `logo.png` into some local folder you specify, like `dist/`. Now you simply upload the contents of `dist/` to your CDN, deploy your new code, and the image is guaranteed to load on your site.

> **Key concept** : The `require('logo.png')` source code never actually gets executed in the browser (nor in Node.js). Webpack builds a new Javascript file, replacing `require()` calls with valid Javascript code, such as URLs. The bundled file is what's executed by Node or the browser.

### What's the "Dev Server"?
> Webpack comes with a built in "dev server"; a small `express` app for local development. 

