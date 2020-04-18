## Omiu 是什么？

Omiu 是基于 [Omi](https://github.com/Tencent/omi) 开发的跨框架 UI 组件库，输出标准 Web Components 的 Custom Elements，任意组件可以同时在 React、Vue、Preact、Omi 或者原生 JS 等任意框架或无框架中使用，非常方便。总体来看，Omiu 有这些特性:

* 跨框架使用
* 高品质的 UI 交互细节
* 集成 MUI 海量 ICON 
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
import 'omim/button'
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

## 更改主题

```js
const setTheme = Omiu.setTheme

setTheme('primary', '#07c160')
setTheme('danger', '#f5222d')
setTheme('surface', '#ffffff')
setTheme('on-primary', '#ffffff')
setTheme('on-danger', '#ffffff')
setTheme('on-surface', '#000000')
setTheme('background', '#ffffff')
setTheme('small-radius', '4px')
setTheme('medium-radius', '4px')
setTheme('large-radius', '0px')
setTheme('font-family', '-apple-system-font,"Helvetica Neue",sans-serif')
```

或者

```js
Omiu.setThemePrimary('green')
Omiu.setThemeError('red')
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

```jsx
/** @jsx nativeEvents */
import nativeEvents from 'jsx-native-events'
import { useState } from 'react'
import '@omiu/icon-button'

export default function SomeComponent(props) {
    const [result, setSwitch] = useState(false)

    return (
      <div>
        <p>The switch is {result ? 'on' : 'off'}</p>
        <o-icon-button color="red" icons="['favorite', 'favorite_border']" onEventChange={e => setSwitch(e.detail.isOn)}>
        </o-icon-button>
      </div>
    )
}
```

非常感谢 calebdwilliams 的 [jsx-native-events](https://github.com/calebdwilliams/jsx-native-events#readme)。

## Vue 中使用 omim

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


## 贡献

### 一些命令

Build 组件:

```bash
npm run build -- component-name
```

Build 所有组件:

```bash
npm run build-all
```

Build 例子:

```bash
npm start demo-name
```

发布:

```bash
npm publish --access public
```

## 相关链接

* [material icon 搜索](https://material-ui.com/zh/components/material-icons/) 

把大写转成驼峰就是对应的 omiu 组件。比如 `@material-ui/icons/AccessAlarm`，对应的就是

```js
import '@omiu/icon/access-alarm'
```

在 HTML 里就可以使用:

```html
<o-icon-access-alarm></o-icon-access-alarm>
```

是不是很方便！
