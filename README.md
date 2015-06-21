# Nuclear

We have several examples on [the website](http://alloyteam.github.io/Nuclear/).

a react-like library without jsx , virtual dom and requestAnimationFrame :)

Nuclear used js , html+css and observejs instead of jsx , virtual dom and requestAnimationFrame.

Nuclear Performance test ：[http://alloyteam.github.io/Nuclear/pt/](http://alloyteam.github.io/Nuclear/pt/). There is a lot of room for improvement and optimization. 



# Install

the file is  here: [nuclear.js](https://raw.githubusercontent.com/AlloyTeam/Nuclear/master/dist/nuclear.js) or [nuclear.min.js](https://raw.githubusercontent.com/AlloyTeam/Nuclear/master/dist/nuclear.min.js)

You can also install it via npm:

```html
npm install alloynuclear
```

Nuclear can be used in the CommonJS/AMD module definition environment, but also directly through the script tag reference in your page ,such as:

```html
<script src="nuclear.js"></script>
```

you can get the Nuclear module by synchronizing require in the AMD module definition environment:

```javascript
define(function (require) {
    var Nuclear = require('nuclear');
});
```

or asynchronous require：

```javascript
require([ 'nuclear' ], function (Nuclear) {
});
```

or  require in the CommonJS module definition environment:

```javascript
var Nuclear = require('nuclear');
```

# Many thanks to
* [observe.js](https://github.com/kmdjs/observejs)
* [react.js](http://facebook.github.io/react/) 
* [zepto.js](http://zeptojs.com/) 
* [mustache.js](https://github.com/janl/mustache.js) 
* [class.js](http://ejohn.org/blog/simple-javascript-inheritance/) 

# License
This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
