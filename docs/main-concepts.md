English | [简体中文](./main-concepts.cn.md)

## Omi Docs

- [Omi Docs](#omi-docs)
	- [My First Element](#my-first-element)
	- [Props](#props)
	- [Event](#event)
	- [Custom Event](#custom-event)
	- [Ref](#ref)
	- [Store](#store)
	- [Slot](#slot)
	- [SSR](#ssr)

### My First Element

```js
import { WeElement, tag, render } from 'omi'

@tag('my-first-element')
class MyFirstElement extends WeElement {
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
import { WeElement, tag, render } from 'omi'
import './my-first-element'

@tag('other-element')
class OtherElement extends WeElement {
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
import { WeElement, tag, render } from 'omi'

@tag('my-first-element')
class MyFirstElement extends WeElement {
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
import { WeElement, tag, render } from 'omi'

@tag('my-first-element')
class MyFirstElement extends WeElement {
  render(props) {
    return (
      <h1>Hello, {props.myObj.name}!</h1>
    )
  }
}

render(<my-first-element my-obj={{ name: 'world' }}></my-first-element>, 'body')
```

The `my-obj` will map to myObj with camel-case.

### Event

```js
class MyFirstElement extends WeElement {
  onClick = (evt) => {
    alert('Hello Omi!')
  }

  render() {
    return (
      <h1 onClick={this.onClick}>Hello, wrold!</h1>
    )
  }
}
```

### Custom Event

```js
@tag('my-first-element')
class MyFirstElement extends WeElement {
  onClick = (evt) => {
    this.fire('myevent', { name: 'abc' })
  }

  render(props) {
    return (
      <h1 onClick={this.onClick}>Hello, world!</h1>
    )
  }
}

render(<my-first-element onMyEvent={(evt) => { alert(evt.detail.name) }}></my-first-element>, 'body')
```

Trigger custom event by `this.fire` and get the data by  `evt.detail`.

### Ref

```js
@tag('my-first-element')
class MyFirstElement extends WeElement {
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
}

render(<my-first-element></my-first-element>, 'body')
```

Add `ref={e => { this.anyNameYouWant = e }}` to attrs of the element, then you can get it by `this.anyNameYouWant`.


### Store

```js
import { WeElement, tag, render } from 'omi'

@tag('my-first-element')
class MyFirstElement extends WeElement {
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
}

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

Can we see that the store system is a centralization system? So how do we centralization of some components? Use the second parameters of tag:

```js
@tag('my-first-element', true)
```

Pure element! Store will not be injected!

### Slot

The HTML `<slot>` element—part of the Web Components technology suite—is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.

```jsx
import { tag, render, WeElement } from '../../src/omi'

@tag('hello-element')
class HelloElement extends WeElement {
  render() {
    return (
      <div onClick={this.onClick}>
        <p><slot name="my-text">My default text</slot></p>
      </div>
    )
  }
}

@tag('my-app')
class MyApp extends WeElement {
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

### SSR

Recommended class libraries:

* https://github.com/skatejs/skatejs/tree/master/packages/ssr
* https://www.youtube.com/watch?v=yT-EsESAmgA
