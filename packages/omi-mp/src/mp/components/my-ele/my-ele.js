import '../my-child/my-child'
import componentCss from './my-ele.wxss'
import { h, WeElement, rpx } from 'omi'
import { setData } from '../../../utils/set-data'

  // components/my-ele/my-ele.js
const mpOption = Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name:{
      value: '',
    },
    age:{
      value: 18
    }
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
      this.triggerEvent('myevent', { name: 'dntzhang' })
    }
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
  const { name,age } = Object.assign({}, this.data, this.props)
  return h('div',null,[h('button',{'ontap': this.myMethods},[`Click me will log dntzhang to the console panel`]),h('div',null,[`props - name:${name}, age:${age}`]),h('my-child',null,[])])

}

customElements.define('my-ele', Element)
          