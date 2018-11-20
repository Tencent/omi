## Omi 30 Seconds

Curated collection of useful Omi snippets that you can understand in 30 seconds or less.

## Overview of the Readme

- [Share css between parent and child nodes](#share-css-between-parent-and-child-nodes)


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
