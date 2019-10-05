<!-- <p align="center"><img src="https://github.com/Tencent/omi/raw/master/assets/omi-logo2019.svg?sanitize=true" alt="omi" width="300"/></p>
<h2 align="center">Omi - 下一代前端框架，去万物糟粕，合精华为一点点 JS</h2>
<p align="center"><b>基于 Web Components 并支持 IE8+(omio) 和 小程序(omip)</b></p>
 -->

## Omi 是什么？

Omi (读音 /ˈomɪ/，类似于 欧米) 是跨框架框架，基于 Web Components 设计，也可以使用相同语法的 omio 兼容 IE8+。支持 PC Web、移动 H5 和小程序开发(One framework, Mobile & desktop & mini program)。


<em> Omi looks really neat!<br> </em>
　　　　— [Jason Miller (Creator of Preact)](https://twitter.com/_developit/)

<em> I really like the trend towards "frameworks" that:<br><br>"export default class WeElement extends HTMLElement {..}"<br> <br>This one, Omi, is from Tencent.</em>       
　　　　— [Dion Almaer](https://twitter.com/dalmaer/)

## 快速上手

```jsx {8-11}
import { render, WeElement, define } from 'omi'

define('my-counter', class extends WeElement {
  data = {
    count: 1
  }

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

通过上面脚本的执行，你已经定义好了一个自定义标签，可以不使用 render 方法，直接使用 `my-counter` 标签：

```jsx
<body>
  <my-counter></my-counter>
</body>
```

看上面高亮的部分，可以给组件加样式，比如上面的 span 的作用域仅仅在组件内部，不会污染别的组件。到现在你已经成功入门 Omi 了！你学会了:

* 为组件添加**结构**，如上面使用 JSX 书写结构
* 为组件添加**行为**，如上面的 `onClick` 绑定事件
* 为组件添加**样式**，如上面的 `static css`
* 渲染组件到 body，当然也可以把组件渲染到任意其他组件


## 无状态视图和 Store 系统

```jsx
import { define, render } from 'omi'

class Store {
  data = {
    count: 1
  }
  sub = () => {
    this.data.count--
  }
  add = () => {
    this.data.count++
  }
}

define('my-counter', _ => (
  <div>
    <button onClick={_.store.sub}>-</button>
    <span>{_.store.data.count}</span>
    <button onClick={_.store.add}>+</button>
  </div>
), {
    use: ['count'], 
    //or using useSelf, useSelf will update self only, exclude children components
    //useSelf: ['count'], 
    css: `span { color: red; }`,
    installed() {
      console.log('installed')
    }
  })

render(<my-counter />, 'body', new Store)
```

入门了，恭喜你！