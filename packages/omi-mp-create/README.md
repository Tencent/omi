## omi-mp-create

> 极小却精巧的小程序框架

## 5分钟精通 omi-mp-create

### API

* `create.Page(option)`             创建页面
* `create.Component(option)`        创建组件
* `this.oData`                      操作页面或组件的数据（会自动更新视图）

### 实战

#### 页面

```js
import create from '../../utils/create'

const app = getApp()

create.Page({
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


## Todo

* supports option.store 
* supports fn props

## 谁在使用


## MTI Lic
