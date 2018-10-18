English | [简体中文](./README.CN.md) 

# Omi

> Next generation web framework in 4KB javascript(Merge JSX, Webcomponents, Proxy, Path Updating together).

<p align="center"><img src="./assets/omi.png" alt="omi"/></p>

### Why Omi？

- Tiny size(4KB gzip)
- Support TypeScript    
- Reactive data-binding
- Compliance with browser trend and API design
- Merge JSX and Webcomponents into One Framework 
- Webcomponents can also be a data-driven view, UI = fn(data)
- JSX is the best development experience (code intelligent  completion and tip) UI Expression with least [grammatical noise](https://github.com/facebook/jsx#why-not-template-literals)
- The original Path Updating system. Proxy-based automatic accurate update, low power consumption, high degree of freedom, excellent performance, easy integration of requestIdleCallback
- Say goodbye to `this.update` method when using store system! It will update partial UI automatically when data changed. 
- Look at [Facebook React VS Webcomponents](https://softwareengineering.stackexchange.com/questions/225400/pros-and-cons-of-facebooks-react-vs-web-components-polymer)，Omi combines their advantages and gives developers the freedom to choose the way they like.
- Shadom DOM merges with Virtual DOM, Omi uses both virtual DOM and real Shadom DOM to make view updates more accurate and faster
- With a Store system, 99.9% of projects don't need time travel, and not only Redux can travel, please don't come up on redux, Omi store system can meet all projects
- Scoped CSS's best solution is Shadow DOM, the community churning out frameworks and libraries for Scoped CSS (using JS or JSON writing styles such as Radium, jsxstyle, react-style; binding to webpack using generated unique className `filename-classname-hash', such as CSS Modules, Vue), are hack technologies; and Shadow DOM Style is the perfect solution.

Compare TodoApp by Omi and React, Omi and React rendering DOM structure:

![](./assets/omi-render.jpg) ![](./assets/react-render.jpg)

On the left is Omi, the right side is React, and Omi uses Shadow DOM isolation style and semantic structure.

---

- [Add Omi in One Minute](#add-omi-in-one-minute)
- [Getting Started](#getting-started)
    - [Install](#install)
	- [Hello Element](#hello-element)
    - [TodoApp](#todoapp)
    - [Store](#store)
	- [Lifecycle](#lifecycle)
- [Docs][https://github.com/Tencent/omi/blob/master/docs/main-concepts.md]
- [Component Ecosystem](#component-ecosystem)
- [Browsers Support](#browsers-support)
- [Links](#links)
- [License](#license)

## Add Omi in One Minute

This page demonstrates using Omi with no build tooling.

* [Online Demo!](https://tencent.github.io/omi/assets/)
* [Omi.js CDN](https://unpkg.com/omi)

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <title>Add Omi in One Minute</title>
</head>

<body>
  <script src="https://unpkg.com/omi"></script>
  <script>
    const { WeElement, h, render, define } = Omi

    class LikeButton extends WeElement {
      install() {
        this.data = { liked: false }
      }

      render() {
        if (this.data.liked) {
          return 'You liked this.'
        }

        return h(
          'button',
          {
            onClick: () => {
              this.data.liked = true
              this.update()
            }
          },
          'Like'
        )
      }
    }

    define('like-button', LikeButton)

    render(h('like-button'), 'body')
  </script>
</body>

</html>
```

## Getting Started


### Install

```bash
$ npm i omi-cli -g               # install cli
$ omi init your_project_name     # init project, you can also exec 'omi init' in an empty folder
$ cd your_project_name           # please ignore this command if you executed 'omi init' in an empty folder
$ npm start                      # develop
$ npm run build                  # release
```

### Hello Element

Define a custom element:

```js
import { tag, WeElement, render } from 'omi'

@tag('hello-element')
class HelloElement extends WeElement {

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
```

Using `hello-element`:

``` js
import { tag, WeElement, render } from 'omi'
import './hello-element'

@tag('my-app')
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
import { tag, WeElement render } from 'omi'
//typeof cssStr is string
import cssStr from './_index.css' 

@tag('my-app')
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
import { tag, WeElement, render } from 'omi'

@tag('todo-list')
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

@tag('todo-app')
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

render(<todo-app></todo-app>, 'body')
```

### Store

Say goodbye to `this.update` method when using store system! It will update partial UI automatically when data changed. The powerful Store architecture is high-performance because all data is mounted on the store, except for components that rely on props to determine the state of the component.

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
  }
  //Default value is false, set to true will update all instances when data changing.
  //updateAll: true
}
```

Custom Element requires declaring dependent data so that Omi stores compute the dependency path based on the data declared on the custom component and update it locally as needed. Such as:

```js
class TodoApp extends WeElement {
    //If you use store, the data is only used to declare dependencies.
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
```

* the logic of data is encapsulated in the store definition method (such as store.add).
* views are only responsible for passing data to store, such as calling store.add or setting store.data.text on top.

You need to inject store from the root node at render time to use this. store:

```js
render(<todo-app></todo-app>, 'body', store)
```

[→ Store Full Code](https://github.com/Tencent/omi/blob/master/packages/omi/examples/store/main.js)



Summary：

* store.data is used to list all attributes and default values (except the components of the view decided by props).
* The data of the component and page is used to list the attributes of the dependent store.data (Omi will record path) and update on demand.
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

## Component Ecosystem

* [https://www.webcomponents.org/](https://www.webcomponents.org/)
* [https://www.webcomponents.org/elements](https://www.webcomponents.org/elements)

I believe you can easily convert webcomponents elements to omi elements.

## Browsers Support

Omi 4.0+ works in the latest two versions of all major browsers: Safari 10+, ~~IE 11+~~, and the evergreen Chrome, Firefox, and Edge.

![Browsers Support](./assets/browsers-support.png)

[→ polyfills](https://github.com/webcomponents/webcomponentsjs)

## Links

- [westore](https://github.com/dntzhang/westore)
- [omijs.org](http://omijs.org/)

## License

MIT © Tencent 

Please contact me[@dntzhang](https://github.com/dntzhang) for any questions. 
