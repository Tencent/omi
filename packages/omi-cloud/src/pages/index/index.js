
import { WeElement, define } from 'omi'
import './index.css'

//获取应用实例
const app = getApp()

define('page-index', class extends WeElement {
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

  onGetOpenid = () => {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid


        // app.globalData.db.collection('todo').add({
        //   // data 字段表示需新增的 JSON 数据
        //   data: {
        //     // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
        //     text: 'learn omi cloud',
        //     done: false
        //   },
        //   success(res) {
        //     // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        //     console.log(res)
        //   }
        // })


        app.globalData.db.collection('todo').where({
          _openid: app.globalData.openid
          //done: false
        })
          .get({
            success(res) {
              // res.data 是包含以上定义的两条记录的数组
              console.log(res.data)
            }
          })


        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
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
    const { hasUserInfo, canIUse, userInfo, motto } = this.data
    return (
      <view class="container">
        <view class="userinfo">
          {(!hasUserInfo && canIUse) ? (
            <button open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 获取头像昵称 </button>
          ) : (
              <block>
                <image bindtap={this.bindViewTap} class="userinfo-avatar" src={userInfo.avatarUrl} mode="cover"></image>
                <text class="userinfo-nickname">{userInfo.nickName}</text>
                <view >
                  <button bindtap={this.onGetOpenid}>获取 openid</button>
                </view>
              </block>
            )}
        </view>
        <view class="usermotto">
          <text class="user-motto">{motto}</text>
        </view>

        <view >
          <button bindtap={this.gotoFilms}>点击打开 Omip 复杂案例</button>
        </view>
      </view>
    )
  }
})
