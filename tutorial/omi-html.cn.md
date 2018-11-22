# omi-html

在 omi 中使用 [htm](https://github.com/developit/htm) 

[→ 在线例子](https://tencent.github.io/omi/assets/omi-html.html)

## HTM

[`htm`](https://github.com/developit/htm) 是一款与 JSX 语法类似的东西，相比 JSX 它最大的优点是:

* 不需要编译器
* 直接在现代浏览器中运行，只要你的浏览器支持 [Tagged_templates](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/template_strings#Tagged_templates) 就行

所以，你可以直接在 react、preact 或者 omi 中使用并且直接在浏览器中运行，不需要任何编译。它利用了 [Tagged_templates](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/template_strings#Tagged_templates) 和浏览器自带的 HTML parser。

## 极小的尺寸

* 直接在浏览器中使用只有 700 字节，1KB 都不到
* 如果使用 [babel-plugin-htm](https://www.npmjs.com/package/babel-plugin-htm) 只需要 0 字节

## 语法 - 像 JSX 也像 lit-html

htm 是受 lit-html 启发，但是包含了 JSX 里的这些特性:

- Rest spread: `<div ...${props}>`
- Self-closing tags: `<div />`
- Components: `<${Foo}>` _(where `Foo` is a component reference)_
- Boolean attributes: `<div draggable />`




## Usage of omi-html

```js
import { define, render, WeElement } from 'omi'
import 'omi-html'

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
    return html`
      <div>
        <button onClick=${this.sub}>-</button>
        <span>${this.data.count}</span>
        <button onClick=${this.add}>+</button>
      </div>`
  }
})

render(html`<my-counter />`, 'body')
```

## 语法高亮 

* [lit-html VSCode extension](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html)

