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

Then bind events on your custom elements:

```jsx
<my-element onMyEvent={(evt) => { alert(evt.detail.name) }}></my-element>
```

Fire triggers a custom event by `this.fire`. The first parameter of fire is the name of the event, and the second parameter is the data passed. The transmitted data can be obtained by `evt.detail'.
