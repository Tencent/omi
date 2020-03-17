import { WeElement, define } from 'omi'
import './index.css'
import comi from '../../components/comi/comi'


//获取应用实例
const app = getApp()

define('page-about', class extends WeElement {
  config = {
    navigationBarBackgroundColor: '#24292e',
    navigationBarTextStyle: 'white',
    navigationBarTitleText: ' ',
    backgroundColor: '#eeeeee',
    backgroundTextStyle: 'light'
  }

  install(options) {
    wx.showLoading({
      title: '加载中'
    })
    app.globalData.db.collection('article').doc(options.id).get().then(res=>{
      comi(res.data.md, this.$scope)
      wx.hideLoading()
    }).catch(err => {
      console.error(err)
    })
  }


  render() {
    return (
      <view>
        <include src="../../components/comi/comi.wxml" />
      </view>
    )
  }
})
