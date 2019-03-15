## Event

```jsx
define('my-element', class extends WeElement {
  onClick = (evt) => {
    alert('Hello Omi!')
  }

  render() {
    return (
      <h1 onClick={this.onClick}>Hello, world!</h1>
    )
  }
})
```

### Custom Event

```jsx
define('my-element', class extends WeElement {
  onClick = (evt) => {
    this.fire('myevent', { name: 'abc' })
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

通过 `this.fire` 触发自定义事件，fire 第一个参数是事件名称，第二个参数是传递的数据。通过 `evt.detail` 可以获取到传递的数据。
