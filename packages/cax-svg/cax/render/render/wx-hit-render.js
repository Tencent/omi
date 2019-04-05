
import Graphics from '../display/graphics.js'
import Render from './render.js'
import Event from '../base/event.js'
import Sprite from '../display/sprite.js'
import Bitmap from '../display/bitmap.js'
import Text from '../display/text.js'

class WxHitRender extends Render {
  constructor (ctx, component, canvasId) {
    super()

    this.ctx = ctx
    this._isWeapp = true
    this._component = component
    this._hitCanvasId = canvasId + 'Hit'

    this.disableEvents = ['mouseover', 'mouseout', 'mousemove', 'touchmove']
  }

  clear () {
    this.ctx.clearRect(0, 0, 2, 2)
  }

  hitAABB (list, evt, cb) {
    const len = list.length
    for (let i = len - 1; i >= 0; i--) {
      let o = list[i]

      if (o.AABB && this.checkPointInAABB(evt.stageX, evt.stageY, o.AABB)) {
        this._dispatchEvent(o, evt)
        cb(o)
        return o
      }
    }
  }

  checkPointInAABB (x, y, AABB) {
    let minX = AABB[0]
    if (x < minX) return false
    let minY = AABB[1]
    if (y < minY) return false
    let maxX = minX + AABB[2]
    if (x > maxX) return false
    let maxY = minY + AABB[3]
    if (y > maxY) return false
    return true
  }

  hit (list, evt, cb, current) {
    const ctx = this.ctx
    const obj = list[current]
    const mtx = obj._hitMatrix.initialize(1, 0, 0, 1, 0, 0)
    ctx.save()
    mtx.appendTransform(obj.x - evt.stageX, obj.y - evt.stageY, obj.scaleX, obj.scaleY, obj.rotation, obj.skewX, obj.skewY, obj.originX, obj.originY)
    ctx.globalCompositeOperation = obj.complexCompositeOperation
    ctx.globalAlpha = obj.complexAlpha
    ctx.setTransform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty)
    if (obj instanceof Graphics) {
      obj.render(ctx)
    } else if (obj instanceof Sprite && obj.rect) {
      obj.updateFrame()
      const rect = obj.rect
      ctx.drawImage(obj.img, rect[0], rect[1], rect[2], rect[3], 0, 0, rect[2], rect[3])
    } else if (obj instanceof Bitmap && obj.rect) {
      const bRect = obj.rect
      ctx.drawImage(obj.img, bRect[0], bRect[1], bRect[2], bRect[3], 0, 0, bRect[2], bRect[3])
    } else if (obj instanceof Text) {
      ctx.font = obj.font
      ctx.fillStyle = obj.color
      ctx.textAlign= obj.textAlign
      ctx.fillText(obj.text, 0, 0)
    }
    ctx.restore()
    current--
    ctx.draw(false, () => {
      wx.canvasGetImageData({
        canvasId: this._hitCanvasId,
        x: 0,
        y: 0,
        width: 1,
        height: 1,
        success: (res) => {
          if (res.data[3] > 1) {
            this._dispatchEvent(obj, evt)
            cb(obj)
          } else {
            if (current > -1) { this.hit(list, evt, cb, current) }
          }
        }
      }, this._component)
    })
  }

  _dispatchEvent (obj, evt) {
    if (this.disableEvents.indexOf(evt.type) !== -1) return
    let mockEvt = new Event()
    mockEvt.stageX = evt.stageX
    mockEvt.stageY = evt.stageY
    mockEvt.pureEvent = evt
    mockEvt.type = evt.type
    obj.dispatchEvent(mockEvt)
  }
}

export default WxHitRender
