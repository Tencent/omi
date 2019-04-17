import DisplayObject from './display-object'
import util from '../../common/util'

let measureCtx

if (util.isWeapp) {
  measureCtx = wx.createCanvasContext('measure0')
} else if (typeof document !== 'undefined') {
  measureCtx = document.createElement('canvas').getContext('2d')
}

class Text extends DisplayObject {
  constructor(text, option) {
    super()

    this.text = text
    option = option || {}
    this.font = option.font || '10px sans-serif'
    this.color = option.color || 'black'
    this.textAlign = option.textAlign || 'left'
    this.baseline = option.baseline || 'top'
  }

  getWidth() {
    if (!measureCtx) {
      if (util.isWegame) {
        measureCtx = wx.createCanvas().getContext('2d')
      }
    }

    if (this.font) {
      measureCtx.font = this.font
    }
    return measureCtx.measureText(this.text).width
  }
}

export default Text
