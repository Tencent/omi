//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello omi-mp',
    userInfo: {
      nickName: 'Omi',
      avatarUrl:
        'https://github.com/Tencent/omi/raw/master/assets/omi-logo2019.svg?sanitize=true'
    },
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs?name=dntzhang&age=18',
      // alive: true,  //当前视图是否alive，默认ture
      // scollTop: 0  //目标url的scollTop，不传scollTop的话使用以前保留的
      // 浏览器后退行为刚好 alive用true，scollTop不传
    })
  },
  onShow:function(){
    console.log('show')
  },
  onHide:function(){
    console.log('hide')
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
