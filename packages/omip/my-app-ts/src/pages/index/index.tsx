
import { WeElement, define } from 'omi'
import './index.css'

//获取应用实例
const app = getApp()

interface IData{
  motto: string,
  userInfo: any,
  hasUserInfo: boolean,
  canIUse: boolean
}


define('page-index', class extends WeElement {
  data: IData = {
    motto: 'Hello Omip',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  }

  //事件处理函数
  bindViewTap = () => {
    wx.navigateTo({
      url: '../logs/index'
    })
  }

  gotoFilms = () => {
    wx.navigateTo({
      url: '../list/index'
    })
  }

  install() {
    if (app.globalData.userInfo) {
      this.data.userInfo = app.globalData.userInfo
      this.data.hasUserInfo = true
      this.update()
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.data.userInfo = res.userInfo
        this.data.hasUserInfo = true
        this.update()
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.data.userInfo = res.userInfo
          this.data.hasUserInfo = true
          this.update()
        }
      })
    }
  }

  getUserInfo = (e) => {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.data.userInfo = e.detail.userInfo
    this.data.hasUserInfo = true
    this.update()
  }

  render() {
    return (
      <view class="container">
        <view class="userinfo">
          {(!this.data.hasUserInfo && this.data.canIUse) ? (
            <button open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 获取头像昵称 </button>
          ) : (
              <block>
                <image bindtap={this.bindViewTap} class="userinfo-avatar" src={this.data.userInfo.avatarUrl} mode="cover"></image>
                <text class="userinfo-nickname">{this.data.userInfo.nickName}</text>
              </block>
            )}
        </view>
        <view class="usermotto">
          <text class="user-motto">{this.data.motto}</text>
        </view>

        <view >
          <button bindtap={this.gotoFilms}>点击打开 Omip 复杂案例</button>
        </view>
      </view>
    )
  }
})
