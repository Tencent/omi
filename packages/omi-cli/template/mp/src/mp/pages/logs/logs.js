import '../../components/my-ele/my-ele'
import appCss from '../../app.wxss'
import pageCss from './logs.wxss'
import { h, WeElement, rpx } from 'omi'
import { setData } from '../../../utils/set-data'

  //logs.js
const util = require('../../utils/util.js')

const mpOption = Page({
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
  onShow:function(){
    console.log('show2')
  },
  onHide:function(){
    console.log('hide2')
  },
  myEventHandler: function (evt) {
    //output -> dntzhang
    console.log(evt.detail.name)
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

  uninstall = mpOption.onUnload || function() {}

  installed = function(){
    mpOption.onLoad && mpOption.onLoad.call(this, route.query)
    mpOption.onReady && mpOption.onReady.call(this, route.query)
  }

  setData = setData
}

Object.keys(mpOption).forEach(key => {
  Element.prototype[key] = mpOption[key]
})

function css() {
  return rpx(appCss + pageCss)
}

function render() {
  const { logs } = Object.assign({}, this.data, this.props)
  return h('div',{'class': `container log-list `},[ [logs.map((log,index)=>{
        return h('span',{'class': `log-item`},[`${index + 1}. ${log}`])
      })],h('my-ele',{'onmyevent': this.myEventHandler,'name': `dntzhang`},[])])

}

customElements.define('we-logs', Element)
          