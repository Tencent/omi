## Omi 30 Seconds

Curated collection of useful Omi snippets that you can understand in 30 seconds or less.

## Overview of the Readme

- [Share css between parent and child nodes](#share-css-between-parent-and-child-nodes)
- [Cross component communication](#cross-component-communication)

## Share css between parent and child nodes

```js
import { define, WeElement, render, getHost } from 'omi'

define('my-ele', class extends WeElement {
  install() {
    this.css = getHost().css
  }

  render() {
    return props.children[0]
  }
})

define('my-parent-ele', class extends WeElement {
  css() {
    return `div { color: red; }`
  }

  render() {
    return (
      <div>
        <my-ele>
          <div>content</div>
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
    return getHost().css() + `
      h1 {
        font-size: 34px;
      }
    `
  }

  render() {
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
