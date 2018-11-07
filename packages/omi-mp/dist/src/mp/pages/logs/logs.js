import appCss from '../../app.wxss'
import logsCss from './logs.wxss'

function css(){
  return appCss + logsCss
}

function render(){
  return h('view',{'class': `containerlog-list`},[h('block',{},logs.map((log,index)=>{
        h('text',{'class': `log-item`},[`${index + 1}. ${log}`])
      }))])
}

//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})



