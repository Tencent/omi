## Event

通过 onClick 方式直接绑定 dom 元素自带的事件:

```tsx
<button onClick={this.onClick}>Click Me</button>
```

需要注意的是回调函数需要使用箭头函数，不然 this 的指向不是当前元素。

```tsx
onClick = (evt) => {
  alert('Hello Omi!')
}
```

完整的代码如下所示:

```jsx
define('my-element', class extends WeElement {
  onClick = (evt) => {
    alert('Hello Omi!')
  }

  render() {
    return (
      <button onClick={this.onClick}>Click Me</button>
    )
  }
})
```

### Custom Event

```jsx
define('my-element', class extends WeElement {
  onClick = (evt) => {
    this.fire('my-event', { name: 'abc' })
  }

  render(props) {
    return (
      <h1 onClick={this.onClick}>Hello, world!</h1>
    )
  }
})
```

然后在你的自定义元素上绑定事件：

```jsx
<my-element onMyEvent={(evt) => { alert(evt.detail.name) }}></my-element>
```

因为是标准的自定义元素，可以使用 addEventListener 进行事件绑定:

```js
myElement.addEventListener('my-event', (evt) => {})
```

通过 `this.fire` 触发自定义事件，fire 第一个参数是事件名称，第二个参数是传递的数据。通过 `evt.detail` 可以获取到传递的数据。
