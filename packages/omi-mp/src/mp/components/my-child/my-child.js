
import componentCss from './my-child.wxss'
import { h, WeElement, rpx } from 'omi'
import { setData } from '../../../utils/set-data'

  // components/my-child/my-child.js
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
  static props = mpOption.properties

  data = mpOption.data

  render = render

  css = css

  beforeRender() {}

  beforeUpdate() {}

  afterUpdate() {}

  install = function() {
    this.properties = this.props
    mpOption.created && mpOption.created.call(this)
    Object.keys(mpOption.methods).forEach(key => {
      if(typeof mpOption.methods[key] === 'function'){
        this[key] = mpOption.methods[key].bind(this)
      }
    })
  }

  uninstall = mpOption.detached || function() {}

  installed = function() {
    mpOption.attached && mpOption.attached.call(this)
    mpOption.ready && mpOption.ready.call(this)
  }

  adoptedCallback = mpOption.moved || function() {}

  triggerEvent = function(name, data) {
    this.fire(name, data)
  }

  setData = setData
}

Object.keys(mpOption.methods).forEach(key => {
  Element.prototype[key] = mpOption.methods[key]
})

function css() {
  return rpx(componentCss)
}

function render() {
  
  return h('span',null,[`I am child component`])

}

customElements.define('my-child', Element)
          