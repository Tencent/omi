# 入门

欢迎来到 OMI 教程！

本教程的目标是让您快速体验使用 OMI 开发标准的**跨框架组件**或者构建**整个应用**，使用您熟悉的 JXS/TSX 进行开发。

## 前置条件

本教程假设您基本熟悉HTML、CSS、JavaScript/TypeScript以及 JSX/TSX。

## Hello World

从 omi 导入依赖:

```tsx
import { tag, render, h, WeElement } from 'omi'
```

声明自定义元素标签名称:

```tsx
@tag('hello-omi')
```

定义自定义元素:

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

渲染自定义元素到 body:
```tsx
render(<hello-omi msg='Omi' />, 'body')
```

因为是标准的自定义元素，你可以直接使用 dom api 进行操作达到上面同样的效果:

```tsx
document.body.appendChild(document.creatElement('hello-omi'))
```

恭喜你入门了！