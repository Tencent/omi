import Group from '../display/group.js'
import Graphics from '../display/graphics.js'
import Render from './render.js'
import Event from '../base/event.js'
import Sprite from '../display/sprite.js'
import Bitmap from '../display/bitmap.js'
import Text from '../display/text.js'

class HitRender extends Render {
  constructor() {
    super()
    if (typeof wx !== 'undefined' && wx.createCanvas) {
      this.canvas = wx.createCanvas()
    } else {
      this.canvas = document.createElement('canvas')
    }

    this.canvas.width = 1
    this.canvas.height = 1
    this.ctx = this.canvas.getContext('2d')

    // debug event
    // this.canvas.width = 441
    // this.canvas.height = 441
    // this.ctx = this.canvas.getContext('2d')
    // document.body.appendChild(this.canvas)

    this.disableEvents = ['mouseover', 'mouseout', 'mousemove', 'touchmove']
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height)
  }

  hitAABB(o, evt) {
    let list = o.children.slice(0),
      l = list.length
    for (let i = l - 1; i >= 0; i--) {
      let child = list[i]
      // if (!this.isbindingEvent(child)) continue;
      let path = this._hitAABB(child, evt, [], true)

      if (path.length > 0) {
        let target = path[path.length - 1]
        this._dispatchEvent(target, evt)
        return target
      }
    }
  }

  _hitAABB(o, evt, path, rootCall) {
    if (o.ignoreHit || !o.isVisible()) {
      return
    }

    o.initAABB()
    if (o.AABB && this.checkPointInAABB(evt.stageX, evt.stageY, o.AABB)) {
      // this._bubbleEvent(o, type, evt);
      o.___$push = true
      path.push(o)
      //return o
    }

    if (o instanceof Group) {
      let list = o.children.slice(0),
        l = list.length
      for (let i = l - 1; i >= 0; i--) {
        let child = list[i]
        this._hitAABB(child, evt, path)
        if (child.___$push) {
          delete child.___$push
          //同级只找一个就好了，所有 break
          break
        }
        //if (target) return target
      }
    }

    if (rootCall) {
      return path
    }
  }

  checkPointInAABB(x, y, AABB) {
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

  hitPixel(o, evt) {
    const ctx = this.ctx
    ctx.clearRect(0, 0, 2, 2)
    let mtx = o._hitMatrix
    let list = o.children.slice(0),
      l = list.length
    for (let i = l - 1; i >= 0; i--) {
      let child = list[i]
      mtx.initialize(1, 0, 0, 1, 0, 0)
      mtx.appendTransform(
        o.x - evt.stageX,
        o.y - evt.stageY,
        o.scaleX,
        o.scaleY,
        o.rotation,
        o.skewX,
        o.skewY,
        o.originX,
        o.originY
      )
      // if (!this.checkBoundEvent(child)) continue
      ctx.save()
      let target = this._hitPixel(child, evt, mtx)
      ctx.restore()
      if (target) return target
    }
  }

  _hitPixel(o, evt, mtx) {
    if (o.ignoreHit || !o.isVisible()) return
    let ctx = this.ctx
    if (o.fixed) {
      o._hitMatrix.initialize(1, 0, 0, 1, -evt.stageX, -evt.stageY)
    } else if (mtx) {
      o._hitMatrix.initialize(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty)
    } else {
      o._hitMatrix.initialize(1, 0, 0, 1, 0, 0)
    }
    mtx = o._hitMatrix
    mtx.appendTransform(
      o.x,
      o.y,
      o.scaleX,
      o.scaleY,
      o.rotation,
      o.skewX,
      o.skewY,
      o.originX,
      o.originY
    )

    const ocg = o.clipGraphics
    if (ocg) {
      ctx.beginPath()
      ocg._matrix.copy(mtx)
      ocg._matrix.appendTransform(
        ocg.x,
        ocg.y,
        ocg.scaleX,
        ocg.scaleY,
        ocg.rotation,
        ocg.skewX,
        ocg.skewY,
        ocg.originX,
        ocg.originY
      )
      ctx.setTransform(
        ocg._matrix.a,
        ocg._matrix.b,
        ocg._matrix.c,
        ocg._matrix.d,
        ocg._matrix.tx,
        ocg._matrix.ty
      )
      ocg.render(ctx)
      ctx.clip(o.clipRuleNonzero ? 'nonzero' : 'evenodd')
    }

    const oacg = o.absClipGraphics
    if (oacg) {
      ctx.beginPath()
      oacg._matrix.initialize(1, 0, 0, 1, 0, 0)
      oacg._matrix.appendTransform(
        oacg.x,
        oacg.y,
        oacg.scaleX,
        oacg.scaleY,
        oacg.rotation,
        oacg.skewX,
        oacg.skewY,
        oacg.originX,
        oacg.originY
      )
      ctx.setTransform(
        oacg._matrix.a,
        oacg._matrix.b,
        oacg._matrix.c,
        oacg._matrix.d,
        oacg._matrix.tx,
        oacg._matrix.ty
      )
      oacg.render(ctx)
      ctx.clip(o.absClipRuleNonzero ? 'nonzero' : 'evenodd')
    }

    if (o.cacheCanvas) {
      ctx.setTransform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty)
      ctx.drawImage(o.cacheCanvas, o._cacheData.x, o._cacheData.y)
    } else if (o instanceof Group) {
      let list = o.children.slice(0),
        l = list.length
      for (let i = l - 1; i >= 0; i--) {
        ctx.save()
        let target = this._hitPixel(list[i], evt, mtx)
        ctx.restore()
        if (target) return target
      }
    } else {
      ctx.setTransform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty)
      if (o instanceof Graphics) {
        this.setComplexProps(ctx, o)

        o.render(ctx)
      } else if (o instanceof Sprite && o.rect) {
        this.setComplexProps(ctx, o)

        o.updateFrame()
        let rect = o.rect
        ctx.drawImage(
          o.img,
          rect[0],
          rect[1],
          rect[2],
          rect[3],
          0,
          0,
          rect[2],
          rect[3]
        )
      } else if (o instanceof Bitmap && o.rect) {
        this.setComplexProps(ctx, o)

        let bRect = o.rect
        ctx.drawImage(
          o.img,
          bRect[0],
          bRect[1],
          bRect[2],
          bRect[3],
          0,
          0,
          bRect[2],
          bRect[3]
        )
      } else if (o instanceof Text) {
        this.setComplexProps(ctx, o)

        ctx.font = o.font
        ctx.fillStyle = o.color
        ctx.textAlign = o.textAlign
        ctx.textBaseline = o.baseline
        ctx.fillText(o.text, 0, 0)
      }
    }

    if (o.hitBox) {
      o.initAABB()
      if (this.checkPointInAABB(evt.stageX, evt.stageY, o.AABB)) {
        this._dispatchEvent(o, evt)
        return o
      }
    } else if (ctx.getImageData(0, 0, 1, 1).data[3] > 0) {
      this._dispatchEvent(o, evt)
      return o
    }
  }

  setComplexProps(ctx, o) {
    ctx.globalCompositeOperation = o.complexCompositeOperation
    ctx.globalAlpha = o.complexAlpha
    // The shadow does not trigger the event, so remove it
    // if(o.complexShadow){
    //   ctx.shadowColor = o.complexShadow.color
    //   ctx.shadowOffsetX = o.complexShadow.offsetX
    //   ctx.shadowOffsetY = o.complexShadow.offsetY
    //   ctx.shadowBlur = o.complexShadow.blur
    // }
  }

  _dispatchEvent(obj, evt) {
    if (this.disableEvents.indexOf(evt.type) !== -1) return
    let mockEvt = new Event()
    mockEvt.stageX = evt.stageX
    mockEvt.stageY = evt.stageY
    mockEvt.pureEvent = evt
    mockEvt.type = evt.type
    obj.dispatchEvent(mockEvt)
  }
}

export default HitRender
