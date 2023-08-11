# 给 web components 自定义元素传递复杂类型 props

先看一段来自 react readme 里的介绍:

> react 基于组件：构建管理自己状态的封装组件，然后组合它们以生成复杂的UI。由于组件逻辑是用JavaScript而不是模板编写的，所以您可以轻松地通过应用程序**传递丰富的数据**，并将状态保存在DOM之外。

众所周知，react 解决了 html 标签不能传递复杂 attribute 的问题，你只能传递 string 类型，否则只能使用 properties。使用 properties 就不能声明在 html 上，只能通过 javascript 后置处理。然而 [Omi 框架](https://github.com/Tencent/omi)有几种手段解决 web components 自定义元素传递复杂 attribute 的问题。如果你不想使用 Omi 替换整个前端框架，只是想使用其定义的组件作为其他框架的叶子节点，那么你必须好好读一读这篇文章。

## 定义自定义元素

```jsx
define('my-ele', class extends WeElement {
  static propTypes = {
    user: Object
  }

  render(props) {
    return (
      <div>{props.user.name},{props.use.age}</div>
    )
  }
})
```

其中 propTypes 必须声明，omi 内部就知道怎么解析传入的字符串。

## 使用方式一

```html
<my-ele user="{ name: 'omi', age: 1 }"></my-ele>
```

直接传入 json 字符串，omi 内部会将其 `JSON.parse` 转成 object 类型。


## 使用方式二

如果你不想写一大堆字符串在 html 标签上，可以使用下面的方式：

```html
<script>
  Omi.$.user = { name: 'omi', age: 1 }
</script>

<my-ele user=":user"></my-ele>
```

当然也是支持 path:

```html
<script>
  Omi.$.info = {
    list: [
      { name: 'dntzhang', age: 18 },
      { name: 'mali', age: 18 }
    ]
  }
</script>

<my-ele user=":info.list[0]"></my-ele>
<my-ele user=":info.list[1]"></my-ele>
```

[→ 例子 codepen](https://codepen.io/omijs/pen/LwbXxe)

## 传递 false 给自定义元素

HTML 有个设计缺陷，当该 attr 默认值是 true 的时候，你无法传递 false 设置元素 attr 为 false。比如:

```js
define('my-element', class extends WeElement {
  static defaultProps = {
    show: true
  }

 static propTypes = {
    show: Boolean
  }

  render(props) {
    ...
    ...
  }
})
```

使用 Omi，你可以通过 false 字符串或者 0 字符串搞定:

```html
<my-element show="false"></my-element>
```

或

```html
<my-element show="0"></my-element>
```

## 原理

可以看 [→ Omi 源码](https://github.com/Tencent/omi/blob/master/packages/omi/src/we-element.js#L179-L197):

```js
  case Boolean:
    if (val === 'false' || val === '0') {
      ele.props[key] = false
    } else {
      ele.props[key] = true
    }
    break
  case Array:
  case Object:
    if (val[0] === ':') {
      ele.props[key] = getValByPath(val.substr(1), Omi.$)
    } else {
      ele.props[key] = JSON.parse(val
        .replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:([^\/])/g, '"$2":$4')
        .replace(/'([\s\S]*?)'/g, '"$1"')
        .replace(/,(\s*})/g, '$1')
      )
    }
    break
```

这里可以看到，omi 内部还会对 json 格式进行处理，防止 `JSON.parse` 出错。当然 eval 和 new Function 可以转化错误格式的 json 字符串，但是考虑到安全性，还是使用`JSON.parse` 。

## 实战

定义自定义元素:

```jsx
import { define, WeElement } from 'omi'

define('my-ele', class extends WeElement {
  static propTypes = {
    name: String
  }

  clickHandle = ()=>{
    //vue  and preact x
    this.fire('MyEvent', 'abc')
    //preact 8 and blow
    this.fire('myevent', 'abc')
  }

  render(props) {
    return (
      <div onClick={this.clickHandle}>{props.name} {props.user.name} {props.user.age} </div>
    )
  }
})
```

### 在 Vue 中使用


```html
<script>
export default {
  created(){
    Omi.$.user = { name:'Omi' ,age: 1 }
  },
  methods: {
    myEvent: function(evt) {
      //output abc
      console.log(evt.detail)

      //更新自定义组件
      Omi.$.user.age = 2 //or this.$refs.myEle.props.user.age = 2
      this.$refs.myEle.update()
    }
  }
}
</script>

<template>
  <my-ele ref="myEle" name="Omi" user=":user" @MyEvent="myEvent" />
</template>
```

### 在 Preact 中使用


```jsx
import { h, render } from 'preact';

Omi.$.user = { name:'Omi' ,age: 1 }

render((
  <div id="foo">
      <span>Hello, world!</span>
      <my-ele name="Omi" user=":user" onMyEvent={ e => console.log(e.detail)} />
  </div>
), document.body);
```

因为 preact 是最好的 web react 框架，而 react 不是，所以这里就不举 react 的例子了。 

## 最后

Omi 对 attrs 和 props 进行了全映射， attr 就是 props，在任意框架中都可以使用同样的方式使用 omi 定义的自定义元素。如果你有什么意见建议[欢迎让我知道](https://github.com/Tencent/omi/issues/new)。

## Links

* [Omi](https://github.com/Tencent/omi)
* [omijs.org](https://dntzhang.github.io/omi.html)
