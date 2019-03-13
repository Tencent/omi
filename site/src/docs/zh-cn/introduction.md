<p align="center"><img src="https://github.com/Tencent/omi/raw/master/assets/omi-logo2019.svg?sanitize=true" alt="omi" width="300"/></p>
<h2 align="center">Omi - 下一代前端框架，去万物糟粕，合精华为一点点 JS</h2>
<p align="center"><b>基于 Web Components 并支持 IE8+(omio) 和 小程序(omip)</b></p>


## Omi 是什么？

Omi (读音 /ˈomɪ/，类似于 欧米) 是定位于下一代框架，基于 Web Components 设计，支持 PC Web、移动 H5 和小程序开发(One framework. Mobile & desktop & mini program)。

## 一个 HTML 完全上手

下面这个页面不需要任何构建工具就可以执行:

```html
<script src="https://unpkg.com/omi"></script>
<script>
  const { define, WeElement, h, render } = Omi

  define('my-counter', class extends WeElement {
    install() {
      this.data.count = 1
      this.sub = this.sub.bind(this)
      this.add = this.add.bind(this)
    }

    sub() {
      this.data.count--
      this.update()
    }

    add() {
      this.data.count++
      this.update()
    }

    render() {
      return h(
        'div',
        null,
        h(
          'button',
          { onClick: this.sub },
          '-'
        ),
        h(
          'span',
          null,
          this.data.count
        ),
        h(
          'button',
          { onClick: this.add },
          '+'
        )
      )
    }
  })

  render(h('my-counter'), 'body')
</script>
```

通过上面脚本的执行，你已经定义好了一个自定义标签，可以不使用 render 方法，直接使用 `my-counter` 标签：

```jsx
<body>
  <my-counter></my-counter>
</body>
```

* [点击这里看执行结果](https://tencent.github.io/omi/assets/omi.html)
* [Omi.js CDN](https://unpkg.com/omi)

上面使用的是 hyperscript 的方式来书写 HTML 结构，你可以使用 JSX 来替代它。


```js
import { render, WeElement, define } from 'omi'

define('my-counter', class extends WeElement {
  data = {
    count: 1
  }

  //这里可以加样式，比如下面的 span 的作用域仅仅在组件内部
  static css = `
    span{
        color: red;
    }`

  sub = () => {
    this.data.count--
    this.update()
  }

  add = () => {
    this.data.count++
    this.update()
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