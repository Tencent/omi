import CanvasRender from '../render/canvas-render'
import Group from '../display/group.js'

class Renderer {
  constructor(canvasOrContext, width, height) {
    this.renderList = []
    if (arguments.length === 3) {
      this.renderer = new CanvasRender(canvasOrContext, width, height)
      this.width = width
      this.height = height
    } else {
      this.renderer = new CanvasRender(canvasOrContext)
      this.width = canvasOrContext.width
      this.height = canvasOrContext.height
    }
    this.ctx = this.renderer.ctx
  }

  update(stage) {
    this.renderer.clear(this.ctx, this.width, this.height)
    this.renderer.render(this.ctx, stage)
    this.ctx.draw && this.ctx.draw()
  }

  getHitRenderList(stage) {
    const objs = this.renderList
    objs.length = 0
    this.computeMatrix(stage)
    return objs
  }

  computeMatrix(stage) {
    for (var i = 0, len = stage.children.length; i < len; i++) {
      this._computeMatrix(stage.children[i])
    }
  }

  initComplex(o) {
    o.complexCompositeOperation = this._getCompositeOperation(o)
    o.complexAlpha = this._getAlpha(o, 1)
  }

  _computeMatrix(o, mtx) {
    if (!o.isVisible()) {
      return
    }
    if (mtx && !o.fixed) {
      o._matrix.initialize(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty)
    } else {
      o._matrix.initialize(1, 0, 0, 1, 0, 0)
    }

    o._matrix.appendTransform(
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

    if (o instanceof Group) {
      var list = o.children,
        len = list.length,
        i = 0
      for (; i < len; i++) {
        this._computeMatrix(list[i], o._matrix)
      }
    } else {
      // if (o instanceof Graphics) {
      //   this.renderList.push(o)
      //   this.initComplex(o)
      // } else {
      o.initAABB()
      // if (this.isInStage(o)) {
      this.renderList.push(o)
      this.initComplex(o)
      // }
      // }
    }
  }

  _getCompositeOperation(o) {
    if (o.compositeOperation) return o.compositeOperation
    if (o.parent) return this._getCompositeOperation(o.parent)
  }

  _getAlpha(o, alpha) {
    var result = o.alpha * alpha
    if (o.parent) {
      return this._getAlpha(o.parent, result)
    }
    return result
  }

  isInStage(o) {
    return this.collisionBetweenAABB(o.AABB, this.stage.AABB)
  }

  collisionBetweenAABB(AABB1, AABB2) {
    var maxX = AABB1[0] + AABB1[2]
    if (maxX < AABB2[0]) return false
    var minX = AABB1[0]
    if (minX > AABB2[0] + AABB2[2]) return false
    var maxY = AABB1[1] + AABB1[3]
    if (maxY < AABB2[1]) return false
    var minY = AABB1[1]
    if (minY > AABB2[1] + AABB2[3]) return false
    return true
  }
}

export default Renderer
