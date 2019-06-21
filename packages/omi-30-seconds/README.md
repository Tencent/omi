# Omi 30 Seconds

Curated collection of useful Omi snippets that you can understand in 30 seconds or less.

## Overview of the Readme

- [Cache Event Handlers](#cache-event-handlers)
- [Share css between parent and child nodes](#share-css-between-parent-and-child-nodes)
- [Cross component communication](#cross-component-communication)
- [Implement tree view](#implement-tree-view)
- [@font-face doesn't work in Shadow DOM](#font-face-doesnt-work-in-shadow-dom)
- [CSS3 transform not working with custom element](#css3-transform-not-working-with-custom-element)
- [Rendering checkbox in the loop](#rendering-checkbox-in-the-loop)
- [Can not call class as a function](#can-not-call-class-as-a-function)

## Cache Event Handlers

```jsx
import { define, render, WeElement } from 'omi'

define('my-element', class extends WeElement {
  onClick = () => {
    this.fire('change')
  }

  render() {
    console.log('render')
    return (
      <div onClick={this.onClick}>Hello, World! </div>
    )
  }
})


define('my-component', class extends WeElement {

  onClick = () => {
    this.update()
  }

  list = [{
    id: 24,
    name: 'dnt',
    age: 18
  }, {
    id: 100,
    name: 'omi',
    age: 1
  }]

  changeHandler = event => console.log(event.target.dataset)

  render(props) {
    return (
      <div>
        <button onClick={this.onClick}>update</button>
        {this.list.map((item, index) =>
          <my-element data-id={item.id} data-index={index} onChange={this.changeHandler}></my-element>)
        }
      </div>
    )
  }
})

render(<my-component />, 'body')
```

## Share css between parent and child nodes

```js
import { define, WeElement, render, getHost } from 'omi'

define('my-ele', class extends WeElement {
  install() {
    this.css = getHost(this).css

    //or when css of parent is static prop
    //this.css = getHost(this).constructor.css
  }

  render(props) {
    return props.children[0]
  }
})

define('my-parent-ele', class extends WeElement {
  css() {
    return `
    p { 
      width: 100px;
      height: 100px;
      border: 1px solid #ccc; 
    }`
  }

  render() {
    return (
      <div>
        <my-ele>
          <p>content</p>
        </my-ele>
      </div>
    )
  }
})

render(<my-parent-ele />, 'body')
```

Share css by `getHost` method. You can also recombine with the parent node's css and custom css.

```js
define('my-ele', class extends WeElement {

  css() {
    return getHost(this).css() + `
      h1 {
        font-size: 34px;
      }
    `
  }

  render(props) {
    return props.children[0]
  }
})
```

## Cross component communication

If the distance between components is far away, you have two ways to communicate.

* store system
* mitt

The following is the way to use mitt, but it also needs store to be injected from the root node.

Using mitt in pure js:

```js
import mitt from 'mitt'

const emitter = mitt()

// listen to an event
emitter.on('foo', e => console.log('foo', e) )

// listen to all events
emitter.on('*', (type, e) => console.log(type, e) )

// fire an event
emitter.emit('foo', { a: 'b' })

// working with handler references:
function onFoo() {}
emitter.on('foo', onFoo)   // listen
emitter.off('foo', onFoo)  // unlisten
```

Using mitt in omi project:


```js
import mitt from 'mitt'
import { render, WeElement, define } from 'omi'

define('child-ele', class extends WeElement {
  onClick = () => {
    this.store.emitter.emit('foo', { a: 'b' })
  }
  render() {
    return <div onClick={this.onClick}>child-ele</div>
  }
})

define('my-app', class extends WeElement {
  install() {
    this.store.emitter.on('foo', e => console.log('foo', e))
  }

  render() {
    return (
      <div>
        <child-ele />
      </div>
    )
  }
})

render(<my-app />, 'body', { emitter: mitt() })
```

## Implement tree view

To implement the tree view, we need to rely on self dependence. For example, the following `my-node`.

[→ Online Demo](https://tencent.github.io/omi/packages/omi/examples/tree/)

```js
import { define, render, WeElement } from 'omi'

define('my-node', class extends WeElement {
  static observe = true

  open = () => {
    this.data.open = !this.data.open
  }

  extend = () => {
    if (!this.data.children) {
      this.data.children = [{ name: 'new child' }]
    } else {
      this.addChild()
    }
    this.data.open = true
  }

  addChild = () => {
    this.data.children.push({ name: 'new child' })
  }

  install() {
    this.data = this.props.node
  }

  css() {
    return `
		.add, h4{
			cursor:pointer;
		}`
  }

  render(props, data) {
    const children = data.children
    const canOpen = children && children.length
    return (
      <li>
        <h4 onclick={this.open} ondblclick={this.extend}>
          {this.data.name}
          {canOpen && <span>[{data.open ? '-' : '+'}]</span>}
        </h4>

        {canOpen &&
          data.open && (
            <ul>
              {children.map(child => {
              return <my-node node={child} />
              })}
            <li class="add" onclick={this.addChild}>
                +
              </li>
            </ul>
        )}
      </li>
    )
  }
})

define('my-tree', class extends WeElement {
  render(props) {
    return (
      <ul>
        <my-node node={props.node} />
      </ul>
    )
  }
})

const node = {
  name: 'my-tree',
  data: { x: 1 },
  children: [
    {
      name: 'a-1'
    },
    {
      name: 'a-2',
      children: [
        {
          name: 'a-2-1'
        }
      ]
    }
  ]
}

render(<my-tree node={node} />, 'body')
```

You can also use a single shadow root:

```js
import { define, render, WeElement } from '../../src/omi'


define('my-tree', class extends WeElement {
  open = (path) => {
    const node = this.getNodeByPath(path)
    node.open = !node.open
    this.update()
  }

  getNodeByPath(path) {
    if (path === '#') {
      return this.props.node
    }
    const arr = path.split('-')
    arr.shift()
    let current = this.props.node
    let item
    while (item = arr.pop()) {
      current = current.children[item]
    }
    return current
  }

  extend(path) {
    const node = this.getNodeByPath(path)
    if (!node.children) {
      node.children = [{
        name: 'new child'
      }]
    } else {

      node.children.push({
        name: 'new child'
      })
    }
    node.open = true
    this.update()
  }

  addChild = (path) => {
    const node = this.getNodeByPath(path)
    node.children.push({ name: 'new child' })
    this.update()
  }

  render(props) {
    return (
      <ul>
        {this.createNode(props.node, '#')}
      </ul>
    )
  }

  createNode(node, path) {
    const children = node.children
    const canOpen = children && children.length
    return (
      <li>
        <h4 ondblclick={e => this.extend(path)}>
          {node.name}
          {canOpen && <span onclick={e => this.open(path)}>[{node.open ? '-' : '+'}]</span>}
        </h4>

        {canOpen && node.open && (
          <ul>
            {children.map((child, index) => {
              return this.createNode(child, path + '-' + index)
            })}
            <li class="add" onclick={e => this.addChild(path)}>
              +
            </li>
          </ul>
        )}
      </li>
    )
  }
})
```

### @font-face doesn't work in Shadow DOM

```js
import { render, WeElement, define } from 'omi'

define('my-app', class extends WeElement {
  css() {
    return `
      @font-face {
        font-family: 'FontAwesome';
        src: url('../fonts/fontawesome-webfont.eot?v=4.0.3');
        src: url('../fonts/fontawesome-webfont.eot?#iefix&v=4.0.3') format('embedded-opentype'), url('../fonts/fontawesome-webfont.woff?v=4.0.3') format('woff'), url('../fonts/fontawesome-webfont.ttf?v=4.0.3') format('truetype'), url('../fonts/fontawesome-webfont.svg?v=4.0.3#fontawesomeregular') format('svg');
        font-weight: normal;
        font-style: normal;
      }
    `
  }

  render() {
    return (
      <div>abc</div>
    )
  }
})

render(<my-app />, 'body', { emitter: mitt() })
```

Put font-face css in the global context to fix this, for example:

```html
<head>
  <style>
      @font-face {
          font-family: 'FontAwesome';
          src: url('../fonts/fontawesome-webfont.eot?v=4.0.3');
          src: url('../fonts/fontawesome-webfont.eot?#iefix&v=4.0.3') format('embedded-opentype'), url('../fonts/fontawesome-webfont.woff?v=4.0.3') format('woff'), url('../fonts/fontawesome-webfont.ttf?v=4.0.3') format('truetype'), url('../fonts/fontawesome-webfont.svg?v=4.0.3#fontawesomeregular') format('svg');
          font-weight: normal;
          font-style: normal;
        }
  </style>
</head>
```

[→ Related article](http://robdodson.me/at-font-face-doesnt-work-in-shadow-dom/?tdsourcetag=s_pcqq_aiomsg)

### CSS3 transform not working with custom element

```js
console.log(getComputedStyle(document.querySelector('your-element')).display) //inline 
```

 Apply `display: block` or `display: inline-block` to your elmenet to fix it:

 ```css
 your-element{
   display: block;
   transform: translateX(100px);
 }
 ``` 

 Then your  css3 transform props can take effect.

### Rendering checkbox in the loop

```js
 {props.items.map((item, index) => (
  <label for={`x_${this.__elementId}_${index}`}>
      <input type="checkbox" id={`x_${this.__elementId}_${index}`} checked={item.selected} />
  </label>
))}
```

### Can not call class as a function

When you use define of AMD:

```js
define('my-ele', class extends WeElement{
  ...
  ...
})
```

You'll get this error:

```js
Can not call class as a function
```

Please using `define` from omi, not define of AMD:

```js
import { define } from 'omi'
```

So how to use AMD and define of Omi at the same time ? Use the `defineElement`!

```js
import { defineElement } from 'omi'
```

