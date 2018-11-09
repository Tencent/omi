//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || [Date.now()]).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  myEventHandler: function (evt) {
    //output -> dntzhang
    console.log(evt.detail.name)
  }
})
