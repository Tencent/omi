## Ref

Ref 提供了一种方式，允许我们访问 DOM 节点或在 render 方法中创建的 Component。

```jsx
const HelloMessage = (props, store, _) => {
  return h('h1', { ref: ele => _.h1 = ele }, `Hello ${props.name}`)
}

HelloMessage.store = _ => {
  return {
    installed() {
      //h1 dom element
      console.log(_.h1)
    }
  }
}
```