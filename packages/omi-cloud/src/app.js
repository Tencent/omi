
import './app.css'
import './pages/list/index'
import { render, WeElement, define } from 'omi'

define('my-app', class extends WeElement {

  config = {
    pages: [
      'pages/list/index',
      'pages/detail/index',
      'pages/mp/index',
      'pages/import/index',
      'pages/index/index',
      'pages/about/index',
      'pages/code/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'Omi Cloud',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#575656",
      selectedColor: "white",
      borderStyle: "black",
      backgroundColor: "black",
      list: [
        {
          pagePath: "pages/list/index",
          text: "首页",
          iconPath: "images/home-unslt.png",
          "selectedIconPath": "images/home.png"
        },
        {
          pagePath: "pages/mp/index",
          text: "小程序",
          iconPath: "images/mp-unslt.png",
          selectedIconPath: "images/mp.png"
        },
        {
          pagePath: "pages/about/index",
          text: "omijs.org",
          iconPath: "images/omi-unslt.png",
          selectedIconPath: "images/omi.png"
        }
      ]
    }
  }

  globalData = {
    userInfo: null
  }

  install() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

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

  onShow() { }

  onHide() { }

  render() {
    return (
      <page-list />
    )
  }
})


render(<my-app />, '#app')
