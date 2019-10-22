//logs.js
import create from '../../utils/create'
import store from '../../store'

const util = require('../../utils/util.js')

create(store, {
  use: ['logs'],
  onLoad: function () {
    this.store.data.logs = (wx.getStorageSync('logs') || []).map(log => {
      return util.formatTime(new Date(log))
    })
  }
})
