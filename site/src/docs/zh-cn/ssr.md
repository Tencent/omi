## 服务器端渲染

服务器端渲染英文叫 Server-Side Rendering，简称 SSR，有两大优势:

* 对 SEO 友好
* 更快的首屏展示时间

用服务器端渲染 (SSR) 也有缺点，比如增加服务器端开销。开发者可以自行权衡是否使用 SSR，或者直接使用 [omi-snap](https://github.com/Tencent/omi/blob/master/tutorial/omi-snap.cn.md) 预渲染，预渲染不需要服务器端额外的开销，直接在构建时候无头浏览器生成骨架屏，所以也就没有动态数据内容，而 SSR 可以返回动态数据生成的HTML，还可以把数据序列化与 HTML 一同返回。

## 快速使用

```bash
$ npm i omi-cli -g      # 全局安装 cli
$ omi init-s my-app     # 初始化项目 
$ cd my-app           
$ npm start             # 开发
$ npm run build         # 发布
```

## 原理解析

定义组件：

```jsx
import { WeElement, define } from 'omio'

define('my-element', class extends WeElement {
  install() {
    this.data = { liked: false }
  }

  static css = 'button{ color: red; }'

  render() {
    if (this.data.liked) {
      return 'You liked this.'
    }

    return <button onClick={() => {
      this.data.liked = true
      this.update()
    }} >Like</button>
  }
})
```

注意这里使用了 omio，SSR 只能使用 omio，而不能使用 omi，因为 omi 是 web components，node 无法渲染 web components。

> omi 和 omio 项目都必须使用 omio 进行 SSR

起个 node 服务器:

```jsx
var express = require('express')
var app = express()
var Omi = require('omio')
require('./my-element')

app.get('/', function (req, res) {
  const obj = Omi.renderToString(<my-element />)
  res.end(`<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Omi SSR</title>
    ${toString(obj.css)}
  </head>
  <body>${obj.html}</body>
</html>`)
})

function toString(css){
  return (
     css.map(style => {
          return `<style id="${style.id}">${style.css}</style>`
      }
    ))
  )
}

app.listen(3000)
```

直出的 HTML 结构:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Omi SSR</title>
    <style type="text/css" id="_ss0">button[_ss0]{color:red;}</style>
  </head>
  <body><button _ss0>Like</button></body>
</html>
```

显示效果:

![](https://github.com/Tencent/omi/raw/master/assets/hello-ssr.png)


