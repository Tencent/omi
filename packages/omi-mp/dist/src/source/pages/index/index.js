
import appCss from '../../app.wxss'
import indexCss from './index.wxss'
import { h, WeElement } from 'omi'
import { setData } from '../../../utils/set-data'

function css() {
  return rpx2px(appCss + indexCss)
}
function render() {
  const { hasUserInfo,canIUse,userInfo,motto } = Object.assign({}, this.data, this.props)
  return h('div',{'class': `container`},[h('div',{'class': `userinfo`},[!hasUserInfo&&canIUse?h('button',{'open-type': `getUserInfo`,'ongetuserinfo': this.getUserInfo},[`获取头像昵称`]): h('img',{'ontap': this.bindViewTap,'class': `userinfo-avatar`,'src': userInfo.avatarUrl,'mode': `cover`},[]),h('span',{'class': `userinfo-nickname`},[`${userInfo.nickName}`])]),h('div',{'class': `usermotto`},[h('span',{'class': `user-motto`},[`${motto}`])])])

}
//index.js
//获取应用实例
const app = getApp()

const mpOption = Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
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

class Element extends WeElement {
  data = mpOption.data

  render = render

  css = css

  beforeRender() {}

  beforeUpdate() {}

  afterUpdate() {}

  install() {}

  uninstall() {}

  installed = mpOption.onLoad

  setData = setData
}

Object.keys(mpOption).forEach(key => {
  Element.prototype[key] = mpOption[key]
})

customElements.define('we-index', Element)
        