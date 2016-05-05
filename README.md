![preview](http://alloyteam.github.io/Nuclear/img/nuclear.png)

Some HTML + Scoped CSS + JS  ===  Reusable Component

# Preview



![preview](http://alloyteam.github.io/Nuclear/img/guide.png)

Several examples on [the website](http://alloyteam.github.io/Nuclear/en.html).

Performance-testing on [the website](http://alloyteam.github.io/Nuclear/pt/).

TodoMVC on [the website](http://alloyteam.github.io/Nuclear/todomvc/).

# Install

You can install it via npm:

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
* [diffDOM.js](https://github.com/fiduswriter/diffDOM) 
* [mustache.js](https://github.com/janl/mustache.js) 
* [scoper.js](https://github.com/thomaspark/scoper) 

# License
This content is released under the [MIT](http://opensource.org/licenses/MIT) License.
