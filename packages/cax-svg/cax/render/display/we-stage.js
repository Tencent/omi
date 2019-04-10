import Group from './group.js'
import Renderer from '../render/renderer.js'
import WxHitRender from '../render/wx-hit-render.js'
import Event from '../base/event.js'

class WeStage extends Group {
  constructor (width, height, id, page) {
    super()

    const component = page.selectComponent('#' + id)
    component.setData({
      width,
      height
    })
    component.stage = this
    const canvasId = component.data.id

    const ctx = wx.createCanvasContext(canvasId, component)
    const hitCtx = wx.createCanvasContext(canvasId + 'Hit', component)
    this.renderer = new Renderer(ctx, width, height)
    this._hitRender = new WxHitRender(hitCtx, component, canvasId)
    this._overObject = null
    this.ctx = ctx
    this.hitAABB = true
    this.width = width
    this.height = height
  }

  touchStartHandler (evt) {
    const p1 = evt.changedTouches[0]

    evt.stageX = Math.round(p1.x * this.scaleX);
    evt.stageY = Math.round(p1.y * this.scaleY);

    this._getObjectUnderPoint(evt, (obj) => {
      this.willDragObject = obj
      this._mouseDownX = evt.stageX
      this._mouseDownY = evt.stageY
      this.preStageX = evt.stageX
      this.preStageY = evt.stageY
    })
  }

  touchMoveHandler (evt) {
    const p1 = evt.changedTouches[0]

    evt.stageX = Math.round(p1.x * this.scaleX);
    evt.stageY = Math.round(p1.y * this.scaleY);

    this._getObjectUnderPoint(evt, (obj) => {
      let mockEvt = new Event()
      mockEvt.stageX = evt.stageX
      mockEvt.stageY = evt.stageY
      mockEvt.pureEvent = evt

      if (this.willDragObject) {
        mockEvt.type = 'drag'
        mockEvt.dx = mockEvt.stageX - this.preStageX
        mockEvt.dy = mockEvt.stageY - this.preStageY
        this.preStageX = mockEvt.stageX
        this.preStageY = mockEvt.stageY
        this.willDragObject.dispatchEvent(mockEvt)
      }

      if (obj) {
        if (this._overObject === null) {
          this._overObject = obj
        } else {
          if (obj.id !== this._overObject.id) {
            this._overObject = obj
          } else {
            mockEvt.type = 'touchmove'
            obj.dispatchEvent(mockEvt)
          }
        }
      } else if (this._overObject) {
        this._overObject = null
      }
    })
  }

  touchEndHandler (evt) {
    const p1 = evt.changedTouches[0]

    evt.stageX = Math.round(p1.x * this.scaleX);
    evt.stageY = Math.round(p1.y * this.scaleY);

    let mockEvt = new Event()
    mockEvt.stageX = evt.stageX
    mockEvt.stageY = evt.stageY

    mockEvt.pureEvent = evt

    this._getObjectUnderPoint(evt, (obj) => {
      this._mouseUpX = evt.stageX
      this._mouseUpY = evt.stageY

      this.willDragObject = null
      this.preStageX = null
      this.preStageY = null

      if (obj && Math.abs(this._mouseDownX - this._mouseUpX) < 30 && Math.abs(this._mouseDownY - this._mouseUpY) < 30) {
        mockEvt.type = 'tap'
        obj.dispatchEvent(mockEvt)
      }
    })
  }

  _handleMouseOut (evt) {
    this.dispatchEvent({
      pureEvent: evt,
      type: 'mouseout',
      stageX: evt.stageX,
      stageY: evt.stageY
    })
  }

  _getObjectUnderPoint (evt, cb) {
    //const list = this.renderer.getHitRenderList(this)
    if (this.hitAABB) {
      return this._hitRender.hitAABB(this, evt, cb)
    } else {
      this._hitRender.clear()
      this._hitRender.hit(list, evt, cb, list.length - 1)
    }
  }

  on(type, cb) {
    switch (type) {
      case 'touchstart':
        this.touchStart = cb
        break
      case 'touchmove':
        this.touchMove = cb
        break
      case 'touchend':
        this.touchEnd = cb
        break
    }
  }
  
  update () {
    this.renderer.update(this)
  }
}

export default WeStage
