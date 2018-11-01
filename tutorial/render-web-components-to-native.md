## Render Web Components to Native

How to render Web Components to Native? There is an [Omi Framework](https://github.com/Tencent/omi) because Omi is designed [based on Web Components](https://github.com/Tencent/omi#why-omi)


## Industry Status

Now, there has two genres to render to Native：

* Flutter
  * Use Skia high performance rendering engin to draw GPU directly
  * Develop using the Dart language
* React Native, Weex, Taro, Hippy, Plato
  * Through Bridge and JSCore command to transfer to draw
  * Develop using JavaScript language
  * JSCore and Native each maintain the same DOM tree树

Here, Omi uses the second way to achieve [→ omi-native](https://github.com/Tencent/omi/tree/master/packages/omi-native)。

## Pre research

Becase Web Components is based on `HTMLElement`. It can be seen a custom element of Omi is inherited from `WeElement`:

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

既然要在 JSCore 里向 Native 发送指令，那么首先要保证能正常运行。但是在 JSCore 里是没有 DOM 和 BOM, `HTMLElement` 属于 DOM, 自然也就没有。所以 Omi 的项目在 JSCore 里会报错。所以解决这个问题的答案也就浮出水面。

## 模拟 HTMLElement

在浏览器的设计当中：

* HTMLElement 继承自父接口 Element 和 GlobalEventHandlers 的属性
* Element 继承自 Node (常用的 appendChild、removeChild、insertBefore 都定义在 Node 中)
* Node 从其父类EventTarget 继承属性

但是我们实现未必需要和浏览器的实现完全一致，更加不用实现所有的 API。所以 `omi-native` 仅仅实现了:

* Element
* HTMLElement
* Document

其中 HTMLElement 继承自 Element，具体需要实现哪些API，这里优先梳理出 Omi 使用的 DOM API:

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

所以只要实现包括上面这些 API 就能保证 Omi 项目能够在 JSCore 里跑起来不报错。但是仅仅不报错，是不够的，还需要来回发送指令。
指令传输的意义在于让 Native 维护的 DOM Tree 和 JSCore 维护的 DOM Tree 保持一致。而指令发送的频率会直接影响耗时，指令发送频率越低越好。所以在把 bridge 通讯注入到 appendChild、removeChild 等方法中时，遵循的原则是：

* 只有真正落在树上的 DOM 操作才发送指令

所以可想而知，`document.createElement` 或者悬空节点的 `appendChild`、`removeChild` 是不发送任何指令

## 生命周期

Omi 自定义元素的生命周期如下所以:

| Lifecycle method | When it gets called                          |
| ---------------- | -------------------------------------------- |
| `install`        | before the component gets mounted to the DOM |
| `installed`      | after the component gets mounted to the DOM  |
| `uninstall`      | prior to removal from the DOM                |
| `beforeUpdate`   | before update                           |
| `afterUpdate`    | after update                             |
| `beforeRender`   | before `render()`                           |

怎么保证 Omi 的生命周期在 JSCore 中正常执行。通过 Omi WeElement 的源码可以发现:

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

Omi 的生命周期完全依赖 `HTMLElement` 的 `connectedCallback` 和 `disconnectedCallback`

* connectedCallback 元素被插入到页面时候触发
* disconnectedCallback 元素从页面移除时触发

既然 `HTMLElement` 和 `Element` 都是自己实现，所以可以控制 `connectedCallback` 和 `disconnectedCallback` 的执行时机。因为你知道元素什么时候被插入到 DOM 树里。比如 append 的时候:

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

比如移除时：

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

## 事件绑定

由于 JS 里事件绑定的回调函数包含上下文信息，不能传输给客户端，所以只需要告诉 native 元素的 id 和事件绑定的类型，当客户端触发的时候只需传输回元素的 id 和事件的类型。

```js
 addEventListener(type, handler) {
    if (!this.event[type]) {
      this.event[type] = handler
      this.ownerDocument.addEvent(this.ref, type)
    }
  }
```

[→ 戳这里看下源码](https://github.com/Tencent/omi/tree/master/packages/omi-native/src/native)
