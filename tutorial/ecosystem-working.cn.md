## 腾讯 Omi 生态计划

经过 20 多个小版本的迭代，Omi 版本号已经到了 v4.0.20，几个大的平台系统和 H5 页面的也上了 Omi。本篇总结下和规划：

* 增加的生态  
* 新增的特性 
* 下一阶段的规划

## 增加的生态

| **项目**                         | **描述**                           |
| ------------------------------- | ----------------------------------- |
| [omi-router](https://github.com/Tencent/omi/tree/master/packages/omi-router) |Omi 官方路由 |
| [omi-touch](https://github.com/Tencent/omi/tree/master/packages/omi-touch)|丝般顺滑的触摸运动|
| [omi-native](https://github.com/Tencent/omi/tree/master/packages/omi-native)|把 web components 渲染到 native，比如 IOS 、Android|
| [omi-weui(working)](https://github.com/Tencent/omi/tree/master/packages/omi-weui)|Weui for Omi by [@lxyc](https://github.com/lxyc).|

## Omi Router

在如今的 8210 年，设计框架的理念和以往有很大的不同:

> 怎么让框架专注，怎么让框架做得少，怎么让框架做得更少

比如:

```js
import 'omi-router'
import { define, WeElement, render } from 'omi'
import './about'
import './home'
import './user'
import './user-list'

define('my-app', class extends WeElement {
  static observe = true

  data = { tag: 'my-home' }
  
  install() {

    route('/', () => {
      this.data.tag = 'my-home'
    })

    route('/about', () => {
      this.data.tag = 'my-about'
    })

    route('/user-list', () => {
      this.data.tag = 'user-list'
    })

    route('/user/:name/category/:category', (params) => {
      this.data.tag = 'my-user'
      this.data.params = params
    })

    route('*', function () {
      console.log('not found')
    })

    route.before = (evt) => {
      console.log('before')
      //prevent route when return false
      //return false
    }

    route.after = (evt) => {
      console.log('after')
    }
  }

  onClick = () => {
    route.to('/user/vorshen/category/html')
  }

  render(props, data) {
    return (
      <div>
        <ul>
          <li><a href="#/" >Home</a></li>
          <li><a href="#/about" >About</a></li>
          <li><a href="#/user-list" >UserList</a></li>
        </ul>
        <div id="view">
          <data.tag params={data.params} />
        </div>
        <div><button onClick={this.onClick}>Test route.to</button></div>
      </div>
    )
  }
})

render(<my-app />, "#container")
```

router 只有两个 API，import 之后可以在全局访问 route:

* route(path, callback)
> 定义路由规则
* route.to(path)
> 跳转

专注路由规则和回调，其余统统不做，比如:

* 动态 import 延迟加载
* 耦合 View 
* 制作成标签

这些能力留给开发者自己灵活实现。

## Omi Use

## Render Array

## NoSlot


## font-face
