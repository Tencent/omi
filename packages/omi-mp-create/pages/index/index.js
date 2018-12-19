import create from '../../utils/create'

const app = getApp()

create.Page({
  store: {
    abc: '公共数据从页面注入到页面的所有组件',
    //事件发送和监听器,或者 create.mitt()
    emitter: create.emitter
  },
  data: {
    motto: 'Hello World',
    userInfo: { },
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log(this.store)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

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


    
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
