
<h1 align="center">
  HTM (Hyperscript Tagged Markup)
  <a href="https://www.npmjs.org/package/htm"><img src="https://img.shields.io/npm/v/htm.svg?style=flat" alt="npm"></a>
</h1>
<p align="center">
  <img src="https://i.imgur.com/0ph8dbS.png" width="572" alt="hyperscript tagged markup demo">
</p>

[`htm`](https://github.com/developit/htm) 是一款与 JSX 语法类似的东西，相比 JSX 它最大的优点是:

* 不需要编译器
* 直接在现代浏览器中运行，只要你的浏览器支持 [Tagged templates] 就行

所以，你可以直接在 react、preact 或者 omi 中使用并且直接在浏览器中运行，不需要任何编译。它利用了 [Tagged templates] 和浏览器自带的 HTML parser。

## 极小的尺寸

* 直接在浏览器中使用只有 700 字节，1KB 都不到
* 在 preact 中使用只有 500 字节
* 如果使用 [babel-plugin-htm](https://www.npmjs.com/package/babel-plugin-htm) 只需要 0 字节

## 语法 - 像 JSX 也像 lit-html

htm 是受 lit-html 启发，但是包含了 JSX 里的这些特性:

- 剩余扩展: `<div ...${props}>`
- 标签自关闭: `<div />`
- 动态标签名: `<${tagName}>` _( `tagName` 是元素的引用)_
- 布尔属性: `<div draggable />`

## 对 JSX 的改进

`htm` 确确实实地基于 JSX 之上做了大量改进，比如下面这些特性是 JSX 所没有的:

- **不需要编译器，直接在浏览器中运行**
- HTML 的可选分号的方式: `<div class=foo>`
- HTML 的自关闭: `<img src=${url}>`
- 可选的关闭标签: `<section><h1>this is the whole template!`
- 组件关闭标签: `<${Footer}>footer content<//>`
- 支持 HTML 注释: `<div><!-- don't delete this! --></div>`
- 安装 [lit-html VSCode extension] 语法高亮


## 项目状态

HTM最初的目标是在Preact周围创建一个包装器，使用它在浏览器中不受干扰。我想使用虚拟DOM，但我不想用构建工具，直接使用ES模块。

这意味着要放弃JSX，最接近的替代方案是 [Tagged_templates]。所以，我写了这个库来修补两者之间的差异。事实证明，该技术是框架无关的，因此它应该与大多数虚拟 DOM 库一起工作。

## 安装

`htm` 发布到了 npm, 也可以访问 unpkg.com 的 CDN:

```js
npm i htm
```

**从unpkg获取:** 

```js
import htm from 'https://unpkg.com/htm?module'
const html = htm.bind(React.createElement);
```

```js
// just want htm + preact in a single file? there's a highly-optimized version of that:
import { html, render } from 'https://unpkg.com/htm/preact/standalone.mjs'
```

## 使用指南

既然 `htm` 是一个通用的库，我们需要告诉它怎么“编译”我们的模板。

目标应该是形式 `h(tag, props, ...children)` _([hyperscript])_, 的函数，并且可以返回任何东西。

```js
// 这是我们的 h 函数。现在，它只返回一个描述对象。
function h(tag, props, ...children) {
  return { tag, props, children };
}
```

为了使用那个 `h` 函数，我们需要通过绑定`htm`到我们的`h`函数来创建我们自己的 HTML 标签函数：

```js
import htm from 'htm';

const html = htm.bind(h);
```

现在我们有一个`html`模板标签，可以用来生成上面创建的格式的对象，比如：

```js
import htm from 'htm';

function h(tag, props, ...children) {
  return { tag, props, children };
}

const html = htm.bind(h);

console.log( html`<h1 id=hello>Hello world!</h1>` );
// {
//   tag: 'h1',
//   props: { id: 'hello' },
//   children: ['Hello world!']
// }
```

## 举个例子

好奇地想看看这一切是什么样子的？这是一个工作应用程序！

它是单个HTML文件，没有构建或工具。你可以用Nano编辑它。

```html
<!DOCTYPE html>
<html lang="en">
  <title>htm Demo</title>
  <script type="module">
    import { html, Component, render } from 'https://unpkg.com/htm/preact/standalone.mjs';

    class App extends Component {
      addTodo() {
        const { todos = [] } = this.state;
        this.setState({ todos: todos.concat(`Item ${todos.length}`) });
      }
      render({ page }, { todos = [] }) {
        return html`
          <div class="app">
            <${Header} name="ToDo's (${page})" />
            <ul>
              ${todos.map(todo => html`
                <li>${todo}</li>
              `)}
            </ul>
            <button onClick=${() => this.addTodo()}>Add Todo</button>
            <${Footer}>footer content here<//>
          </div>
        `;
      }
    }
		  
    const Header = ({ name }) => html`<h1>${name} List</h1>`

    const Footer = props => html`<footer ...${props} />`

    render(html`<${App} page="All" />`, document.body);
  </script>
</html>
```

**这是一个[Preact 线上版本](https://htm-demo-preact.glitch.me/).**

那真是太好了？注意，只有一个导入-这里我们只使用了 `import` 与 Preact 集成，因为它更容易导入和更小。

同样的示例在没有预构建版本的情况下运行良好，只需使用两个导入：

```js
import { h, Component, render } from 'preact';
import htm from 'htm';

const html = htm.bind(h);

render(html`<${App} page="All" />`, document.body);
```

## 其他使用方式 

因为`htm`被设计成满足JSX的相同需求，所以您可以使用JSX的任何地方使用它。

** 使用 [vhtml] 生成 HTML:**

```js
import htm from 'htm';
import vhtml from 'vhtml';

const html = htm.bind(vhtml);

console.log( html`<h1 id=hello>Hello world!</h1>` );
// '<h1 id="hello">Hello world!</h1>'
```

**Webpack configuration via [jsxobj]:** ([details here](https://webpack.js.org/configuration/configuration-languages/#babel-and-jsx))

```js
import htm from 'htm';
import jsxobj from 'jsxobj';

const html = htm.bind(jsxobj);

console.log(html`
  <webpack watch mode=production>
    <entry path="src/index.js" />
  </webpack>
`);
// {
//   watch: true,
//   mode: 'production',
//   entry: {
//     path: 'src/index.js'
//   }
// }
```

# omi-html

在 omi 中使用 [htm](https://github.com/developit/htm) 

[→ 在线例子](https://tencent.github.io/omi/assets/omi-html.html)


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

## 直接运行在浏览器

```html
<script src="https://unpkg.com/omi"></script>
<script src="https://unpkg.com/omi-html"></script>
<script>
  const { define, WeElement, render } = Omi

  define('my-counter', class extends WeElement {

    install() {
      this.constructor.observe = true
      this.data.count = 1
      this.sub = this.sub.bind(this)
      this.add = this.add.bind(this)
    }

    sub() {
      this.data.count--
    }

    add() {
      this.data.count++
    }

    render() {
      return html`
        <div>
          <button onClick=${this.sub}>-</button>
          <span>${this.data.count}</span>
          <button onClick=${this.add}>+</button>
        </div>
        `}
  })

  render(html`<my-counter />`, 'body')
</script>
```


[Tagged Templates]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates
[lit-html]: https://github.com/Polymer/lit-html
[babel-plugin-htm]: https://www.npmjs.com/package/babel-plugin-htm
[lit-html VSCode extension]: https://marketplace.visualstudio.com/items?itemName=bierner.lit-html
[vhtml]: https://github.com/developit/vhtml
[jsxobj]: https://github.com/developit/jsxobj
[hyperscript]: https://github.com/hyperhype/hyperscript
