## Omis

Omis (读 /ˈomɪs/) 是函数式风格，自带 store 且 hyperscript 友好的组件框架。

* 支持 Web Components
* 函数式风格但非函数式编程 
* 结构-样式-行为分离
* 超轻量代码尺寸大小(6kb)
* hyperscript 视觉上更加友好
* 每个组件可以带有一个 store，去中心化
* 支持全局 store 共享数据，并且按需局部更新组件
* 每个组件 store 拥有 update 方法，执行该方法自定局部刷新组件

[→ Omis 在线例子](https://codepen.io/collection/XjLaRo/)

## 一分钟入门

```jsx
import { render, h } from 'omi'

const Counter = (props, store) => {
  return (
    <div>
      <button onClick={store.sub}>-</button>
      <span>{store.count}</span>
      <button onClick={store.add}>+</button>
    </div>
  )
}

Counter.store = _ => {
  return {
    count: 1,
    add() {
      this.count++
      this.update()
    },
    sub() {
      this.count--
      this.update()
    }
  }
}

Counter.css = `
span{
  color: red;
}
`

render(<Counter />, 'body')
```

也可以直接使用 hyperscript，无需任何编译直接运行:

```js
const Counter = (props, store) => {
  return (
    h('div', {}, [
      h('button', { onClick: store.sub }, '-'),
      h('span', {}, store.count),
      h('button', { onClick: store.add }, '+')
    ])
  )
}
```

## 参数说明

```jsx
const Comp = (props, store, _, $) => {

}

Comp.store = (_, $) => {

}
```

* `_` 代表 `component`
* `$` 代表 `globalStore`

## Web Components

```jsx
import { define } from 'omis'

const HelloMessage = (props, store) => {
  return (
    <div onClick={store.clickHandler} >
      <div>Hello {props.msg}</div>
      <div>{props.user.name}</div>
      <div>{props.user.age}</div>
    </div>
  )
}

HelloMessage.css = `div{
	color: red;
}`

HelloMessage.store = _ => {
  return {
    clickHandler() {
      _.props.onMyEvent && _.props.onMyEvent(123)
    }
  }
}

HelloMessage.propTypes = {
  msg: String,
  user: Object
}

define('hello-msg', HelloMessage)
```

然后这个标签就可以任意框架使用了:

```html
<hello-msg msg="Omis" user="{name:'dntzhang', age: 18}"></hello-msg>

<script>
  var ele = document.querySelector('hello-msg')

  ele.addEventListener('myEvent', function(evt){
    console.log(evt)
  })
</script>
```

恭喜你已经入门！
