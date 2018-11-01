## Omi-Native

Render web components of omi to naitve

## Render Web Components to Native

How to render Web Components to Native? [Omi Framework](https://github.com/Tencent/omi) is one of example because Omi is designed as [Web Components based](https://github.com/Tencent/omi#why-omi).

## Industry Status

Now, there are two genres rendering to Native：

* Flutter
  * Use Skia high performance rendering engin to render by GPU directly
  * Develop using the Dart language
* React Native, Weex, Taro, Hippy, Plato
  * Through Bridge and JSCore transmit command to render
  * Develop using JavaScript language
  * JSCore and Native each maintain the same DOM tree

Here, Omi uses the second way to achieve [→ omi-native](https://github.com/Tencent/omi/tree/master/packages/omi-native).

## Pre research

Because Web Components is based on `HTMLElement`. You can see that a custom element of Omi is inherited from `WeElement`:

```js
import { render, WeElement, define } from 'omi'

define('my-counter', class extends WeElement {
    static observe = true
    
    data = {
      count: 1
    }

    sub = () => {
      this.data.count--
    }

    add = () => {
      this.data.count++
    }

    render() {
      return (
        <div>
          <button onClick={this.sub}>-</button>
          <span>{this.data.count}</span>
          <button onClick={this.add}>+</button>
        </div>
      )
    }
  })

render(<my-counter />, 'body')
```

Through the Omi source code, you can see `WeElement` is inherited from `HTMLElement`:

```js
class WeElement extends HTMLElement {
  ...
}
```


Since you want to send command to Native in JSCore, first you must make sure that it works correctly. However in JSCore, there is no DOM and BOM, even though `HTMLElement` is belong to DOM, it is basically not. Thus, Omi project will report an error in JSCore so the answer to the problem is surface.

## Simulation HTMLElement

In Browser Design：

* HTMLElement inherits from the parent interfaces: Element and GlobalEventHandlers
* Element inherits from Node (which appendChild, removeChild, insertBefore defined in)
* Node inherits properties from its parent class EventTarget

However our implementation does not necesaaarily need to be exactly the same as the browser implementation, not to implement all APIs so `omi-native` is only implemented:

* Element
* HTMLElement
* Document

Among them, HTMLElement inherits from Element, what APIs needs to be implemented, it is a simple introduce DOM API which Omi are using:

* HTMLElement
  * connectedCallback
  * disconnectedCallback
* Element
  * addEventListener
  * removeEventListener
  * removeAttribute
  * setAttribute
  * removeChild
  * appendChild
  * replaceChild
  * style
* Document
  * createElement

So as long as the implementation of the above APIs will ensure that the Omi project can run in JSCore without error, but just not giving an error is not enough. You need to send command back and forth.
The meaning of instruction transfer is to make the DOM tree maintained by Native and the DOM tree maintained by JSCore consistent. The frequency of command transmission directly affects the time consuming, and the lower the command transmission frequency, the better. Thus, when injecting bridge communication into appendChild, remove Child, etc., the principles to fllow are:

* Only DOM operations that actually fall on the tree send command.

So it is conceivable that `document.createElement` or `appendChild`, `removeChild` which over node are not sending any commands.

## Life cycle

Omi Life cycle of custome element is as following:

| Lifecycle method | When it gets called                          |
| ---------------- | -------------------------------------------- |
| `install`        | before the component gets mounted to the DOM |
| `installed`      | after the component gets mounted to the DOM  |
| `uninstall`      | prior to removal from the DOM                |
| `beforeUpdate`   | before update                           |
| `afterUpdate`    | after update                             |
| `beforeRender`   | before `render()`                           |

How to ensure that Omi's life cycle is performed normally in JSCore. Through Omi WeElement, it can be known:

```js
  connectedCallback() {
    ...
    ...
    this.install()
    const shadowRoot = this.attachShadow({ mode: 'open' })

    this.css && shadowRoot.appendChild(cssToDom(this.css()))
    this.beforeRender()
    options.afterInstall && options.afterInstall(this)
    ...
    ...
    this.installed()
    this._isInstalled = true
  }

  disconnectedCallback() {
    this.uninstall()
    if (this.store) {
      for (let i = 0, len = this.store.instances.length; i < len; i++) {
        if (this.store.instances[i] === this) {
          this.store.instances.splice(i, 1)
          break
        }
      }
    }
  }
```

Omi's life cycle relies entirely on the `connectedCallback` and `disconnectedCallback` of `HTMLElement`.

* connectedCallback triggered when an element is inserted into the page
* disconnectedCallback triggered when an element is removed from the page

Since `HTMLElement` and `Element` are both self-implemented so you can  control execution time of `connectedCallback` and `disconnectedCallback` because you know when the element is inserted into the DOM tree. For example, when append:

```js
  appendChild(node) {
    if (!node.parentNode) {
      linkParent(node, this)
      insertIndex(node, this.childNodes, this.childNodes.length, true)
      if(this.connectedCallback){
      this.connectedCallback()
    }
    ...
  }
```

When removed：

```js
  removeChild(node) {
    if (node.parentNode) {
      removeIndex(node, this.childNodes, true)
      if(this.disconnectedCallback){
        this.disconnectedCallback()
      }
    }
    ...
  }
```

## Event binding

Since the callback function of the event binding in JS contains context information and cannot be transmitted to the client. It only needs to tell the id of the native element and the type of the event binding. When the client triggers, it only needs to transfer the id of the element and the type of the event.

```js
 addEventListener(type, handler) {
    if (!this.event[type]) {
      this.event[type] = handler
      this.ownerDocument.addEvent(this.ref, type)
    }
  }
```

[→ Fork to see the source code](https://github.com/Tencent/omi/tree/master/packages/omi-native/src/native)
