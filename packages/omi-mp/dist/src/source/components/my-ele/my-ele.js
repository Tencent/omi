import '../my-child/my-child'
import myChildCss from './my-ele.wxss'
import { h, WeElement } from 'omi'
import { setData } from '../../../utils/set-data'


function css() {
  return rpx2px(myChildCss)
}
function render() {
  
  return h('div',null,[h('my-child',null,[]),h('div',null,[`my-ele`])])

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

  installed() {}

  setData = setData
}

Object.keys(mpOption).forEach(key => {
  Element.prototype[key] = mpOption[key]
})

customElements.define('my-ele', Element)
        