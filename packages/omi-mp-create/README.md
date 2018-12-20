## omi-mp-create

> 极小却精巧的小程序框架，对小程序入侵性几乎为零

## 5分钟精通 omi-mp-create

### API

* `create.Page(option)`             创建页面
* `create.Component(option)`        创建组件
* `this.oData`                      操作页面或组件的数据（会自动更新视图）
* `this.store`                      页面注入的 store，页面和页面所有组件可以拿到
* `create.mitt()`                   事件发送和监听器
* `create.emitter`                  事件发送和监听器，不同于 mitt() 每次会创建新的实例，emitter 是全局唯一，可以用于跨页面通讯

### 实战

#### 页面

```js
import create from '../../utils/create'

const app = getApp()

create.Page({
  store: {
    abc: '公共数据从页面注入到页面的所有组件'
    //事件发送和监听器,或者 create.mitt()
    emitter: create.emitter
  },
  data: {
    motto: 'Hello World',
    userInfo: { },
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  ...
  ...
  onLoad: function () {

    ...
    ...
    ...
    //监听事件
    this.store.emitter.on('foo', e => console.log('foo', e) )
    setTimeout(() => {
      this.oData.userInfo = {
        nickName: 'dnt',
        avatarUrl: this.data.userInfo.avatarUrl
      }
    }, 2000)


    setTimeout(() => {
      this.oData.userInfo.nickName = 'dntzhang'
    }, 4000)
  }
})
```

这里需要注意，oData 必须直接操作 data 里定义好的数据才能直接更新视图，比如 `nickName` 一开始没有定义好，更新它是不会更新视图，只有通过下面代码执行之后，才能更新 nickName，因为 userInfo 的变更会自动监听 userInfo 内的所有属性：

```js
this.oData.userInfo = {
  nickName: 'dnt',
  avatarUrl: this.data.userInfo.avatarUrl
}
```

当然你也可以直接在 data 里声明好：

```js
  data: {
    motto: 'Hello World',
    userInfo: { nickName: null },
    ...
```

### 组件

```js
import create from '../../utils/create'

create.Component({
  data: {
    a: { b: Math.random() }
  },

  ready: function () {
    //这里可以或者组件所属页面注入的 store
    console.log(this.store)
    //触发事件
    this.store.emitter.emit('foo', { a: 'b' })
    setTimeout(()=>{
      this.oData.a.b = 1
    },3000)
  },
})
```

### 数组

```js
import create from '../../utils/create'
import util from '../../utils/util'

create.Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.oData.logs = (wx.getStorageSync('logs') || []).map(log => {
      return util.formatTime(new Date(log))
    })

    setTimeout(() => {
      this.oData.logs[0] = 'Changed!'
    }, 1000)

  }
})
```

这里需要注意，改变数组的 length 不会触发视图更新，需要使用 size 方法:

```js
this.oData.yourArray.size(3)
```

## 其他

```js
this.oData.arr.push(111) //会触发视图更新
//每个数组的方法都有对应的 pureXXX 方法
this.oData.arr.purePush(111) //不会触发视图更新

this.oData.arr.size(2) //会触发视图更新
this.oData.arr.length = 2 //不会触发视图更新

```

## mitt 语法

```js
const emitter = mitt()

// listen to an event
emitter.on('foo', e => console.log('foo', e) )

// listen to all events
emitter.on('*', (type, e) => console.log(type, e) )

// fire an event
emitter.emit('foo', { a: 'b' })

// working with handler references:
function onFoo() {}
emitter.on('foo', onFoo)   // listen
emitter.off('foo', onFoo)  // unlisten
```

[详细参见 mitt github](https://github.com/developit/mitt)
<!-- 
## 原理

最开始 `omi-mp-create` 打算使用 proxy，但是调研了下兼容性，还是打算使用 obaa 来进行数据变更监听。

因为小程序 IOS 使用内置的 jscore，安卓使用 x5，所以 Proxy 兼容性(IOS10+支持，安卓基本都支持)

![](https://github.com/Tencent/westore/raw/master/asset/ios.jpg)

实时统计地址：https://developer.apple.com/support/app-store/



```js
this.setData({
  logs: [1, 2, 3]
})
setTimeout(() => {
  this.setData({
    'logs[2]': null
  })
}, 2000)

setTimeout(() => {
  console.log(this.data.logs.length)
}, 3000)
```

#### 页面生命周期函数

| 名称 | 描述  |
| ------ | ------  |
| onLoad | 	监听页面加载	  |
| onShow | 监听页面显示	  |
| onReady | 监听页面初次渲染完成  |
| onHide | 监听页面隐藏	  |
| onUnload | 监听页面卸载  |

### 组件生命周期函数

| 名称 | 描述  |
| ------ | ------  |
| created | 	在组件实例进入页面节点树时执行，注意此时不能调用 setData	  |
| attached | 在组件实例进入页面节点树时执行	  |
| ready | 在组件布局完成后执行，此时可以获取节点信息（使用 SelectorQuery ）	  |
| moved | 在组件实例被移动到节点树另一个位置时执行	  |
| detached | 在组件实例被从页面节点树移除时执行  | -->


## 谁在使用

![微信支付](../../assets/wepay.png)

## MIT Lic
