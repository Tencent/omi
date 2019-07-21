## Ref

```jsx
define('my-element', class extends WeElement {
  onClick = (evt) => {
    console.log(this.h1)
  }

  render(props) {
    return (
      <div>
        <h1 ref={e => { this.h1 = e }} onClick={this.onClick}>Hello, world!</h1>
      </div>
    )
  }
})
```

Add `ref = {e => {this. anyNameYouWant = e} ` to the element, and then you can access the element using `this. anyNameYouWant` in the JS code. You can improve the performance of update in two ways:

* Assignment ahead of time
* createRef

### Assignment ahead of time

```jsx
define('my-element', class extends WeElement {
  onClick = (evt) => {
    console.log(this.h1)
  }

  myRef = e => { this.h1 = e }

  render(props) {
    return (
      <div>
        <h1 ref={this.myRef} onClick={this.onClick}>Hello, world!</h1>
      </div>
    )
  }
})
```

### createRef

```jsx
define('my-element', class extends WeElement {
  onClick = (evt) => {
    console.log(this.myRef.current)  //h1
  }

  myRef = createRef()

  render(props) {
    return (
      <div>
        <h1 ref={this.myRef} onClick={this.onClick}>Hello, world!</h1>
      </div>
    )
  }
})
```