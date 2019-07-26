## Ref

Ref provides a way to access DOM nodes or Components created in render methods.

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
