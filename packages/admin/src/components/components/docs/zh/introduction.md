## Omiu 是什么？

Omiu 是基于 [Omi](https://github.com/Tencent/omi) 开发的跨框架 UI 组件库，输出标准 Web Components 的 Custom Elements，任意组件可以同时在 React、Vue、Preact、Omi 或者原生 JS 等任意框架或无框架中使用，非常方便。总体来看，Omiu 有这些特性:

> [Omiu Codepen 合集](https://codepen.io/collection/XBJjke)

* 跨框架使用
* 集成 MUI [海量 ICON](https://tencent.github.io/omi/components/icon/demos/icon.html)
* 移动端和 PC 共用一套组件
* 运行时的主题切换支持(颜色、字体和圆角)
* 组件直接解耦，独立打磨，独立发布，独立引用
* 扩展了 HTML 能力，你可以通过字符串 `'0'` 或者字符串 `'false'` 传递 false 给元素

## 使用指南

### 通过 script

```html
<script src="https://unpkg.com/omi"></script>
<script src="https://unpkg.com/@omiu/button"></script>

<o-button>I am button</o-button>
```

### 通过 npm

``` bash
npm install @omiu/button
```

然后导入（自动全局注册）:

```js
import '@omiu/button'
```

然后在任意框架中使用，比如 Omi, React, Vue or Angular:

``` html
<o-button>I am button</o-button>
```

也可以原生 JS 使用：

```js
var button = document.createElement('o-button')
button.innerHTML = 'I am omiu button'
document.body.append(button)
button.addEventListener('click', function () {
  console.log('Clicked!')
})

//or
//document.body.innerHTML = '<o-button>I am omiu button</o-button>'
```

## HTML 扩展 

当默认值为 true，需要传递 false 给 element 的时候，以前是历史难题，Omi 完美解决了这一点，你可以通过字符串 `'0'` 或者 字符串 `'false'` 来设置。

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

Use:

```html
<my-element show="false"></my-element>
```

or

```html
<my-element show="0"></my-element>
```

## React 中使用 omiu

```tsx
import { useState } from 'react'
import '@omiu/icon-button'

export default function SomeComponent(props) {
    const [result, setSwitch] = useState(false)

    return (
      <div>
        <p>The switch is {result ? 'on' : 'off'}</p>
        {//使用 addEventListener 绑定自定义事件}
        <o-icon-button color="red" icons="['favorite', 'favorite_border']">
        </o-icon-button>
      </div>
    )
}
```


## Vue 中使用 Omiu

```html
<script>
import '@omiu/icon-button'

export default {
  name: 'HelloWorld',
  data: function() {
    return {
      result: false
    }
  },
  methods: {
    myEvent: function(evt) {
      this.result = evt.detail.isOn
    }
  }
}
</script>

<template>
  <div class="component">
    <p>The switch is {{result? 'on' : 'off'}}</p>
    <o-icon-button color="red" icons="['favorite', 'favorite_border']" @change="myEvent"></o-icon-button>
  </div>
</template>
```

## 事件触发和绑定最佳实践

由于需要跨框架，在事件绑定上为了统一组件行为这里给除了组件开发和使用的最佳实践。Omiu 组件的事件触发统一使用小写的形式：

```js
this.fire('change')
this.fire('my-event')
```

在 Omi 中进行对应的事件绑定:

```jsx
<my-ele onChange={this.changeHandler} onMyEvent={this.myEventHandler}></my-ele>
```

在 Preact 中进行对应的事件绑定:

```jsx
<my-ele onchange={this.changeHandler} onmy-event={this.myEventHandler}></my-ele>
```

在 Vue 中进行对应的事件绑定:

```html
<my-ele @change="changeHandler" @my-event="myEventHandler"></my-ele>
```

在 React 和 JS 中进行对应的事件绑定:

```jsx
myEl.addEventListener('my-event', (evt) => {})
```

## 贡献

### 一些命令

Build 组件:

```bash
npm run build 
```

Build 例子:

```bash
npm start
```

生成文档:

```bash
npm run docs
```

发布:

```bash
npm publish --access public
```
