# Omi Cloud 

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

很明显，这个表用来存储所有的文章。

### 2.初始化项目目录

```bash
$ npm i omi-cli -g 
$ omi init-cloud my-app     
$ cd my-app          
$ npm start          
```

这里是使用 omip 作为脚手架，你也可以通过微信开发者工具创建云开发的脚手架。

### 3.项目初始化 app.js

```js
import './app.css'
import './pages/index/index'
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
      <page-index />
    )
  }
})

render(<my-app />, '#app')
```

<img src="https://github.com/Tencent/omi/raw/master/assets/env.jpg"  width="400">

`wx.cloud.database` 代码参数里的 env 可以从上面获取到，一般创建两个环境，一个用户测试环境，一个用于生产环境。

- pages/list/index   文章列表首页
- pages/detail/index 文章详情夜
- pages/import/index 文章导入页(先简单通过代码导入，没提供 UI)

### 依赖的数据表

<img src="https://github.com/Tencent/omi/raw/master/assets/omi-cloud-db.jpg"  width="600">

<img src="https://github.com/Tencent/omi/raw/master/assets/omi-cloud-db-todo.jpg"  width="600">


## 官方链接

- [官方教程](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)
- [小程序端 API 文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-client-api/)
- [服务端 API 文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-server-api/)