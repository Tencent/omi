# Omim

[Omi](https://github.com/Tencent/omi) 打造的 Material Design 框架无关标准组件，任意框架都可以使用。

## 特性

* 基于 [material-components-web](https://github.com/material-components/material-components-web) 简单包装
* 使用标准 Web Components 的 Custom Elements 渲染 
* 任意框架都可以使用这些组件(比如 Omi, React, Vue and Angular)
* 同时支持 JSX 和 原生 HTML 标签的使用方式 
* 每个组件可以单独使用

## 使用指南

### 通过 script

```html
<m-button>I am button</m-button>

<script src="https://unpkg.com/omi"></script>
<script src="https://unpkg.com/@omim/core@latest/button/index.js"></script>
```

### 通过 npm

``` bash
npm install @omim/core
```

Then:

```js
import '@omim/core/button'
```

然后在任意框架中使用，比如 Omi, React, Vue or Angular:

``` html
<m-button>I am button</m-button>
```

It can also be used in pure js:

```js
var button = document.createElement('m-button')
button.innerHTML = 'I am button'
document.body.append(button)
button.addEventListener('click', function () {
  console.log('Clicked!')
})

//or
//document.body.innerHTML = '<m-button>I am button</m-button>'
```

## 更改主题颜色

```js
window.OmimThemePrimary =  'red'
window.OmimThemeSecondary =  'blue'
window.OmimThemeError =  'yellow'

import '@omim/core/button'
```

或者

```html
<m-button>I am button</m-button>

<script src="https://unpkg.com/omi"></script>
<script>
  window.OmimThemePrimary =  'red'
  window.OmimThemeSecondary =  'blue'
  window.OmimThemeError =  'yellow'
</script>
<script src="https://unpkg.com/@omim/core@latest/button/index.js"></script>
```

## 贡献

### CMD

Build component:

```bash
npm run build -- component-name
```

Build demo:

```bash
npm start demo-name
```

Publish:

```bash
npm publish --access public
```

## 相关链接

* [material.io docs](https://material.io/develop/web/components/buttons/) 
* [material.io demo](https://material-components.github.io/material-components-web-catalog/#/) 
