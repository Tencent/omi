# Getting started

Welcome to OMI tutorial!

The goal of this tutorial is to let you quickly experience the use of Omi to develop **cross framework components** or build **entire applications**, using jxs/tsx you are familiar with.

## Preconditions

This tutorial assumes that you are basically familiar with HTML, CSS, javascript/typescript, and jsx/tsx.

## Hello Omi

Import dependencies from omi:

```tsx
import { tag, render, h, WeElement } from 'omi'
```

Declare custom element label name:

```tsx
@tag('hello-omi')
```

Define custom element:

```tsx
class HelloOmi extends WeElement {
  render(props) {
    return (
      <div id="app">
        <h1>Hello {props.msg}!</h1>
      </div>
    )
  }
}
```

Render custom elements to body:
```tsx
render(<hello-omi msg='Omi' />, 'body')
```

Because it is a standard custom element, you can directly use the DOM API to achieve the same effect as above:

```tsx
document.body.appendChild(document.creatElement('hello-omi'))
```

Congratulations on getting started!


