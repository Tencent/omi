English | [简体中文](./README.CN.md) 

# Omi - Merge JSX and Webcomponents into One Framework 

> Next generation web framework in 3KB javascript.

Coming....You can download JS from [omi/master/dist](https://github.com/Tencent/omi/tree/master/dist) to try it out.

### Why Omi？

- Tiny size(3KB gzip)
- Compliance with browser trend and API design
- Merge JSX and Webcomponents into One Framework 
- Webcomponents can also be a data-driven view, UI = fn(data)
- JSX is the best development experience (code intelligent  completion and tip) UI Expression with least [grammatical noise](https://github.com/facebook/jsx#why-not-template-literals)
- Each component has the update method to freely render the best updated view of the time, low power consumption, high degree of freedom, excellent performance. Convenient to join requestIdleCallback in the future
- Look at [Facebook React VS Webcomponents](https://softwareengineering.stackexchange.com/questions/225400/pros-and-cons-of-facebooks-react-vs-web-components-polymer)，Omi combines their advantages and gives developers the freedom to choose the way they like.
- Shadom DOM merges with Virtual DOM, Omi uses both virtual DOM and real Shadom DOM to make view updates more accurate and faster
- With a Store system, 99.9% of projects don't need time travel, and not only Redux can travel, please don't come up on redux, Omi store system can meet all projects
- Scoped CSS's best solution is Shadow DOM, the community churning out frameworks and libraries for Scoped CSS (using JS or JSON writing styles such as Radium, jsxstyle, react-style; binding to webpack using generated unique className `filename-classname-hash', such as CSS Modules, Vue), are hack technologies; and Shadow DOM Style is the perfect solution.

Compare TodoApp by Omi and React, Omi and React rendering DOM structure:

![](./assets/omi-render.jpg) ![](./assets/react-render.jpg)

On the left is Omi, the right side is React, and Omi uses Shadow DOM isolation style and semantic structure.

---

- [Getting Started](#getting-started)
	- [Hello Omi](#hello-omi)
    - [TodoApp](#todoapp)
    - [Store](#store)
	- [Lifecycle](#lifecycle)
    - [Browsers Support](#browsers-support)
- [Install](#install)
- [Links](#links)
- [License](#license)


## Getting Started

### Hello Omi

Define a custom element:

```js
import { WeElement, define } from 'omi'

class HelloElement extends WeElement {

    static get props(){
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

Using `hello-element`:

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

Tell Babel to transform JSX into Omi.h () call:

``` json
{
    "presets": ["env", "omi"]
}
```

The following two NPM packages need to be installed to support the above configuration:

``` bash
"babel-preset-env": "^1.6.0",
"babel-preset-omi": "^0.1.1",
```

If you don't want to write CSS in js, you can use [to-string-loader](https://www.npmjs.com/package/to-string-loader),
For example, the following configuration:

``` js
{
    test: /[\\|\/]_[\S]*\.css$/,
    use: [
        'to-string-loader',
        'css-loader'
    ]
}
```

If your CSS file starts with "_", CSS will use to-string-loader., such as:

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

Here is a relatively complete example of TodoApp:

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
        if (!this.data.text.trim().length) {
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

The powerful Store architecture is high-performance because all data is mounted on the store, except for components that rely on props to determine the state of the component.

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
    globalPropTest: 'abc', //I will refresh all elements without changing the components and page declaring data dependency.
    ccc: { ddd: 1 } //I will refresh all elements without changing the components and page declaring data dependency.
  },
  globalData: ['globalPropTest', 'ccc.ddd'],
  add: function () {
    if (!this.data.text.trim().length) {
        return;
    }
    this.data.items.push({
      text: this.data.text,
      id: Date.now()
    })
    this.data.text = ''
    this.update()
  }
  //Default value is false, set to true will update all instances when data changing.
  //updateAll: true
}
```

Custom Element requires declaring dependent data so that Omi stores compute the dependency path based on the data declared on the custom component and update it locally as needed. Such as:

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
        e.preventDefault()
        this.store.add()
    }
}

define('todo-app', TodoApp)
```

* the logic of data is encapsulated in the store definition method (such as store.add).
* views are only responsible for passing data to store, such as calling store.add or setting store.data.text on top.

You need to inject store from the root node at render time to use this. store:

```js
render(<todo-app></todo-app>, 'body', store)
```

[→ Store Full Code](https://github.com/Tencent/omi/blob/master/examples/store/main.js)



Summary：

* store.data is used to list all attributes and default values (except the components of the view decided by props).
* The data of the component and page is used to list the attributes of the dependent store.data (OMI will record path) and update on demand.
* If there are few simple components on the page, updateAll can be set to true, and components and pages don't need to declare data, and they don't update on demand
* The path declared in globalData refreshes all pages and components by modifying the value of the corresponding path, which can be used to list all pages or most of the public properties Path

### Lifecycle

| Lifecycle method            | When it gets called                              |
|-------------------------------|--------------------------------------------------|
| `install`        | before the component gets mounted to the DOM     |
| `installed`         | after the component gets mounted to the DOM      |
| `uninstall`      | prior to removal from the DOM                    |
| `beforeUpdate`       | before `render()`                                |
| `afterUpdate`        | after `render()`                                 |

### Browsers Support

Omi 4.0+ works in the latest two versions of all major browsers: Safari 10+, IE 11+, and the evergreen Chrome, Firefox, and Edge.

![Browsers Support](./assets/browsers-support.png)

[→ polyfills](https://github.com/webcomponents/webcomponentsjs)

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
