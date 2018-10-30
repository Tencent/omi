English | [简体中文](./main-concepts.cn.md) | [한국어](./main-concepts.kr.md)

## Omi Docs

- [Omi Docs](#omi-docs)
  - [My First Element](#my-first-element)
  - [Props](#props)
  - [Event](#event)
  - [Custom Event](#custom-event)
  - [CSS](#css)
  - [Ref](#ref)
  - [Store](#store)
  - [Slot](#slot)
  - [Observe](#observe)
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
}

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
}
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
}

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
}

render(<my-first-element my-obj={{ name: 'world' }}></my-first-element>, 'body')
```

The `my-obj` will map to myObj with camel-case. You can set default values for props in the following way:

```js
import { WeElement, define, render } from 'omi'

define('my-first-element', class extends WeElement {
  static props = {
    name: {
      value: 'Omi'
    },
    myAge: {
      value: 18
    }
  }

  render(props) {
    return (
      <h1>Hello, {props.name}! Age {props.myAge}</h1>
    )
  }
}

render(<my-first-element name="world"></my-first-element>, 'body')
```

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

render(<my-first-element onMyEvent={(evt) => { alert(evt.detail.name) }}></my-first-element>, 'body')
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
}

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

  render(props, data) {
    //data === this.store.data when using store system
    return (
      <h1 onClick={this.onClick}>Hello, {data.name}!</h1>
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
}

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
}
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

### SSR

Recommended class libraries:

* https://github.com/skatejs/skatejs/tree/master/packages/ssr
* https://www.youtube.com/watch?v=yT-EsESAmgA
