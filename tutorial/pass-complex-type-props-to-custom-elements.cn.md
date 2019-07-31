# 给 web components 自定义元素传递复杂类型 props

先看一段来自 react readme 里的介绍:

> react 基于组件：构建管理自己状态的封装组件，然后组合它们以生成复杂的UI。由于组件逻辑是用JavaScript而不是模板编写的，所以您可以轻松地通过应用程序**传递丰富的数据**，并将状态保存在DOM之外。

众所周知，react 解决了 html 标签不能传递复杂 attribute 的问题，你只能传递 string 类型，否则只能使用 properties。使用 properties 就不能声明在 html 上，只能通过 javascript 后置处理。然而 Omi 框架有几种手段解决 web components 自定义元素传递复杂 attribute 的问题。

定义自定义元素：

```jsx
define('my-ele', class extends WeElement {
  static propTypes = {
    user: Object
  }

  render(props) {
    return (
      <div>{props.user.name},{props.use.age}}</div>
    )
  }
})
```

其中 propTypes 必须声明，omi 内部就知道怎么解析传入的字符串。

## 方式一

```html
<my-ele user="{ name: 'omi', age: 1}"></my-ele>
```

直接传入 json 字符串，


