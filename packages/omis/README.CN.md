[English](./README.md) | 简体中文 

# Omis

> Functional Component + Store + Scoped Style + Web Components in tiny size

* 函数式风格但非函数式编程 
* 结构-样式-行为分离
* 支持 scoped style 
* 支持 web components
* hyperscript 视觉上更加友好
* 每个组件可以带有一个 store，去中心化
* 支持全局 store 共享数据，并且按需局部更新组件
* 每个组件 store 拥有 update 方法，执行该方法局部刷新组件
* [支持小程序开发](https://github.com/Tencent/omi/tree/master/packages/omi-kbone)

- [→ Omis 在线例子](https://codepen.io/collection/XjLaRo/)
- [→ 文档](https://tencent.github.io/omi/site/omis/cn.html)
- [→ Omisu 按钮例子](https://codepen.io/dntzhang-the-typescripter/pen/eqJNyy) & [→ Omisu 按钮源码](https://github.com/Tencent/omi/blob/master/packages/omisu/src/button/index.tsx#L8-L31)

## 快速入门

```bash
npm i omis
```

```jsx
import { render, h } from 'omis'

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
      _.update()
    },
    sub() {
      this.count--
      _.update()
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

## 参数说明

```jsx
const Comp = (props, store, _, $) => {

}

Comp.store = (_, $) => {

}
```

* `_` 代表 `component`
* `$` 代表 `globalStore`

## 快速开始

```bash
$ npm i omi-cli -g     # install cli
$ omi init-s my-app    # init project
$ cd my-app            
$ npm start            # develop
$ npm run build        # release
```

> `npx omi-cli init-s my-app` 也是支持的(npm v5.2.0+).

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

## 贡献代码

### 开发

``` bash
npm start example-name
```

### 发布

``` bash
npm run build
```

### 测试

``` bash
npm run test
```

## License

MIT 
