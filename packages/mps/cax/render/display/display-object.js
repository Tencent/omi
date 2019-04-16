import Matrix2D from '../base/matrix2d.js'
import EventDispatcher from '../base/event-dispatcher'
import UID from '../base/uid.js'

class DisplayObject extends EventDispatcher {
  constructor() {
    super()
    this.alpha = this.complexAlpha = this.scaleX = this.scaleY = 1
    this.x = this.y = this.rotation = this.skewX = this.skewY = this.originX = this.originY = 0
    this.cursor = null
    this.visible = true
    this._matrix = new Matrix2D()
    this._hitMatrix = new Matrix2D()
    this.id = UID.get()
    this.clipGraphics = null
    this.clipRuleNonzero = true
    this.fixed = false
    this.shadow = null
    this.compositeOperation = null
    this.absClipGraphics = null
    this.absClipRuleNonzero = true
    this.cacheUpdating = false

    this.boundsX = 0
    this.boundsY = 0

    try {
      Object.defineProperties(this, {
        stage: { get: this._getStage },
        scale: {
          get: function() {
            return this.scaleX
          },
          set: function(scale) {
            this.scaleX = this.scaleY = scale
          }
        }
      })
    } catch (e) {}

    //不推荐，使用 boundsX、boundsX、width、height代替
    this.hitBox = null
  }

  isVisible() {
    return (
      this.visible && this.alpha > 0 && this.scaleX !== 0 && this.scaleY !== 0
    )
  }

  initAABB() {
    if (
      (this.width === undefined || this.height === undefined) &&
      !this.hitBox
    ) {
      return
    }

    let x,
      y,
      width = this.width,
      height = this.height,
      mtx = this._matrix,
      tx = mtx.tx,
      ty = mtx.ty

    if (this.hitBox) {
      width = this.hitBox[2]
      height = this.hitBox[3]
      tx = this.hitBox[0] * mtx.a + this.hitBox[1] * mtx.c + tx
      ty = this.hitBox[0] * mtx.b + this.hitBox[1] * mtx.d + ty
    }

    if (this.boundsX || this.boundsY) {
      tx = this.boundsX * mtx.a + this.boundsY * mtx.c + tx
      ty = this.boundsX * mtx.b + this.boundsY * mtx.d + ty
    }

    let xA = width * mtx.a,
      xB = width * mtx.b,
      yC = height * mtx.c,
      yD = height * mtx.d,
      minX = tx,
      maxX = tx,
      minY = ty,
      maxY = ty

    if ((x = xA + tx) < minX) {
      minX = x
    } else if (x > maxX) {
      maxX = x
    }
    if ((x = xA + yC + tx) < minX) {
      minX = x
    } else if (x > maxX) {
      maxX = x
    }
    if ((x = yC + tx) < minX) {
      minX = x
    } else if (x > maxX) {
      maxX = x
    }
    if ((y = xB + ty) < minY) {
      minY = y
    } else if (y > maxY) {
      maxY = y
    }
    if ((y = xB + yD + ty) < minY) {
      minY = y
    } else if (y > maxY) {
      maxY = y
    }
    if ((y = yD + ty) < minY) {
      minY = y
    } else if (y > maxY) {
      maxY = y
    }
    this.AABB = [minX, minY, maxX - minX, maxY - minY]
    this.rectPoints = [
      {
        x: tx,
        y: ty
      },
      {
        x: xA + tx,
        y: xB + ty
      },
      {
        x: xA + yC + tx,
        y: xB + yD + ty
      },
      {
        x: yC + tx,
        y: yD + ty
      }
    ]
  }

  destroy() {
    this.parent.remove(this)
  }

  hover(over, out, move) {
    this.on('mouseover', over)
    this.on('mouseout', out)
    move && this.on('mousemove', move)
  }

  // https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/clip
  clip(graphics, notClipRuleNonzero) {
    this.clipGraphics = graphics
    this.clipRuleNonzero = !notClipRuleNonzero
  }

  unclip() {
    this.clipGraphics = null
  }

  absClip(graphics, notClipRuleNonzero) {
    this.absClipGraphics = graphics
    this.absClipRuleNonzero = !notClipRuleNonzero
  }

  unAbsClip() {
    this.absClipGraphics = null
  }

  cache(x, y, width, height, scale, cacheUpdating) {
    this._cacheData = {
      x: x || 0,
      y: y || 0,
      width: width || this.width,
      height: height || this.height,
      scale: scale || 1
    }
    this.cacheUpdating = cacheUpdating
    if (!this.cacheCanvas) {
      if (typeof wx !== 'undefined' && wx.createCanvas) {
        this.cacheCanvas = wx.createCanvas()
      } else {
        this.cacheCanvas = document.createElement('canvas')
      }
      this.cacheCtx = this.cacheCanvas.getContext('2d')
    }
    this.cacheCanvas.width = this._cacheData.width * this._cacheData.scale
    this.cacheCanvas.height = this._cacheData.height * this._cacheData.scale

    // debug cache canvas
    // this.cacheCtx.fillRect(0,0,1000,1000)
    this._readyToCache = true
  }

  uncache() {
    this.cacheCanvas = null
  }

  filter(filterName, filterBox) {
    filterBox = Object.assign(
      {},
      {
        x: 0,
        y: 0,
        width: this.width,
        height: this.height
      },
      filterBox
    )
    this.cache(filterBox.x, filterBox.y, filterBox.width, filterBox.height)
    this._readyToFilter = true
    this._filterName = filterName
  }

  setTransform(x, y, scaleX, scaleY, rotation, skewX, skewY, originX, originY) {
    this.x = x || 0
    this.y = y || 0
    this.scaleX = scaleX == null ? 1 : scaleX
    this.scaleY = scaleY == null ? 1 : scaleY
    this.rotation = rotation || 0
    this.skewX = skewX || 0
    this.skewY = skewY || 0
    this.originX = originX || 0
    this.originY = originY || 0
  }

  setMatrix(a, b, c, d, tx, ty) {
    Matrix2D.decompose(a, b, c, d, tx, ty, this)
  }

  unfilter() {
    this.uncache()
  }

  _getStage() {
    var o = this
    while (o.parent) {
      o = o.parent
    }
    if (o.___instanceof === 'Stage') {
      return o
    }
    return null
  }
}

export default DisplayObject
