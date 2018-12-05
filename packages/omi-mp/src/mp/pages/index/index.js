
import appCss from '../../app.wxss'
import pageCss from './index.wxss'
import { h, WeElement, rpx } from 'omi'
import { setData } from '../../../utils/set-data'

  //index.js
//获取应用实例
const app = getApp()

const mpOption = Page({
  data: {
    motto: 'Hello omi-mp',
    userInfo: {
      nickName: 'Omi',
      avatarUrl:
        'https://github.com/Tencent/omi/raw/master/assets/omi-logo.svg?sanitize=true'
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

class Element extends WeElement {
  data = mpOption.data

  render = render

  css = css

  beforeRender() {}

  beforeUpdate() {}

  afterUpdate() {}

  install() {
    this.properties = this.props
    Object.keys(mpOption).forEach(key => {
      if (typeof mpOption[key] === 'function') {
        Element.prototype[key] = mpOption[key].bind(this)
      }
    })
  }

  uninstall = mpOption.onUnload || function() {}

  installed = function() {
    mpOption.onLoad && mpOption.onLoad.call(this, route.query)
    mpOption.onReady && mpOption.onReady.call(this, route.query)

    mpOption.onReachBottom && wx._bindReachBottom(mpOption.onReachBottom, this)
  }

  setData = setData
}

Object.keys(mpOption).forEach(key => {
  Element.prototype[key] = mpOption[key]
})

function css() {
  return rpx(appCss + pageCss)
}

function render() {
  const { hasUserInfo,canIUse,userInfo,motto } = Object.assign({}, this.data, this.props)
  return h('div',{'class': `container`},[h('div',{'class': `userinfo`},[!hasUserInfo&&canIUse?h('button',{'open-type': `getUserInfo`,'ongetuserinfo': this.getUserInfo},[`获取头像昵称`]): [h('img',{'ontap': this.bindViewTap,'class': `userinfo-avatar`,'src': userInfo.avatarUrl,'mode': `cover`},[]),h('span',{'class': `userinfo-nickname`},[`${userInfo.nickName}`])]]),h('div',{'class': `usermotto`},[h('span',{'class': `user-motto`},[`${motto}`])])])

}

customElements.define('we-index', Element)
          