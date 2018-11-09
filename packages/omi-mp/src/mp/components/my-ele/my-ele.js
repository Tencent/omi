import '../my-child/my-child'
import componentCss from './my-ele.wxss'
import { h, WeElement } from 'omi'
import { setData } from '../../../utils/set-data'


function css() {
  return rpx2px(componentCss)
}
function render() {
  
  return h('div',null,[h('my-child',null,[]),h('div',{'ontap': this.myMethods},[`my-ele`])])

}
// components/my-ele/my-ele.js
const mpOption = Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    myMethods: function() {
      console.log('myMethods')
    }
  }
})

class Element extends WeElement {
  data = mpOption.data

  render = render

  css = css

  beforeRender() {}

  beforeUpdate() {}

  afterUpdate() {}

  install = mpOption.created || function() {}

  uninstall = mpOption.detached || function() {}

  installed = function() {
    mpOption.attached && mpOption.attached.call(this)
    mpOption.ready && mpOption.ready.call(this)
  }

  setData = setData
}

Object.keys(mpOption.methods).forEach(key => {
  Element.prototype[key] = mpOption.methods[key]
})

customElements.define('my-ele', Element)
        