# 属性 Props

## 用法

通过 Props 向子组件传递数据，比如：

```tsx
import { Component, tag, render } from 'omi'

@tag('my-element')
class MyElement extends Component {
  render(props) {
    return <h1>Hello, {props.name}!</h1>
  }
}
```

使用元素:

```tsx
<my-element name="world"></my-element>
```

你也可以传任意类型的数据给 props:

```tsx
@tag('my-element')
class MyElement extends Component {
  render(props) {
    return <h1>Hello, {props.myObj.name}!</h1>
  }
}
```

使用元素:

```tsx
<my-element myObj={{ name: 'world' }}></my-element>
```

你可以通过静态属性 `static defaultProps` 来设置默认值，使用 `static propTypes` 来设置类型:

```tsx
@tag('my-element')
class MyElement extends Component {
  static defaultProps = {
    name: 'Omi',
    myAge: 18,
  }

  // 不是必须定义，当您使用 omi 单独写组件时候才需要定义 propTypes
  static propTypes = {
    name: String,
    myAge: Number,
    // 也支持多类型
    color: [String, Array],
  }

  render(props) {
    return (
      <h1>
        Hello, {props.name}! Age {props.myAge}
      </h1>
    )
  }
}
```

需要特别注意，如果你的自定义元素想要直接在其他框架或者无框架的情况下原生使用，请一定要加上 `static propTypes` 才能生效。比如，这样就可以直接在 body 中使用:

```html
<body>
  <my-element name="dntzhang" my-age="20"></my-element>
</body>
```

## 合并定义

如果不想单独定义，可以合并到 `static props` 一起定义，该定义也会合并已经存在的定义。

```tsx
  static props = {
    count: {
      type: Number,
      default: 0,
      changed(newValue, oldValue) {
        this.state.count = newValue
        this.update()
      }
    }
  }
```

props 的 ts 类型定义如下:

```ts
type PropType = String | Number | Boolean | Array<any> | Object | Array<PropType>

type Props = {
  [key: string]: {
    type?: PropType
    default?: any
    reflect?: boolean | ((value: any) => any)
    changed?: (newValue: any, oldValue: any) => void
  }
}
```
