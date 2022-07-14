<!-- <p align="center"><img src="https://github.com/Tencent/omi/raw/master/assets/omi-logo2019.svg?sanitize=true" alt="omi" width="300"/></p>
<h2 align="center">Omi - 下一代前端框架，去万物糟粕，合精华为一点点 JS</h2>
<p align="center"><b>基于 Web Components 并支持 IE8+(omio) 和 小程序(omip)</b></p>
 -->

## Omi 是什么？

Omi (读音 /ˈomɪ/，类似于 欧米) 是跨框架框架，基于 Web Components 设计，可以使用 JSX/TSX 来写 HTML 结构。


<em> Omi looks really neat!<br> </em>
　　　　— [Jason Miller (Creator of Preact)](https://twitter.com/_developit/)

<em> I really like the trend towards "frameworks" that:<br><br>"export default class WeElement extends HTMLElement {..}"<br> <br>This one, Omi, is from Tencent.</em>       
　　　　— [Dion Almaer](https://twitter.com/dalmaer/)

## 快速上手

```jsx {4-7}
import { render, WeElement, define, h } from 'omi'

define('my-counter', class extends WeElement {
  static css = `
    span{
        color: red;
    }`

  count = 1

  sub = () => {
    this.count--
    this.update()
  }

  add = () => {
    this.count++
    this.update()
  }

  render() {
    return (
      // <></> 和 <h.f></h.f> 是相等的
      <>
        <button onClick={this.sub}>-</button>
        <span>{this.count}</span>
        <button onClick={this.add}>+</button>
      </>
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

## 使用 TypeScript 定义一个 button 元素

```ts
import { tag, WeElement, h, extractClass } from 'omi'
import * as css from './index.scss'

interface Props {
  size?: 'medium' | 'small' | 'mini',
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'
  plain?: boolean,
  round?: boolean,
  circle?: boolean,
  loading?: boolean,
  disabled?: boolean,
  icon?: string,
  autofocus?: boolean,
  nativeType?: 'button' | 'submit' | 'reset',
  block?: boolean
  text?: string
}

@tag('o-button')
export default class Button extends WeElement<Props>{
  static css = css

  static defaultProps = {
    plain: false,
    round: false,
    circle: false,
    loading: false,
    disabled: false,
    autofocus: false,
    nativeType: 'button',
    block: false
  }

  static propTypes = {
    size: String,
    type: String,
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    loading: Boolean,
    disabled: Boolean,
    icon: String,
    autofocus: Boolean,
    nativeType: String,
    block: Boolean,
    text: String
  }

  render(props) {
    return <button disabled={props.disabled} {...extractClass(props, 'o-button', {
      ['o-button-' + props.type]: props.type,
      ['o-button-' + props.size]: props.size,
      'is-plain': props.plain,
      'is-round': props.round,
      'is-circle': props.circle,
      'is-disabled': props.disabled,
      'is-block': props.block
    })} type={props.nativeType} >
      {props.loading && <i class='icon-loading'></i>}
      {props.text}
      <slot></slot>
    </button>
  }
}
```

入门了，恭喜你！
