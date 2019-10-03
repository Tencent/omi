
import componentCss from './my-child.wxss'
  import { h, WeElement, rpx } from 'omi'
  import { setData, fixProps } from '../../../utils/helper'

    // components/my-child/my-child.js
const mpOption = function () {
    return ({
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

  }
  class Element extends WeElement {
    static defaultProps = fixProps(mpOption().properties)

    data = mpOption().data

    render = render

    css = css

    beforeRender() {}

    beforeUpdate() {}

    afterUpdate() {}

    install = function() {
      this.properties = this.props
      Object.assign(this.data, JSON.parse(JSON.stringify(this.props)))
      this._mpOption = mpOption()
      this._mpOption.created && this._mpOption.created.call(this)
      Object.keys(this._mpOption.methods).forEach(key => {
        if(typeof this._mpOption.methods[key] === 'function'){
          this[key] = this._mpOption.methods[key].bind(this)
        }
      })
    }

    uninstall = mpOption().detached || function() {}

    installed = function() {
      this._mpOption.attached && this._mpOption.attached.call(this)
      this._mpOption.ready && this._mpOption.ready.call(this)
    }

    adoptedCallback = mpOption().moved || function() {}

    triggerEvent = function(name, data) {
      this.fire(name, data)
    }

    setData = setData
  }

  function css() {
    return rpx(componentCss)
  }

  function render() {
  return h("span", null, [`I am child component`]);
}


  customElements.define('wx-h5-src-mp-components-my-child-my-child', Element)
            