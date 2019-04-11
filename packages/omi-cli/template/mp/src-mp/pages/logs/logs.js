//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function (options) {
    this.setData({
      logs: (wx.getStorageSync('logs') || [Date.now(),Date.now()]).map(log => {
        return util.formatTime(new Date(log))
      })
    })

    console.log(options.name, options.age)
  },
  onShow:function(){
    console.log('show2')
  },
  onHide:function(){
    console.log('hide2')
  },
  myEventHandler: function (evt) {
    //output -> <we-logs>...</we-logs>
    console.log(this)
    //output -> dntzhang
    console.log(evt.detail.name)
  }
})
