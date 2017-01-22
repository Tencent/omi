<h2 id="Hello World">Hello World</h2>

你可以使用ES6+或者ES5的方式编写Omi程序来搭建你的Web程序。

### Hello World with ES6+

你可以使用 [webpack](https://webpack.github.io/) 打包工具，webpack会把你的模块代码打成一个很小的包，优化加载时间。使用[babel](http://babeljs.io/)，让你立刻马上使用ES6+来编写你的web程序。你只需要在webpack配置的module设置好[babel-loader](https://github.com/babel/babel-loader)便可。

一个Omi的简短的例子如下所示:

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
    handleClick(target, evt){
        alert(target.innerHTML);
    }
    render() {
        return  `
        <div>
            <h1 onclick="handleClick(this, event)">Hello ,{{name}}!</h1>
        </div>
        `;

    }
}

Omi.render(new Hello({ name : "Omi" }),"body");

```

组件生成的HTML最终会插入到body中。上面的例子展示了Omi的部分特性:

- data传递: new Hello(data,..)的data可以直接提供给render方法里的模板
- 局部CSS: h1只对render里的h1生效，不会污染外面的h1
- 声明式事件绑定: onclick调用的就是组件内的handleClick，this可以拿到当然的DOM元素,还可以拿到当前的event

你可以使用Omi.makeHTML来生成组件标签用于嵌套。
```js
    Omi.makeHTML(Hello);
```
那么你就在其他组件中使用，如
```js
  ...
  render() {
        return  `
        <div>
            <div>Test</div>
            <Hello data-name="Omi" />
        </div>
        `;
    }
    ...
```


###  Hello World with ES5

当然Omi没有抛弃ES5的用户。你可以使用ES5的方式编写Omi。如，在你的HTML中引用omi.js：

```html
<script src="omi.js"></script>
```

然后：

```js
var Hello =  Omi.create("Hello", {
    style: function () {
        return "h1{ cursor:pointer }";
    },
    handleClick: function (dom) {
        alert(dom.innerHTML);
    },
    render: function () {
        return '<div>\
                    <h1 onclick="handleClick(this, event)">Hello ,{{name}}!</h1>\
                </div>';
    }
});

Omi.render(new Hello({ name : "Omi" }),"body");
```
当然除了在HTML引入脚步，你还可以使用AMD、CMD或者CommonJS的方式引入Omi，这里就不再一一列举。

需要注意的是，Omi.create的第一个参数Hello是用来生成Tag Name的。你可以在其他地方嵌入你的组件。如：

```js
  ...
  render:function() {
        return  '<div>\
                    <div>Test</div>\
                    <Hello  data-name="Omi" />\
                </div>';
    }
    ...
```
