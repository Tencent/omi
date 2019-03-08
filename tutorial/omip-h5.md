# Omi 多端开发之 - omip 适配 h5 

Omip 是腾讯 Omi 团队开发的跨端开发工具集，支持小程序和 H5 SPA，最新的 omip 已经适配了 h5，如下方新增的两条命令，

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

不仅可以一键生成小程序，还能一键生成 h5 SPA。怎么做到的？下面来一一列举难点，逐个击破。
---

## 工作列表

* CSS rpx 转换问题
* JSX 里的小程序标签映射
* wx api 适配
* 集成路由
* app.css 作用域问题

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

## 标签映射

由于小程序里的一些标签在浏览器中不能够识别，需要转换成浏览器识别的标签，所以这里列了一个映射表：

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
| 界面 api| 实现对应的omi组件 |
| 数据存储 api| localStorage |

### 生命周期处理

* onShow
* onHide

这是 wx 里 Page 里的生命周期，而 omi 是不包含的。这里需要在 router 的回调函数中进行主动调用。

未完待续..

## 开始使用吧

[→ Omip Github](https://github.com/Tencent/omi/tree/master/packages/omip)
