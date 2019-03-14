
## Props

通过 Props 向子组件传递数据，比如：

```jsx
import { WeElement, define, render } from 'omi'

define('my-element', class extends WeElement {
  render(props) {
    return (
      <h1>Hello, {props.name}!</h1>
    )
  }
})
```

使用元素:

```jsx
<my-element name="world"></my-first-element>
```

你也可以传任意类型的数据给 props:

```jsx
define('my-element', class extends WeElement {
  render(props) {
    return (
      <h1>Hello, {props.myObj.name}!</h1>
    )
  }
})
```

使用元素:

```jsx
<my-first-element myObj={{ name: 'world' }}></my-first-element>
```

你可以通过静态属性 `static defaultProps` 来设置默认值:

```js
define('my-first-element', class extends WeElement {
  static defaultProps = {
		name: 'Omi',
		myAge: 18
	}

  render(props) {
    return (
      <h1>Hello, {props.name}! Age {props.myAge}</h1>
    )
  }
})
```