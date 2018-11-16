English | [简体中文](./main-concepts.cn.md) | [한국어](./main-concepts.kr.md)

## Omi Docs

- [Omi Docs](#omi-docs)
  - [My First Element](#my-first-element)
  - [Props](#props)
  - [Event](#event)
  - [Custom Event](#custom-event)
  - [CSS](#css)
  - [Lifecycle](#lifecycle)
  - [Ref](#ref)
  - [Store](#store)
  - [Slot](#slot)
  - [Observe](#observe)
  - [Tick and NextTick](#tick-and-nexttick)
  - [Use](#use)
  - [SSR](#ssr)

[→ Omi Simple Examples](https://github.com/Tencent/omi/tree/master/packages/omi/examples)

### My First Element

```js
import { WeElement, define, render } from 'omi'

define('my-first-element', class extends WeElement {
  render() {
    return (
      <h1>Hello, world!</h1>
    )
  }
})

render(<my-first-element></my-first-element>, 'body')
```

Look at the rendering structure in the HTML developer tool:

![fe](../assets/first-element.jpg)

You can also use `my-first-element` in any other custom element. Such as:

```js
import { WeElement, define, render } from 'omi'
import './my-first-element'

define('other-element', class extends WeElement {
  render() {
    return (
      <div>
        <my-first-element></my-first-element>
      </div>
    )
  }
})
```

### Props

```js
import { WeElement, define, render } from 'omi'

define('my-first-element', class extends WeElement {
  render(props) {
    return (
      <h1>Hello, {props.name}!</h1>
    )
  }
})

render(<my-first-element name="world"></my-first-element>, 'body')
```

You can also transmit any type of data to props:

```js
import { WeElement, define, render } from 'omi'

define('my-first-element', class extends WeElement {
  render(props) {
    return (
      <h1>Hello, {props.myObj.name}!</h1>
    )
  }
})

render(<my-first-element my-obj={{ name: 'world' }}></my-first-element>, 'body')
```

The `my-obj` will map to myObj with camel-case. You can set default values for props in the following way:

```js
import { WeElement, define, render } from 'omi'

define('my-first-element', class extends WeElement {
  static defaultProps = {
		name: 'Omi',
		myAge: 18
	}

  render(props) {
    return (
      <h1>Hello, {props.name}! Age {props.myAge}</h1>
    )
  }
})

render(<my-first-element name="world"></my-first-element>, 'body')
```

Through props, you can pass style or class to the root node, for example:

```jsx
<el-button onClick={this.onClick} style="color:red;">默认按钮1</el-button>
<el-button type="primary" style={{color:'red'}}>主要按钮</el-button>
```

 [→ click here](https://github.com/Tencent/omi/commit/cdea37ca7a15d109718fcc3731d6fe6d1548ffab)

### Event

```js
define('my-first-element', class extends WeElement {
  onClick = (evt) => {
    alert('Hello Omi!')
  }

  render() {
    return (
      <h1 onClick={this.onClick}>Hello, world!</h1>
    )
  }
})
```

### Custom Event

```js
define('my-first-element', class extends WeElement {
  onClick = (evt) => {
    this.fire('myevent', { name: 'abc' })
  }

  render(props) {
    return (
      <h1 onClick={this.onClick}>Hello, world!</h1>
    )
  }
})
```

Bind event on the element:

```jsx
<my-first-element onMyEvent={(evt) => { alert(evt.detail.name) }}></my-first-element>
```

Trigger custom event by `this.fire` and get the data by  `evt.detail`.

### CSS

```js
define('my-first-element', class extends WeElement {
  css() {
    return `h1 { color: red; }`
  }

  render(props) {
    return (
      <h1>Hello, world!</h1>
    )
  }
})

render(<my-first-element onMyEvent={(evt) => { alert(evt.detail.name) }}></my-first-element>, 'body')
```

You can also dynamically generate the CSS:

```js
 css() {
    return `h1 { color: ${Math.random() > 0.5 ? "red" : "blue"}; }`
  }
```

You can also write CSS, less and sass separately to another file using [to-string-loader](https://www.npmjs.com/package/to-string-loader) of webpack：

```js
{
  test: /[\\|\/]_[\S]*\.scss$/,
  use: [
      'to-string-loader',
      'css-loader',
      'sass-loader'
  ]
}
```

Then:

```js
import { define, WeElement } from 'omi'
import style from '../style/_button.scss'

define('el-button', class extends WeElement {
    static pure = true

    css() {
        return style
    }
    ...
    ...
```

### Lifecycle

| Lifecycle method | When it gets called                          |
| ---------------- | -------------------------------------------- |
| `install`        | before the component gets mounted to the DOM |
| `installed`      | after the component gets mounted to the DOM  |
| `uninstall`      | prior to removal from the DOM                |
| `beforeUpdate`   | before update                           |
| `afterUpdate`    | after update                             |
| `beforeRender`   | before `render()`                           |

For example:

```js
import { render, WeElement, define } from 'omi'

define('my-timer', class extends WeElement {
  static observe = true

  data = {
    seconds: 0
  }

  tick() {
    this.data.seconds++
  }

  install() {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  uninstall() {
    clearInterval(this.interval)
  }

  render() {
    return <div>Seconds: {this.data.seconds}</div>
  }
})

render(<my-timer />, 'body')
```

### Ref

```js
define('my-first-element', class extends WeElement {
  onClick = (evt) => {
    console.log(this.h1)
  }

  render(props) {
    return (
      <div>
        <h1 ref={e => { this.h1 = e }} onClick={this.onClick}>Hello, world!</h1>
      </div>
    )
  }
})

render(<my-first-element></my-first-element>, 'body')
```

Add `ref={e => { this.anyNameYouWant = e }}` to attrs of the element, then you can get it by `this.anyNameYouWant`.


### Store

```js
define('my-first-element', class extends WeElement {
  //You must declare data here for view updating
  static get data() {
    return { name: null }
  }

  onClick = () => {
    //auto update the view
    this.store.data.name = 'abc'
  }

  render(props, data, store) {
    return (
      <h1 onClick={this.onClick}>Hello, {store.data.name}!</h1>
    )
  }
})

const store = {
  data: { name: 'Omi' }
}
render(<my-first-element name="world"></my-first-element>, 'body', store)
```

The static data will be transform to path for partial view updating, for example:

```js
static get data() {
  return {
    a: null,
    b: null,
    c: { d: [] },
    e: []
  }
}
```

Transformed path：

```js
{
  a: true,
  b: true,
  'c.d':true,
  e: true
}
```

Exemplify the Path hit rule:

| proxy path | updatePath | Update |
| ---------- | ---------- | ------ |
| abc        | abc        | true   |
| abc[1]     | abc        | true   |
| abc.a      | abc        | true   |
| abc        | abc.a      | false  |
| abc        | abc[1]     | false  |
| abc        | abc[1].c   | false  |
| abc.b      | abc.b      | true   |

If you hit one condition above, you can update it.

Summary is as long as updatePath or updatePath sub nodes are updated.

Can we see that the store system is a centralization system? So how do we centralization of some components? Use the static prop: `pure` :

```js
static pure = true
```

Pure element! Store will not be injected!

### Slot

The HTML `<slot>` element—part of the Web Components technology suite—is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.

```jsx
define('hello-element', class extends WeElement {
  render() {
    return (
      <div onClick={this.onClick}>
        <p><slot name="my-text">My default text</slot></p>
      </div>
    )
  }
})

define('my-app', class extends WeElement {
  render() {
    return (
      <div >
        <hello-element>
          <span slot="my-text">Let's have some different text!</span>
        </hello-element>
      </div>
    )
  }
})

render(<my-app></my-app>, 'body')
```

[→ Slot MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots#Adding_flexibility_with_slots)

## Observe

### Omi Observe

You can also use observe to create response views for element who no need `store`, such as:

```js
define("my-app", class extends WeElement {
  static observe = true

  install() {
    this.data.name = "omi"
  }

  onClick = () => {
    this.data.name = "Omi V4.0"
  }

  render(props, data) {
    return (
      <div onClick={this.onClick}>
        <h1>Welcome to {data.name}</h1>
      </div>
    )
  }
})
```

If you want to be compatible with IE11, please use the `omi-mobx` instead of omi's own obersve.

### Omi Mobx

```js
import { tag, WeElement } from "omi"
import { observe } from "omi-mobx"

@observe
@tag("my-app")
class MyApp extends WeElement {
  install() {
    this.data.name = "omi"
  }

  onClick = () => {
    this.data.name = "Omi V4.0"
  }

  render(props, data) {
    return (
      <div onClick={this.onClick}>
        <h1>Welcome to {data.name}</h1>
      </div>
    )
  }
}
```

### Tick and NextTick

If observe is used, the view does not change immediately after the data changes. If you want to get the real changed dom, you can use tick or nextTick.

```js
import { render, WeElement, define, tick, nextTick } from 'omi'

define('todo-list', class extends WeElement {
  render(props) {
    return (
      <ul>
        {props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    )
  }
})

define('todo-app', class extends WeElement {
  static observe = true

  static get data() {
    return { items: [], text: '' }
  }
  install() {
    tick(() => {
      console.log('tick')
    })

    tick(() => {
      console.log('tick2')
    })
  }

  beforeRender() {
    nextTick(() => {
      console.log('nextTick')
    })

    // don't using tick in beforeRender or beforeUpdate or render or afterUpdate
    // tick(() => {
    //   console.log(Math.random())
    // })
  }

  installed() {
    console.log('installed')
  }

  render() {
    console.log('render')
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
          <button>Add #{this.data.items.length + 1}</button>
        </form>
      </div>
    )
  }

  handleChange = e => {
    this.data.text = e.target.value
  }

  handleSubmit = e => {
    e.preventDefault()
    if (!this.data.text.trim().length) {
      return
    }
    this.data.items.push({
      text: this.data.text,
      id: Date.now()
    })
    this.data.text = ''
  }
})

render(<todo-app />, 'body')
```

### Use

```js
import { define, render } from 'omi'

define('my-counter', function() {
  const [count, setCount] = this.use({
    data: 0,
    effect: function() {
      document.title = `The num is ${this.data}.`
    }
  })

  const [items, setItems] = this.use({
    data: [{ text: 'Omi' }],
    effect: function() {
      console.log(`The items count is ${this.data.length}.`)
    }
  })

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>

      <ul>
        {items.map(item => {
          return <li>{item.text}</li>
        })}
      </ul>
      <button onClick={() => setItems([...items, { text: 'new item' }])}>
        add
      </button>
      <button onClick={() => setItems([])}>empty</button>
    </div>
  )
})

render(<my-counter />, 'body')
```

### SSR

Recommended class libraries:

* https://github.com/skatejs/skatejs/tree/master/packages/ssr
* https://www.youtube.com/watch?v=yT-EsESAmgA
