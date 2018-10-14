# Omi 4.0 - 合一  

> 下一代 Web 框架，去万物糟粕，合精华为一。

### 特性

- 0.5 KB 的代码尺寸，比小更小
- 顺势而为，顺从浏览器的发展和 API 设计
- Webcomponents + JSX 相互融合为一个框架 Omi
- JSX 是开发体验最棒(智能提示)、[语法噪音最少](https://github.com/facebook/jsx#why-not-template-literals)的 UI 表达式
- 每一个组件拥有 update 方法自由渲染最佳更新视图的时机，功耗低，自由度高，性能卓越
- 局部 CSS 最佳解决方案(Shadow DOM)，社区为局部 CSS 折腾了不少框架，Shadow DOM Style 是最完美的方案
- 类似 WeStore 体系，99.9% 的项目不需要什么时间旅行,也不仅仅 redux 能时间旅行,请不要上来就 redux，Omi store 体系可以满足所有项目
- 看看[Facebook React 和 Web Components对比优势](https://www.cnblogs.com/rubylouvre/p/4072979.html)，Omi 融合了各自的优点，而且给开发者自由的选择喜爱的方式

对比同样开发 TodoApp， Omi 和 React 渲染完的 DOM 结构:

![](./assets/omi-render.jpg) ![](./assets/react-render.jpg)

左边是Omi，右边是 React，Omi 使用 Shadow DOM 隔离样式和语义化结构。

---

- [Getting Started](#getting-started)
	- [Hello Omi](#hello-omi)
    - [TodoApp](#todoapp)
    - [Store](#store)
	- [Lifecycle](#lifecycle)
- [Install](#install)
- [Links](#links)
- [License](#license)


## Getting Started

### Hello Omi

先创建一个自定义元素:

```js
import { WeElement, define } from 'omi'

class HelloElement extends WeElement {

    static get props(){
        //如果不写入就无法监听到属性变更且自动刷新视图
        return ['prop-from-parent', 'msg']
    }

    onClick = (evt) => {
        //trigger CustomEvent
        this.fire('abc', { name : 'dntzhang', age: 12 })
        evt.stopPropagation()
    }

    css() {
        return `
         div{
             color: red;
             cursor: pointer;
         }`
    }

    render(props) {
        return (
            <div onClick={this.onClick}>
                Hello {props.msg} {props.propFromParent}
                <div>Click Me!</div>
            </div>
        )
    }
    
}

define('hello-element', HelloElement)
```

使用该元素:

``` js
import { render, WeElement, define } from 'omi'
import './hello-element'

class MyApp extends WeElement {
    static get data() {
        return { abc: '', passToChild: '' }
    }

    //bind CustomEvent 
    onAbc = (evt) => {
        // get evt data by evt.detail
        this.data.abc = ' by ' + evt.detail.name
        this.update()   
    }

    css() {
        return `
         div{
             color: green;
         }`
    }

    render(props, data) {
        return (
            <div>
                Hello {props.name} {data.abc}
                <hello-element onAbc={this.onAbc} prop-from-parent={data.passToChild} msg="WeElement"></hello-element>
            </div>
        )
    }
}


define('my-app', MyApp)

render(<my-app name='Omi v4.0'></my-app>, 'body')
```

告诉 Babel 把 JSX 转化成 Omi.h() 的调用:

``` json
{
    "presets": ["env", "omi"]
}
```

需要安装下面两个 npm 包支持上面的配置:

``` bash
"babel-preset-env": "^1.6.0",
"babel-preset-omi": "^0.1.1",
```

如果不想把 css 写在 js 里，你可以使用 [to-string-loader](https://www.npmjs.com/package/to-string-loader), 比如下面配置:

``` js
{
    test: /[\\|\/]_[\S]*\.css$/,
    use: [
        'to-string-loader',
        'css-loader'
    ]
}
```

如果你的 css 文件以 `_` 开头, css 会使用 to-string-loader. 如：

``` js
import { render, WeElement, define } from 'omi'
//typeof cssStr is string
import cssStr from './_index.css' 

class MyApp extends WeElement {

  css() {
    return cssStr
  }
  ...
  ...
  ...
```

### TodoApp

下面列举一个相对完整的 TodoApp 的例子:

```js
import { render, WeElement, define } from 'omi'

class TodoList extends WeElement {
    render(props) {
        return (
            <ul>
                {props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        );
    }
}

define('todo-list', TodoList)

class TodoApp extends WeElement {
    static get data() {
        return { items: [], text: '' }
    }

    render() {
        return (
            <div>
                <h3>TODO</h3>
                <todo-list items={this.data.items} />
                <form onSubmit={this.handleSubmit}>
                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.data.text}
                    />
                    <button>
                        Add #{this.data.items.length + 1}
                    </button>
                </form>
            </div>
        );
    }

    handleChange = (e) => {
        this.data.text = e.target.value
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.data.text.length) {
            return;
        }
        this.data.items.push({
            text: this.data.text,
            id: Date.now()
        })
        this.data.text = ''
        this.update()
    }
}

define('todo-app', TodoApp)

render(<todo-app></todo-app>, 'body')
```

### Store


```js
export default {
  data: {
    items: [],
    text: '',
    firstName: 'dnt',
    lastName: 'zhang',
    fullName: function () {
      return this.firstName + this.lastName
    },
    globalPropTest: 'abc', //更改我会刷新所有页面,不需要再组件和页面声明data依赖
    ccc: { ddd: 1 } //更改我会刷新所有页面,不需要再组件和页面声明data依赖
  },
  add: function () {
    this.data.items.push({
      text: this.data.text,
      id: Date.now()
    })
    this.data.text = ''
    this.update()
  },
  globalData: ['globalPropTest', 'ccc.ddd'],
  logMotto: function () {
    console.log(this.data.motto)
  },
  //默认 false，为 true 会无脑更新所有实例
  //updateAll: true
}
```

自定义 Element 需要声明依赖的 data，这样 Omi store 根据自定义组件上声明的 data 计算依赖 path 并会按需局部更新。如:

```js
class TodoApp extends WeElement {
    static get data() {
        return { items: [], text: '' }
    }
    ...
    ...
    ...
    handleChange = (e) => {
        this.store.data.text = e.target.value
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.store.data.text.length) {
            return;
        }
        this.store.add()
    }
}

define('todo-app', TodoApp)
```

需要在 render 的时候从根节点注入 store 才能在所有自定义 Element 里使用 this.store:

```js
render(<todo-app></todo-app>, 'body', store)
```

### Lifecycle

| Lifecycle method            | When it gets called                              |
|-------------------------------|--------------------------------------------------|
| `install`        | before the component gets mounted to the DOM     |
| `installed`         | after the component gets mounted to the DOM      |
| `uninstall`      | prior to removal from the DOM                    |
| `beforeUpdate`       | before `render()`                                |
| `afterUpdate`        | after `render()`                                 |

## Install

Get javascript file from Github:

* [omi/master/dist](https://github.com/Tencent/omi/tree/master/dist)
* [omi.js](https://github.com/Tencent/omi/blob/master/dist/omi.js)
* [omi.min.js](https://github.com/Tencent/omi/blob/master/dist/omi.min.js)

## Links

- [westore](https://github.com/dntzhang/westore)
- [omijs.org](http://omijs.org/)

## License

MIT © Tencent 

Please contact me[@dntzhang](https://github.com/dntzhang) for any questions. 
