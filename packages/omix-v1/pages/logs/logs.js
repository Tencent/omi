import create from '../../utils/create'
import util from '../../utils/util'

create.Page({
  data: {
    logs: [],
    motto: 'Hello World',
		reverseMotto() {
      return this.motto.split('').reverse().join('')
    }
  },
  onLoad: function () {
    this.oData.logs = (wx.getStorageSync('logs') || []).map(log => {
      return util.formatTime(new Date(log))
    })

    setTimeout(() => {
      this.oData.logs[0] = 'Changed!'
      this.oData.motto = Math.random() +  ''
    }, 1000)


    setTimeout(() => {
      this.oData.logs.push(Math.random(), Math.random())
    }, 2000)

    setTimeout(() => {
      this.oData.logs.splice(this.oData.logs.length-1,1)
    }, 4000)
  }
})
