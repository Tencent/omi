//logs.js
import { formatTime } from '../../utils/util'
import create from '../../utils/create'
import store from '../../store/index'

create(store, {
  use: ['logs'],
  onLoad: function () {
    this.store.data.logs = (wx.getStorageSync('logs') || []).map((log: string) => {
      return formatTime(new Date(log))
    })
  }
})
