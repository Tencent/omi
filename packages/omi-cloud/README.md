# Omi Cloud 实战 markdown 内容发布系统

开发小程序，但是：没有后端！没有运维！没有 DBA！没有域名！没有证书！没有钱！没有时间！没有精力！

**没关系，会 javascript 就可以，小程序•云开发带你起飞！**

开发者可以使用云开发开发微信小程序、小游戏，无需搭建服务器，即可使用云端能力。云开发为开发者提供完整的云端支持，弱化后端和运维概念，无需搭建服务器，使用平台提供的 API 进行核心业务开发，即可实现快速上线和迭代，同时这一能力，同开发者已经使用的云服务相互兼容，并不互斥。

目前提供三大基础能力支持：

- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写自身业务逻辑代码
- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 数据库
- 存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理

## 一步一步搭建

本文将一步一步教你使用 小程序•云开发 + Omip + Comi 搭建一个支持 markdown 和代码高亮的小程序内容展示和发布系统。

预览:

![](https://github.com/Tencent/omi/raw/master/assets/omi-cloud.jpg)

### 1.建表

<img src="https://github.com/Tencent/omi/raw/master/assets/oc.jpg"  width="800">

操作路径： 微信开发者工具→云开发→数据库→添加集合

article 集合字段说明:


| **字段**                         | **说明**                           |
| ------------------------------- | ----------------------------------- |
|     _id    |        数据的唯一 id，用户写入时系统自动生产      |
|     _openid    |     用户的唯一标识，用户写入时系统自动生产      |
|     createTime    |     文章创建时间     |
|     md    |     文章内容     |
|     order    |     文章的顺序     |
|     title    |     文章的标题     |

很明显，这个表用来存储所有的文章。然后设置表的读写权限：

<img src="https://github.com/Tencent/omi/raw/master/assets/db-config.jpg"  width="300">

因为后续可能支持用户发表文章，所有设置成第一个。

### 2.初始化项目目录

```bash
$ npm i omi-cli -g 
$ omi init-cloud my-app     
$ cd my-app          
$ npm start          
```

<img src="https://github.com/Tencent/omi/raw/master/assets/dir.jpg"  width="400">

这里是使用 omip 作为脚手架，你也可以通过微信开发者工具创建云开发的脚手架。

### 3.项目初始化 app.js

```jsx
import './app.css'
import './pages/list/index'
import { render, WeElement, define } from 'omi'

define('my-app', class extends WeElement {

  config = {
    pages: [
      'pages/list/index',
      'pages/detail/index',
      'pages/import/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'Omi Cloud',
      navigationBarTextStyle: 'black'
    }
  }

  install() {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
      this.globalData.db = wx.cloud.database({
        env: 'test-06eb2e'
      })
    }
  }

  render() {
    return (
      <page-list />
    )
  }
})

render(<my-app />, '#app')
```

<img src="https://github.com/Tencent/omi/raw/master/assets/env.jpg"  width="600">

`wx.cloud.database` 代码参数里的 env 可以从上面获取到，一般创建两个环境，一个用户测试环境，一个用于生产环境。

- pages/list/index   文章列表首页
- pages/detail/index 文章详情夜
- pages/import/index 文章导入页(先简单通过代码导入 markdown，没提供 UI)

### 导入 markdown 数据

```js
import { WeElement, define } from 'omi'
import data from './test.md'

const app = getApp()

define('page-import', class extends WeElement {

  installed() {
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        app.globalData.openid = res.result.openid
        app.globalData.db.collection('article').add({
          data: {
            md: data.md,
            title: 'test',
            createTime: app.globalData.db.serverDate()
          },
          success: (res) => {
            console.log(res)
          },
          fail: err => {
            console.error('[云函数] [login] 调用失败', err)
          }
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
  }

  ...
  ...
})
```

注意三点：

- 通过 `wx.cloud.callFunction` 调用云函数进行登陆，且获取 openid，接着导入数据会自动带上提交该 openid。
- 通过 `app.globalData.db.serverDate()` 获取服务端时间，客户端时间不可靠
- 文章导入只由管理员负责

注意 `import data from './test.md'`，这里通过修改 omip 里的 scripts 逻辑实现。

这里解释下 import markdown 原理:

```js
let code = fs.readFileSync(item).toString()
if (path.extname(item) === '.md') {
  code = `export default { md: \`${code.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }`
}
```

检测到 md 后缀的文件，把文件里的 markdown 字符串对关键字进行转义然后变成一个 js 模块。

这也算是使用中间编译的好处之一吧，如果原生的小程序目前没办法 import markdown 文件，当然原生小程序 API 和周边生态在不断进化，腾讯 Omi 团队开发的 [mps 框架](https://github.com/Tencent/omi/tree/master/packages/mps) 就是让你在原生小程序中使用 jsx 和 less。

上面的详细代码可以[点击这里](https://github.com/Tencent/omi/blob/master/packages/omi-cloud/scripts/taro-cli/src/weapp.js#L1968-L1971)查看到。


### 请求 list 数据

```js
 //先展示 loading
 wx.showLoading({
    title: '加载中'
  })
  //调用云函数获取 openid
  wx.cloud.callFunction({
    name: 'login',
    data: {},
    success: res => {
      app.globalData.openid = res.result.openid
      app.globalData.db.collection('article').field({
        title: true,
        _id: true,
        order: true
      }).get().then(res => {
        this.data.list = res.data.sort(function (a, b) {
          return a.order - b.order
        })
        this.update()
        wx.hideLoading()
      })
    },
    fail: err => {
      console.error('[云函数] [login] 调用失败', err)
    }
  })
```

- 请求 list，通过 field 方法筛选字段，毕竟 list 不需要 md 字段，这样可以减少数据传输，节约带宽
- 通过 order 字段对 list 进行排序（这样管理员不需要发版本就可以手动调整 order 给 list 排序）


完整的代码:

```jsx
import { WeElement, define } from 'omi'
import './index.css'
import arrowPng from './arrow.png'

//获取应用实例
const app = getApp()

define('page-about', class extends WeElement {
  config = {
    navigationBarBackgroundColor: '#24292e',
    navigationBarTextStyle: 'white',
    navigationBarTitleText: 'Omi',
    backgroundColor: '#ccc',
    backgroundTextStyle: 'light'
  }

  data = {
    list: []
  }

  installed() {
    wx.showLoading({
      title: '加载中'
    })
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        app.globalData.db.collection('article').field({
          title: true,
          _id: true,
          order: true
        }).get().then(res => {
          this.data.list = res.data.sort(function (a, b) {
            return a.order - b.order
          })
          this.update()
          wx.hideLoading()
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)

      }
    })
  }

  gotoDetail = (evt) => {
    wx.navigateTo({
      url: '../detail/index?id=' + evt.currentTarget.dataset.id
    })
  }

  render() {
    return (
      <view class='ctn'>
        {list.map(item => (
          <view class='item' data-id={item._id} bindtap={this.gotoDetail}>
            <text>{item.title}</text>
            <image src={arrowPng}></image>
          </view>
        ))}
      </view>
    )
  }
})
```

Omip 可以直接让你使用 jsx 书写 wxml 结构。编译出的 wxml 如下:

```html
<block>
  <view class="ctn">
    <view class="item" data-id="{{item._id}}" bindtap="gotoDetail" wx:for="{{list}}" wx:for-item="item"><text>{{item.title}}</text>
      <image src="{{arrowPng}}"></image>
    </view>
  </view>
</block>
```

这里需要注意，点击每一项跳转详情也一定要使用 `evt.currentTarget.dataset.id`，而不能使用 `evt.target.dataset.id`。这样点击到文字或者image
上获取不到 id。

<!-- 
### 依赖的数据表

<img src="https://github.com/Tencent/omi/raw/master/assets/omi-cloud-db.jpg"  width="600">

<img src="https://github.com/Tencent/omi/raw/master/assets/omi-cloud-db-todo.jpg"  width="600">
 -->

### 文章详情展示

这里使用 Comi 进行 markdown 渲染！ Comi 读 ['kəʊmɪ]，类似中文 科米，是腾讯 Omi 团队开发的小程序代码高亮和 markdown 渲染组件。Comi 是基于下面几个优秀的社区组件进行二次开发而成。

* wxParse
* remarkable
* html2json
* htmlparser
* prism

效果预览：

<img src="https://github.com/Tencent/omi/raw/master/assets/comi.jpg" width="320">

```js
import { WeElement, define } from 'omi'
import './index.css'
import comi from '../../components/comi/comi'

//获取应用实例
const app = getApp()

define('page-about', class extends WeElement {
  config = {
    navigationBarBackgroundColor: '#24292e',
    navigationBarTextStyle: 'white',
    navigationBarTitleText: ' ',
    backgroundColor: '#eeeeee',
    backgroundTextStyle: 'light'
  }

  install(options) {
    wx.showLoading({
      title: '加载中'
    })
    app.globalData.db.collection('article').doc(options.id).get().then(res=>{
      comi(res.data.md, this.$scope)
      wx.hideLoading()
    }).catch(err => {
      console.error(err)
    })
  }


  render() {
    return (
      <view>
        <include src="../../components/comi/comi.wxml" />
      </view>
    )
  }
})
```

除了在 omip 中使用，原生小程序也可以使用 Comi:

先拷贝 [此目录](https://github.com/Tencent/omi/tree/master/packages/comi/mp/comi) 到你的项目。

js:

```js
const comi = require('../../comi/comi.js');

Page({
  onLoad: function () {
    comi(`你要渲染的 md！`, this)
  }
})
```

wxml:

```html
<include src="../../comi/comi.wxml" />
```

wxss:

```css
@import "../../comi/comi.wxss";
```

大功告成，简单把！


## 相关链接

- [源码地址](https://github.com/Tencent/omi/tree/master/packages/omi-cloud)
- [官方教程](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)
- [小程序端 API 文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-client-api/)
- [服务端 API 文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-server-api/)