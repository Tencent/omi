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
<my-element name="world"></my-element>
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
<my-element myObj={{ name: 'world' }}></my-element>
```

你可以通过静态属性 `static defaultProps` 来设置默认值，使用 `static propTypes` 来设置类型:

```jsx
define('my-element', class extends WeElement {
  static defaultProps = {
		name: 'Omi',
		myAge: 18
  }
  
  static propTypes = {
		name: String,
		myAge: Number
	}

  render(props) {
    return (
      <h1>Hello, {props.name}! Age {props.myAge}</h1>
    )
  }
})
```

需要特别注意，如果你的自定义元素想要直接在其他框架或者无框架的情况下原生使用，请一定要加上 `static propTypes` 才能生效。比如，这样就可以直接在 body 中使用:

```html
<body>
  <my-element name="dntzhang" my-age="20"></my-element>
</body>
```

### 高级技巧

这里介绍一次性使用 prop 的技巧:

```jsx
define('my-element', class extends WeElement {
  install() {
    this.name = this.props.name
  }

  render() {
    return (
      <h1>Hello, {this.name}!</h1>
    )
  }
})
```

下次父组件 update 并且修改了 props 也不会影响到该组件。