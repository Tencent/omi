import create from '../../utils/create'
import store from '../../store/index'

//获取应用实例
const app = getApp()

create.Component(store, {
  use: [
    'motto',
    'userInfo',
    'hasUserInfo',
    'canIUse'
  ],
  computed: {
    reverseMotto(scope) {
      console.log(scope.data)
      return this.motto.split('').reverse().join('')
    }
  },
  data: {
    name: 'omix'
  },
  methods:{
    //事件处理函数
    bindViewTap: function () {
      wx.navigateTo({
        url: '../logs/logs'
      })
    }
  },
  ready: function () {
    if (app.globalData.userInfo) {
      this.store.data.userInfo = app.globalData.userInfo
      this.store.data.hasUserInfo = true

    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.store.data.userInfo = res.userInfo
        this.store.data.hasUserInfo = true
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.store.data.userInfo = res.userInfo
          this.store.data.hasUserInfo = true
        }
      })
    }

    setTimeout(() => {
      this.store.data.logs.push('abc')
      this.store.data.motto = '123456'
    }, 1000)

    setTimeout(() => {
      this.store.data.motto = 'abcdefg'
    }, 2000)

    const handler = function (evt) {
      console.log(evt)
    }
    store.onChange(handler)

    store.offChange(handler)

  },
  getUserInfo: function (e) {
    this.store.data.userInfo = e.detail.userInfo
    this.store.data.hasUserInfo = true

  }
})
