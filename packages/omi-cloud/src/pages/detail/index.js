import { WeElement, define } from 'omi'
import './index.css'
import WxParse from '../../components/wxParse/wxParse'


//获取应用实例
const app = getApp()
const Remarkable = require('remarkable')
const md = new Remarkable()

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
      const article = md.render(res.data.md)
      WxParse.wxParse('article', 'html', article, this.$scope, 5)
      wx.hideLoading()
    })
  }


  render() {
    return (
      <view>
        <import src='../../components/wxParse/wxParse.wxml' />
        <template is='wxParse' data='{{wxParseData:article.nodes}}' />
      </view>
    )
  }
})
