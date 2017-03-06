<h2 id="Hello World">Hello World</h2>


### Hello World with ES20XX 

We recommend using a bundler like [webpack](https://webpack.github.io/) or [Browserify](http://browserify.org/) so you can write modular code and bundle it together into small packages to optimize load time.

The small Omi example looks like this:

```js
import Omi from './omi.js';

class Hello extends Omi.Component {
    constructor(data) {
        super(data);
    }
    style () {
        return  `
            h1{
                cursor:pointer;
            }
         `;
    }
    handleClick(target){
        alert(target.innerHTML);
    }
    render() {
        return  `
        <div>
            <h1 onclick="handleClick(this)">Hello ,{{name}}!</h1>
        </div>
        `;

    }
}

Omi.render(new Hello({ name : "Omi" }),"body");

```

This code renders into body element. 


###  Hello World with ES5


```html
<script src="omi.js"></script>
```