export default { data : `## Omi 是什么？

Omi (读音 /ˈomɪ/，类似于 欧米) 是下一代前端框架，基于 Web Components 设计，支持 PC Web、移动 H5 和小程序开发(One framework. Mobile & desktop & mini program)。


<em> Omi looks really neat!<br> </em>
　　　　— [Jason Miller (Creator of Preact)](https://twitter.com/_developit/)

<em> I really like the trend towards "frameworks" that:<br><br>"export default class WeElement extends HTMLElement {..}"<br> <br>This one, Omi, is from Tencent.</em>       
　　　　— [Dion Almaer](https://twitter.com/dalmaer/)

## 一个 HTML 完全上手

下面这个页面不需要任何构建工具就可以执行:

\`\`\`html
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
\`\`\`

通过上面脚本的执行，你已经定义好了一个自定义标签，可以不使用 render 方法，直接使用 \`my-counter\` 标签：

\`\`\`jsx
<body>
  <my-counter></my-counter>
</body>
\`\`\`

* [点击这里看执行结果](https://tencent.github.io/omi/assets/omi.html)

上面使用的是 hyperscript 的方式来书写 HTML 结构，用 ES5 书写 JS ，你可以使用 JSX 和 ES2015+ 来替代它们。


\`\`\`jsx {8-11}
import { render, WeElement, define } from 'omi'

define('my-counter', class extends WeElement {
  data = {
    count: 1
  }

  static css = \`
    span{
        color: red;
    }\`

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
\`\`\`

看上面高亮的部分，可以给组件加样式，比如上面的 span 的作用域仅仅在组件内部，不会污染别的组件。到现在你已经成功入门 Omi 了！你学会了:

* 为组件添加**结构**，如上面使用 JSX 书写结构
* 为组件添加**行为**，如上面的 \`onClick\` 绑定事件
* 为组件添加**样式**，如上面的 \`static css\`
* 渲染组件到 body，当然也可以把组件渲染到任意其他组件

恭喜你！
`
}