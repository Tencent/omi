![preview](http://alloyteam.github.io/Nuclear/img/nuclear.png)

# Preview

Some HTML + Scoped CSS + JS  ===  Reusable Component

![preview](http://alloyteam.github.io/Nuclear/img/guide.png)

We have several examples on [the website](http://alloyteam.github.io/Nuclear/).



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
* [mustache.js](https://github.com/janl/mustache.js) 
* [scoper.js](https://github.com/thomaspark/scoper) 

# License
This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
