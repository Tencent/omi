
import appCss from '../../app.wxss'
import pageCss from './coming_soon.wxss'
import { h, WeElement } from 'omi'
import { setData } from '../../../utils/set-data'

  
const mpOption = Page({
 
  onLoad: function () {
   
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
  return rpx2px(appCss + pageCss)
}

function render() {
  
  return h('div',{'class': `ctn`},[h('span',null,[`敬请期待`])])

}

customElements.define('we-coming_soon', Element)
          