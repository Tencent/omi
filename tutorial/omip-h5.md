# Omi 多端开发之 - omip 适配 h5 原理揭秘

[Omi 框架](https://github.com/Tencent/omi)是腾讯开源的下一代前端框架，提供桌面、移动和小程序整体解决方案(One framework. Mobile & Desktop & Mini Program), Omip 是 Omi 团队开发的跨端开发工具集，支持小程序和 H5 SPA，最新的 omip 已经适配了 h5，如下方新增的两条命令：

```js
npm i omi-cli -g
omi init-p my-app
cd my-app
npm start        //开发小程序
npm run dev:h5   //开发 h5
npm run build:h5 //发布 h5
```

> node 版本要求 >= 8

> 也支持一条命令 `npx omi-cli init-p my-app` (npm v5.2.0+)

当然也支持 TypeScript:

```js
omi init-p-ts my-app
```

TypeScript 的其他命令和上面一样。

## 开发预览

![omip](https://github.com/Tencent/omi/raw/master/assets/omip-pv.png)

特性包括:

* 一次学习，多处开发，一次开发，多处运行
* 使用 JSX，表达能力和编程体验大于模板
* 支持使用 npm/yarn 安装管理第三方依赖
* 支持使用 ES6+,ES2015+,TypeScript
* 支持使用 CSS 预编译器
* 小程序 API 优化，异步 API Promise 化
* 超轻量的依赖包，顺从小程序标签和组件的设计

Omip 不仅可以一键生成小程序，还能一键生成 h5 SPA。怎么做到的？下面来一一列举难点，逐个击破。

## 问题列表

* CSS rpx 转换问题
* app.css 作用域问题
* JSX 里的小程序标签映射
* wx api 适配
* 集成路由

## CSS rpx 转换问题

小程序扩展尺寸单位 rpx（responsive pixel）: 可以根据屏幕宽度进行自适应。规定屏幕宽为750rpx。如在 iPhone6 上，屏幕宽度为375px，共有750个物理像素，则750rpx = 375px = 750物理像素，1rpx = 0.5px = 1物理像素。

因为浏览器是不支持 rpx 单位，所以需要**运行时**转换，刚好 omi 内置了这个函数：

```js
function rpx(str) {
  return str.replace(/([1-9]\d*|0)(\.\d*)*rpx/g, (a, b) => {
    return (window.innerWidth * Number(b)) / 750 + 'px'
  })
}
```

从 rpx 源码可以看到，需要运行时转换 rpx，而非编译时！因为只有运行时能拿到 屏幕宽度，omi 早期版本已经支持运行时的 rpx 转换：

```js
import { WeElement, define, rpx } from 'omi'

define('my-ele', class extends WeElement {

  static css = rpx(`div { font-size: 375rpx }`)

  render() {
    return (
      <div>my ele</div>
    )
  }
})
```

## app.css 作用域问题

Shadow tree 与 omi 不一样，omi 是从根开始 shadow root，而小程序是从自定义组件开始，omio 则没有 shadow root。

| | **omi** | **omio** | **小程序**|
|-|-|-|
| Shadow DOM| 从根节点开始 | 无 |从自定义组件开始|
| Scoped CSS|  从根节点开始局部作用域，浏览器 scoped| 从根节点开始局部作用域(运行时 scoped)| 自定义组件局部作用域|

所以，app.css 需要污染到 page 里的 WXML/JSX，在 omi 中怎么做？

先看 app.js 源码：

```js
import './app.css' //注意这行！！！
import './pages/index/index'
import { render, WeElement, define } from 'omi'

define('my-app', class extends WeElement {

  config = {
    pages: [
      'pages/index/index',
      'pages/list/index',
      'pages/detail/index',
      'pages/logs/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
```

上面是使用 omip 开发小程序的入口 js 文件，也是 webpack 编译的入口文件，在 cli 进行语法树分析的时候，可以拿到 import 的各个细节，然后做一些变换处理，比如下面 ImportDeclaration(即 import 语句) 的处理：

```js
traverse(ast, {
    ImportDeclaration: {
      enter (astPath) {
        const node = astPath.node
        const source = node.source
        const specifiers = node.specifiers
        let value = source.value
        //当 app.js 里 import 的文件是以 .css 结尾的时候
        if(value.endsWith('.css')){
          //读取对应 js 目录的 css 文件，移除 css 当中的注释，保存到 appCSS 变量中
          appCSS = fs.readFileSync(filePath.replace('.js','.css'), 'utf-8').replace(/\/\*[^*]*\*+([^/][^*]*\*+)*\//g, '')
          //移除这里条 import 语句
          astPath.remove()
          return
        }
```

得到了 appCSS 之后，想办法注入到所有 page 当中:

```js
 traverse(ast, {
    ImportDeclaration: {
      enter (astPath) {
        const node = astPath.node
        const source = node.source
        let value = source.value
        const specifiers = node.specifiers
        //当 import 的文件是以 .css 结尾的时候
        if(value.endsWith('.css')){
          //读取对应 js 目录的 css 文件，移除 css 当中的注释，保存到 css 变量中
          let css = fs.readFileSync(filePath.replace('.js','.css'), 'utf-8').replace(/\/\*[^*]*\*+([^/][^*]*\*+)*\//g, '')
          //page 注入 appCSS
          if(filePath.indexOf('/src/pages/') !== -1||filePath.indexOf('\\src\\pages\\') !== -1){
            css = appCSS + css
          }
          //把 import 语句替换成 const ___css = Omi.rpx(.....) 的形式！
          astPath.replaceWith(t.variableDeclaration('const',[t.variableDeclarator(t.identifier(`___css`),t.callExpression(t.identifier('Omi.rpx'),[t.stringLiteral(css)]),)]))
          return
        }
        ...
```

这就够了吗？不够！因为 ___css 并没有使用到，需要注入到 WeElement Class 的静态属性 css 上，继续 ast transformation:

```js
const programExitVisitor = {
    ClassBody: {
      exit (astPath) {
        //注入静态属性 const css = ___css
        astPath.unshiftContainer('body', t.classProperty(
          t.identifier('static css'),
          t.identifier('___css')
        ))
      }
    }
  }
```

编译出得 page 长这个样子:

```js
import { WeElement, define } from "../../libs/omip-h5/omi.esm";

const ___css = Omi.rpx("\n.container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 200rpx 0;\n  box-sizing: border-box;\n} \n\n.userinfo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.userinfo-avatar {\n  width: 128rpx;\n  height: 128rpx;\n  margin: 20rpx;\n  border-radius: 50%;\n}\n\n.userinfo-nickname {\n  color: #aaa;\n}\n\n.usermotto {\n  margin-top: 200px;\n}");

const app = getApp();

define('page-index', class extends WeElement {
  static css = ___css;

  data = {
    motto: 'Hello Omip',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
...
...    
```

大功告成!

## 标签映射

由于小程序里的一些标签在浏览器中不能够识别，比如浏览器不识别 view、text 等标签，需要转换成浏览器识别的标签，所以这里列了一个映射表：

```js
const mapTag = {
  'view': 'div',
  'picker': 'select',
  'image': 'img',
  'navigator': 'a',
  'text': 'span'
}

const getNodeName = function(name){
  if(mapTag[name]) return mapTag[name]
  return name
}
```

在 `h` 函数创建虚拟 dom 的时候进行 `getNodeName`:

```js
function h(nodeName, attributes) {
  ...
  ...
  var p = new VNode();
  p.nodeName = getNodeName(nodeName);
  p.children = children;
  p.attributes = attributes == null ? undefined : attributes;
  p.key = attributes == null ? undefined : attributes.key;
  ...
  ...
  return p;
}
```

这里还有遗留问题，比如内置的一些原生组件如:

* scroll-view
* movable-view
* cover-view
* cover-image
* rich-text
* picker-view
* functional-page-navigator
* live-player
* live-pusher

这些组件如果你需要开发 h5,就别用上面这些组件。如果一定要使用上面的组件，那么请使用 omi 先实现上面的组件。

## wx api 适配

这里需要注意的是，不是所有 api 都能适配，只能适配一部分:

| **wx** | **web** |
|-|-|
| wx.request| XMLHttpRequest |
| 界面 api（confirm、loaing、toast等）| 实现对应的omi组件 |
| 数据存储 api| localStorage |

wx 特有的 api 还包括一些特有的生命周期函数，如：

* onShow
* onHide

这是 wx 里 Page 里的生命周期，而 omi 是不包含的。这里需要在 router 的回调函数中进行主动调用。具体怎么出发且看路由管理。

未完待续..

## 开始使用吧

[→ Omip Github](https://github.com/Tencent/omi/tree/master/packages/omip)

Omi 相关任何问题[欢迎进群交流](https://github.com/Tencent/omi/issues/169)。