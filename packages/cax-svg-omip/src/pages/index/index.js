
import { WeElement, define } from 'omi'
import './index.css'
import '../../components/cax-element'
import { renderSVG } from '../../components/cax-element/svg'

//获取应用实例
const app = getApp()

define('page-index', class extends WeElement {
  config = {
    // 定义需要引入的第三方组件
    usingComponents: {
      'pure-ele-test': '../../components/pure-ele-test/index' // 书写第三方组件的相对路径
    }
  }

  data = {
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

    renderSVG(
  <svg width="200" height="200">
    <g x="-50" y='-50'>
      <path onclick={this.tapHandler} width="100" height="100" d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"  style="stroke:#ff0000; fill: #ff0000"/>
    </g>
  </svg>, 'svg-a', this.$scope)


renderSVG(
  <svg width="200" height="200">
    <g x="-50" y='-50'>
      <path onclick={this.tapHandler} width="100" height="100" d="M512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"  style="stroke:#ff0000; fill: #ff0000"/>
    </g>
  </svg>, 'svg-b', this.$scope)
  }

  tapHandler = ()=>{
    console.log(this)
    console.log(123)
  }

  getUserInfo = (e) => {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.data.userInfo = e.detail.userInfo
    this.data.hasUserInfo = true
    this.update()
  }

  render() {
    const { hasUserInfo, canIUse, userInfo, motto } = this.data
    return (
      <view class="container">
        <cax-element id="svg-a"></cax-element>

        <cax-element id="svg-b"></cax-element>
        <view class="userinfo">
          {(!hasUserInfo && canIUse) ? (
            <button open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 获取头像昵称 </button>
          ) : (
              <block>
                <image bindtap={this.bindViewTap} class="userinfo-avatar" src={userInfo.avatarUrl} mode="cover"></image>
                <text class="userinfo-nickname">{userInfo.nickName}</text>
              </block>
            )}
        </view>
        <view class="usermotto">
          <text class="user-motto">{motto}</text>
        </view>

        <view >
          <button bindtap={this.gotoFilms}>点击打开 Omip 复杂案例</button>
        </view>

        <pure-ele-test></pure-ele-test>
      </view>
    )
  }
})
