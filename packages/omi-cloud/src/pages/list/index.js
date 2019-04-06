import { WeElement, define } from 'omi'
import './index.css'
import arrowPng from './arrow.png'

//获取应用实例
const app = getApp()

define('page-about', class extends WeElement {
  config = {
    navigationBarBackgroundColor: '#24292e',
    navigationBarTextStyle: 'white',
    navigationBarTitleText: 'Omi',
    backgroundColor: '#ccc',
    backgroundTextStyle: 'light'
  }

  data = {
    list: []
  }

  installed() {
    wx.showLoading({
      title: '加载中'
    })
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        app.globalData.db.collection('article').field({
          title: true,
          _id: true,
          order: true
        }).get().then(res => {
          this.data.list = res.data.sort(function (a, b) {
            return a.order - b.order
          })
          this.update()
          wx.hideLoading()
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)

      }
    })
  }

  gotoTodo = () => {
    wx.navigateTo({
      url: '../index/index'
    })
  }

  gotoAbout = () => {
    wx.navigateTo({
      url: '../about/index'
    })
  }

  gotoDetail = (evt) => {
    wx.navigateTo({
      url: '../detail/index?id=' + evt.currentTarget.dataset.id
    })
  }

  render() {
    return (
      <view class='ctn'>
        {list.map(item => (
          <view class='item' data-id={item._id} bindtap={this.gotoDetail}>
            <text>{item.title}</text>
            <image src={arrowPng}></image>
          </view>
        ))}

        <view class='item' bindtap={this.gotoTodo}>
          <text>Todo App【案例】 </text>
          <image src={arrowPng}></image>
        </view>


        {/* <view class='item' bindtap={this.gotoAbout}>
          <text>Github & omijs.org</text>
          <image src={arrowPng}></image>
        </view> */}
      </view>

    )
  }
})
