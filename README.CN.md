[English](./README.md) | 简体中文 

<p align="center"><img src="https://tencent.github.io/omi/assets/logo.svg" alt="omi" width="100"/></p>
<h2 align="center">Omi - Web Components 框架</h2>

- 📶 信号 **Signal** 驱动的响应式编程
- 🌐 结合 **JSX** 语法和 **Web Components** 的强大组合，让组件化开发更简单、更高效
- 💒 使用 **Constructable Stylesheets** 轻松管理和共享样式

```tsx
import { render, signal, tag, Component, h } from 'omi'

const count = signal(0)

function add() {
  count.value++
}

function sub() {
  count.value--
}

@tag('counter-demo')
class CounterDemo extends Component {
  static css = 'span { color: red; }'

  render() {
    return (
      <>
        <button onClick={sub}>-</button>
        <span>{count.value}</span>
        <button onClick={add}>+</button>
      </>
    )
  }
}

render(<counter-demo />, document.body)
```


## 安装

```bash
npm i omi@7.0.0-alpha0
```

## 贡献者

<a href="https://github.com/Tencent/omi/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Tencent/omi" />
</a>

## License

MIT © Tencent
