import { WeElement, define } from 'omi'
import './index.css'
import WxParse from '../../components/wxParse/wxParse'
import data from './introduction.md.js'


//获取应用实例
const app = getApp()

define('page-about', class extends WeElement {
  config = {
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTextStyle: 'black',
    navigationBarTitleText: 'Omi 简介',
    backgroundColor: '#eeeeee',
    backgroundTextStyle: 'light'
  }

  installed() {
    const Remarkable = require('remarkable');
    const md = new Remarkable();

    const article = md.render(data.md)
    console.log(article)
    WxParse.wxParse('article', 'html', article, this._weappRef, 5)


    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        app.globalData.db.collection('article').add({
          // data 字段表示需新增的 JSON 数据
          data: {
            // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
            md: data.md,
            title: data.title,
            createTime: app.globalData.db.serverDate()
          },
          success: (res) => {
            // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
            console.log(res)
          },
          fail: err => {
            wx.hideLoading()
          }
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.hideLoading()
      }
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