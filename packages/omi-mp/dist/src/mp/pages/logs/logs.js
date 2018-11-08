import appCss from '../../app.wxss'
import logsCss from './logs.wxss'
import { h, WeElement } from 'omi'
import { setData } from '../../../utils/set-data'

function css() {
  return rpx2px(appCss + logsCss)
}
function render() {
  const { logs } = Object.assign({}, this.data, this.props)
  return h('div', { class: 'container log-list' }, [
    logs.map((log, index) => {
      return h('span', { class: 'log-item' }, [`${index + 1}. ${log}`])
    })
  ])
}
//logs.js
const util = require('../../utils/util.js')

const mpOption = Page({
  data: {
    logs: []
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || [Date.now()]).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})

class Element extends WeElement {
  data = mpOption.data

  render = render

  css = css

  beforeRender() {}

  beforeUpdate() {}

  afterUpdate() {}

  install() {}

  uninstall() {}

  installed = mpOption.onLoad

  setData = setData
}

Object.keys(mpOption).forEach(key => {
  Element.prototype[key] = mpOption[key]
})

customElements.define('we-logs', Element)
