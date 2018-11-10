//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function (options) {
    this.setData({
      logs: (wx.getStorageSync('logs') || [Date.now()]).map(log => {
        return util.formatTime(new Date(log))
      })
    })

    console.log(options.name, options.age)
  },
  myEventHandler: function (evt) {
    //output -> dntzhang
    console.log(evt.detail.name)
  }
})
