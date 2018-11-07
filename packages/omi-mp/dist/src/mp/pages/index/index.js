import appCss from '../../app.wxss'
import indexCss from './index.wxss'
import { h, define, WeElement } from 'omi'

function css() {
  return appCss + indexCss
}

function render() {
  return (
    h('view', { 'class': `container` },
      [
        h('view', { 'class': `userinfo` },
          [!hasUserInfo && canIUse ? h('button', { 'open-type': `getUserInfo`, 'bindgetuserinfo': `getUserInfo` }, [`获取头像昵称`]) : h('block', {},
            [
              h('image', { 'bindtap': `bindViewTap`, 'class': `userinfo-avatar`, 'src': userInfo.avatarUrl, 'mode': `cover` }, []),
              h('text', { 'class': `userinfo-nickname` },
                [`${userInfo.nickName}`])
            ])
          ]),
        h('view', { 'class': `usermotto` },
          [
            h('text', { 'class': `user-motto` },
              [`${motto}`])
          ])
      ])
  )
}

//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
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

define('my-app', render)
