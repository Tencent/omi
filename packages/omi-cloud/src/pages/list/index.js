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
    wx.showLoading()
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        app.globalData.db.collection('article').get().then(res=>{
          this.data.list = res.data
          this.update()
          wx.hideLoading()
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
       
      }
    })
  }

  gotoDetail = (evt) => {
    wx.navigateTo({
      url: '../detail/index?id=' + evt.target.dataset.id
    })
  }

  render() {
    return (
      <view>
        {list.map(item=>(
          <view class='item' data-id={item._id} bindtap={this.gotoDetail}> 
           <text>{item.title}</text> 
           <image src={arrowPng}></image>
          </view>
        ))}
      </view>
    )
  }
})