import Group from '../display/group.js'
import Graphics from '../display/graphics.js'
import Render from './render.js'
import Sprite from '../display/sprite.js'
import Bitmap from '../display/bitmap.js'
import Text from '../display/text.js'
import { filter } from '../filter/index.js'

class CanvasRender extends Render {
  constructor(canvasOrContext, width, height) {
    super()
    if (arguments.length === 3) {
      this.ctx = canvasOrContext
      this.width = width
      this.height = height
    } else {
      this.ctx = canvasOrContext.getContext('2d')
      this.width = canvasOrContext.width
      this.height = canvasOrContext.height
    }
  }

  clear(ctx, width, height) {
    ctx.clearRect(0, 0, width, height)
  }

  render(ctx, o, cacheData) {
    let mtx = o._matrix
    if (o.children) {
      let list = o.children.slice(0),
        l = list.length
      for (let i = 0; i < l; i++) {
        let child = list[i]
        mtx.initialize(1, 0, 0, 1, 0, 0)
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
        // if (!this.checkBoundEvent(child)) continue
        ctx.save()
        this._render(ctx, child, cacheData ? null : mtx, cacheData, true)
        ctx.restore()
      }
    } else {
      this._render(ctx, o, cacheData ? null : mtx, cacheData)
    }
  }

  _render(ctx, o, mtx, cacheData, inGroup) {
    if (!o.isVisible()) return
    if (mtx && !o.fixed) {
      o._matrix.initialize(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty)
    } else if (cacheData && !o.fixed) {
      o._matrix.initialize(
        cacheData.scale,
        0,
        0,
        cacheData.scale,
        cacheData.x * -1,
        cacheData.y * -1
      )
    } else {
      o._matrix.initialize(1, 0, 0, 1, 0, 0)
    }
    mtx = o._matrix

    // group 进行 cache canvas 内部的子元素需要进行appendTransform
    // cache canvas 渲染不叠加自身的 transform，因为进入主渲染会进行appendTransform
    if (inGroup || !cacheData) {
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
    }
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

    // if(!cacheData){
    ctx.setTransform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty)
    // }
    if (o._readyToCache || o.cacheUpdating) {
      this.setComplexProps(ctx, o)
      o._readyToCache = false
      o.cacheCtx.clearRect(0, 0, o.cacheCanvas.width, o.cacheCanvas.height)
      o.cacheCtx.save()
      this.render(o.cacheCtx, o, o._cacheData)
      o.cacheCtx.restore()
      // debug cacheCanvas
      // document.body.appendChild(o.cacheCanvas)
      if (o._readyToFilter) {
        o.cacheCtx.putImageData(
          filter(
            o.cacheCtx.getImageData(
              0,
              0,
              o.cacheCanvas.width,
              o.cacheCanvas.height
            ),
            o._filterName
          ),
          0,
          0
        )
        this._readyToFilter = false
      }

      ctx.drawImage(o.cacheCanvas, o._cacheData.x, o._cacheData.y)
    } else if (o.cacheCanvas && !cacheData) {
      this.setComplexProps(ctx, o)
      ctx.drawImage(o.cacheCanvas, o._cacheData.x, o._cacheData.y)
    } else if (o instanceof Group) {
      let list = o.children.slice(0),
        l = list.length
      for (let i = 0; i < l; i++) {
        ctx.save()
        this._render(ctx, list[i], mtx)
        ctx.restore()
      }
    } else if (o instanceof Graphics) {
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
      ctx.setFontSize && ctx.setFontSize(o.fontSize)
      if(o.fillStyle !== 'none'){
        ctx.fillStyle = o.fillStyle
        ctx.fillText(o.text, 0, 0)
      }
      if(o.strokeStyle && o.strokeStyle !== 'none'){
        ctx.strokeStyle = o.strokeStyle
        ctx.strokeText(o.text, 0, 0)
      }
    }
  }

  setComplexProps(ctx, o) {
    o.complexCompositeOperation = ctx.globalCompositeOperation = this.getCompositeOperation(
      o
    )
    o.complexAlpha = ctx.globalAlpha = this.getAlpha(o, 1)

    o.complexShadow = this.getShadow(o)
    if (o.complexShadow) {
      ctx.shadowColor = o.complexShadow.color
      ctx.shadowOffsetX = o.complexShadow.offsetX
      ctx.shadowOffsetY = o.complexShadow.offsetY
      ctx.shadowBlur = o.complexShadow.blur
    }
  }

  getCompositeOperation(o) {
    if (o.compositeOperation) return o.compositeOperation
    if (o.parent) return this.getCompositeOperation(o.parent)
  }

  getAlpha(o, alpha) {
    var result = o.alpha * alpha
    if (o.parent) {
      return this.getAlpha(o.parent, result)
    }
    return result
  }

  getShadow(o) {
    if (o.shadow) return o.shadow
    if (o.parent) return this.getShadow(o.parent)
  }
}

export default CanvasRender
