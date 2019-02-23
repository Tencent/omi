import create from '../../utils/create'
import util from '../../utils/util'
import store from '../../store'

create(store, {
  onLoad: function () {
    this.store.data.logs = (wx.getStorageSync('logs') || []).map(log => {
      return util.formatTime(new Date(log))
    })


    setTimeout(() => {
      this.store.data.logs[0] = 'Changed!'
      this.store.data.motto = 'abc'
    }, 1000)


    setTimeout(() => {
      this.store.data.logs.push(Math.random(), Math.random())
    }, 2000)

    setTimeout(() => {
      this.store.data.logs.splice(this.store.data.logs.length - 1, 1)
    }, 3000)
  }
})
