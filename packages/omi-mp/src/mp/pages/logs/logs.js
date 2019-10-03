import '../../components/my-ele/my-ele'
import appCss from '../../app.wxss'
import pageCss from './logs.wxss'
import { h, WeElement, rpx } from 'omi'
import { setData } from '../../../utils/helper'

  //logs.js
const util = require('../../utils/util.js')

const mpOption = function () {
  return ({
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

}
class Element extends WeElement {
  data = mpOption().data

  render = render

  css = css

  beforeRender() {}

  beforeUpdate() {}

  afterUpdate() {}

  install() {
    this.properties = this.props
    this.data = this.data || {};
    Object.assign(this.data, JSON.parse(JSON.stringify(this.props)))
    this._mpOption = mpOption()
    Object.keys(this._mpOption).forEach(key => {
      if (typeof this._mpOption[key] === 'function') {
        Element.prototype[key] = this._mpOption[key].bind(this)
      }
    })
  }

  uninstall = mpOption().onUnload || function() {}

  installed = function() {
    this._mpOption.onLoad && this._mpOption.onLoad.call(this, route.query)
    this._mpOption.onReady && this._mpOption.onReady.call(this, route.query)

    this._mpOption.onReachBottom && wx._bindReachBottom(this._mpOption.onReachBottom, this)
  }

  setData = setData
}

function css() {
  return rpx(appCss + pageCss)
}

function render() {
  const { logs } = this.data;
  return h("div", { class: `container log-list ` }, [
    logs.map((log, index) => {
      return h(
        "block",
        { style: { width: "100%" } },
        h("span", { class: `log-item` }, [`${index + 1}. ${log}`]),
        h("span", { class: `log-item` }, [`by omi-mp`])
      );
    }),
    h(
      "wx-h5-src-mp-components-my-ele-my-ele",
      { onmyevent: this.myEventHandler, name: `dntzhang` },
      []
    ),
    h("img", { src: require("../../images/wechat.png") }, [])
  ]);
}


customElements.define('we-logs', Element)
          