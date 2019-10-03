## omix

> 小程序全局状态管理

极小却精巧的小程序框架，对小程序入侵性几乎为零

## 3分钟精通 

### API

* `create(store, option)`      创建页面， store 可跨页面共享
* `create(option)`             创建组件
* `this.store.data`            全局 store 和 data，页面和页面所有组件可以拿到， 操作 data 会自动更新视图


## 实战

定义 store:

```js
export default {
  data: {
    logs: []
  }
}
```

定义页面:

```js
import create from '../../utils/create'
import util from '../../utils/util'
import store from '../../store'

create(store, {
  //声明依赖
  use: ['logs'],

  onLoad: function () {
    this.store.data.logs = (wx.getStorageSync('logs') || []).map(log => {
      return util.formatTime(new Date(log))
    })

    setTimeout(() => {
      this.store.data.logs[0] = 'Changed!'
    }, 1000)

    setTimeout(() => {
      this.store.data.logs.push(Math.random(), Math.random())
    }, 2000)

    setTimeout(() => {
      this.store.data.logs.splice(this.store.data.logs.length - 1, 1)
    }, 3000)
  }
})
```

```html
<view class="container log-list">
  <block wx:for="{{logs}}" wx:for-item="log">
    <text class="log-item">{{index + 1}}. {{log}}</text>
  </block>
  <view>
    <test-store></test-store>
  </view>
</view>
```

可以看到里面使用 test-store 组件, 看下组件源码:

```js
import create from '../../utils/create'

create({
  
})
```

```html
<view class="ctn">
  <view>
    <text>Log Length: {{logs.length}}</text>
  </view>
</view>
```


## 其他配置

修改 store.js 的 debug 字段用来打开和关闭 log 调试:

```js
export default {
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    logs: [],
		reverseMotto() {
      return this.motto.split('').reverse().join('')
    }
  },
  debug: true, //我是开关
  updateAll: true //当为 true 时，无脑全部更新，组件或页面不需要声明 use
}
```

默认是打开的，`store.data` 的所以变动都会出现在开发者工具 log 面板，如下图所示:

![](../../assets/omix.png)

## 其他

这里需要注意，改变数组的 length 不会触发视图更新，需要使用 size 方法:

```js
this.oData.arr.size(2) //会触发视图更新
this.oData.arr.length = 2 //不会触发视图更新

this.oData.arr.push(111) //会触发视图更新
//每个数组的方法都有对应的 pureXXX 方法
this.oData.arr.purePush(111) //不会触发视图更新
```

####  函数属性

```js
data: {
    motto: 'Hello World',
    reverseMotto() {
      return this.motto.split('').reverse().join('')
    }
},
```

其中 reverseMotto 可以直接绑定在 wxml 里，motto 更新会自动更新 reverseMotto 的值。


## License

MIT © Tencent
